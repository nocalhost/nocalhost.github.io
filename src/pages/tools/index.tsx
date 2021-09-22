import React, { useState, useEffect, useRef } from "react";
import Layout from "@theme/Layout";

import styles from "./index.module.scss";
import { Button, Form, Select, Input, message, Modal } from "antd";
import BasicConfig from "./components/BasicConfig";
import FileSync from "./components/FileSync";
import RunAndDebug from "./components/RunAndDebug";
import Volume from "./components/Volume";
import ResourceLimit from "./components/ResourceLimit";
import EnvVar from "./components/EnvVar";
import Result from "./components/Result";
import PortForward from "./components/PortForward";
import GuidCard from "./components/GuideCard";
import "antd/dist/antd.css";

import Translate, { translate } from "@docusaurus/Translate";
import IconWaring from "./images/icon_label_warning.svg";
import IconSuccess from "./images/icon_label_success.svg";
import IconOption from "./images/icon_label_option.svg";
import IconAdd from "./images/icon_add.svg";
import IconDel from "./images/icon_del.svg";
import ImageYamlEmpty from "./images/image_yamlEmpty.svg";
import DownArrow from "./components/DownArrow";
import IconFile from "./images/icon_container_unfinished.svg";
import IconFileActive from "./images/icon_container_finish.svg";

import CopyToClipboard from "react-copy-to-clipboard";

const json2yaml = require("json2yaml");

import { SearchParams, MenuItem, ConfigType, YamlObj } from "./types";
import { CONFIG_TYPE, WORKLOAD_TYPE, DEFAULT_CONTAINER } from "./constants";

import {
  isYamlValid,
  isFileSyncValid,
  isCommandValid,
  isVolumeValid,
  isLimitValid,
  isEnvVarValid,
  isPortForwardValid,
} from "./util";
import { saveConfig } from "./util/request";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const search2Obj = (search: string): SearchParams => {
  let obj: SearchParams = {};
  try {
    if (search) {
      search
        .slice(1)
        .split("&")
        .forEach((item) => {
          const [key, value] = item.split("=");
          obj[key] = value;
        });
    }
  } catch (e) {
    obj = {};
  }
  return obj;
};

const Tools = () => {
  const [form] = Form.useForm();
  const [yamlObj, setYamlObj] = useState<YamlObj | null>({
    name: "",
    serviceType: "",
  } as YamlObj);
  const [yamlStr, setYamlStr] = useState("");
  const [containerOptions, setContainerOptions] = useState([]);
  const [configType, setConfigType] = useState<ConfigType>("Basic");
  const [menuList] = useState<MenuItem[]>(CONFIG_TYPE);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [fileSyncValid, setFileSyncValid] = useState<boolean>(false);
  const [commandValid, setCommandValid] = useState<boolean>(false);
  const [volumeValid, setVolumeValid] = useState<boolean>(false);
  const [limitValid, setLimitValid] = useState<boolean>(false);
  const [envVarValid, setEnvVarValid] = useState<boolean>(false);
  const [portForwardValid, setPortForwardValid] = useState<boolean>(false);
  const [URLParams, setURLParams] = useState<SearchParams>({});
  const [showResult, setShowResult] = useState<string>("");
  const [containerName, setContainerName] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [newContainerIndex, setNewContainerIndex] = useState<number>(0);

  const timer = useRef<number | null>();
  const search = location.search;

  const handleSubmit = () => {};

  const handleCopy = () => {
    message.success(translate({ message: "Copy Successfully!" }));
  };

  useEffect(() => {
    if (search) {
      const searchObj: SearchParams = search2Obj(location.search);
      setURLParams(searchObj);
      const { name, type, container } = searchObj;
      const containerArr = container.split(",").map((item, index) => {
        return {
          label: item,
          value: index,
        };
      });
      setContainerOptions(containerArr);
      const tmpObj = {
        name,
        serviceType: type,
        containers: containerArr.map((item) => {
          return {
            name: item.label,
            ...DEFAULT_CONTAINER,
          };
        }),
      };
      setYamlObj(tmpObj);
      form.setFieldsValue({
        workloadName: name,
        workloadType: type,
        name: containerArr[0]?.label,
        containerIndex: containerArr[0]?.value,
      });
      coverFormField(tmpObj.containers[0]);
    }
    return clearTimeout(timer.current);
  }, []);

  useEffect(() => {
    if (yamlObj) {
      setYamlStr(json2yaml.stringify(yamlObj).replace(/\-\-\-\s*\n/, ""));
    }
    setIsValid(isYamlValid(yamlObj));
    setFileSyncValid(isFileSyncValid(yamlObj));
    setCommandValid(isCommandValid(yamlObj));
    setVolumeValid(isVolumeValid(yamlObj));
    setLimitValid(isLimitValid(yamlObj));
    setEnvVarValid(isEnvVarValid(yamlObj));
    setPortForwardValid(isPortForwardValid(yamlObj));
  }, [yamlObj]);

  const handleFieldChange = (changedFields: any) => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    timer.current = window.setTimeout(() => {
      try {
        const { containerIndex } = form.getFieldsValue();
        const { name } = changedFields[0];
        let value = changedFields[0]?.value;
        const len = name.length;
        const tmpYamlObj =
          yamlObj ||
          ({
            name: "",
            serviceType: "",
          } as YamlObj);
        if (len === 1) {
          const field = changedFields[0]?.name[0];
          switch (field) {
            case "workloadName":
              {
                tmpYamlObj.name = value;
              }
              break;
            case "workloadType":
              {
                tmpYamlObj.serviceType = value;
              }
              break;
            case "containerIndex":
              {
                // switch container
                const currentContainer = tmpYamlObj.containers[containerIndex];
                form.setFieldsValue({
                  image: currentContainer?.dev.image,
                });
                coverFormField();
              }
              break;
            case "name":
              {
                // change container name
                const tmpObj = containerOptions;
                containerOptions[containerIndex].label = value;
                setContainerOptions(tmpObj);
                tmpYamlObj.containers[containerIndex][field] = value;
              }
              break;
            case "syncType":
              {
                let obj =
                  tmpYamlObj.containers[containerIndex]["dev"]["sync"] || {};
                obj.type = value;
                tmpYamlObj.containers[containerIndex]["dev"]["sync"] = {
                  ...obj,
                };
              }
              break;
            case "filePattern":
            case "ignoreFilePattern":
              {
                let obj =
                  tmpYamlObj.containers[containerIndex]["dev"]["sync"] || {};
                obj[field] = value.map((item) =>
                  item === undefined ? "" : item
                );
                tmpYamlObj.containers[containerIndex]["dev"]["sync"] = {
                  ...obj,
                };
              }

              break;
            case "command-run":
            case "command-debug":
              {
                const cmd = field.split("-")[1];
                let obj =
                  tmpYamlObj.containers[containerIndex]["dev"]["command"] || {};

                obj[cmd] = value.split(" ");
                tmpYamlObj.containers[containerIndex]["dev"]["command"] = {
                  ...obj,
                };
              }
              break;
            case "remoteDebugPort":
              {
                let obj =
                  tmpYamlObj.containers[containerIndex]["dev"]["debug"] || {};
                obj[field] = value;
                tmpYamlObj.containers[containerIndex]["dev"]["debug"] = {
                  ...obj,
                };
              }

              break;
            case "limits-memory":
            case "requests-cpu":
            case "limits-cpu":
            case "requests-memory":
              {
                const [a, b] = field.split("-");
                let obj =
                  tmpYamlObj.containers[containerIndex]["dev"]["resources"] ||
                  {};
                if (obj[a]) {
                  obj[a][b] = b === "memory" ? `${value}Mi` : value;
                } else {
                  obj[a] = {
                    [b]: b === "memory" ? `${value}Mi` : value,
                  };
                }
                tmpYamlObj.containers[containerIndex]["dev"]["resources"] = {
                  ...obj,
                };
              }
              break;
            case "persistentVolumeDirs":
              tmpYamlObj.containers[containerIndex]["dev"][field] = value.map(
                (item) => (item === undefined ? "" : item)
              );
              break;
            case "env":
              tmpYamlObj.containers[containerIndex]["dev"][field] = value.map(
                (item) => (item === undefined ? "" : item)
              );
              break;
            case "portForward":
              {
                tmpYamlObj.containers[containerIndex]["dev"][field] = value.map(
                  (item) =>
                    item === undefined
                      ? ""
                      : Object.keys(item)
                          .map((key) => item[key])
                          .join(":")
                );
              }
              break;
            default:
              {
                let obj = tmpYamlObj.containers[containerIndex]["dev"] || {};
                obj[field] = value;
                tmpYamlObj.containers[containerIndex]["dev"] = { ...obj };
              }
              break;
          }
        } else if (len === 2) {
          const [field, index] = changedFields[0]?.name;
          let obj = yamlObj.containers[containerIndex]["dev"]["sync"] || {};
          if (obj[field]) {
            obj[field][index] = value;
          } else {
            obj[field] = {};
            obj[field][index] = value;
          }
          yamlObj.containers[containerIndex]["dev"]["sync"] = { ...obj };
        } else {
          const [field, index, prop] = name;

          if (field === "portForward") {
            const { portForward } = form.getFieldsValue();

            const arr =
              tmpYamlObj.containers[containerIndex]["dev"][field] || [];
            arr[index] = [
              portForward[index]?.local || "",
              portForward[index]?.container || "",
            ].join(":");
          } else {
            if (field === "persistentVolumeDirs" && prop === "capacity") {
              value = value + "Gi";
            }
            let obj =
              tmpYamlObj.containers[containerIndex]["dev"][field][index] || {};
            obj[prop] = value;
            tmpYamlObj.containers[containerIndex]["dev"][field][index] = {
              ...obj,
              [prop]: value,
            };
          }
        }
        setYamlObj({
          ...tmpYamlObj,
        });
      } catch (e) {
        throw new Error(e);
      }
    }, 500);
  };

  const handleApply = async () => {
    const { from, application, name, namespace, type, kubeconfig } = URLParams;
    if (from === "daemon") {
      try {
        setShowLoading(true);
        const response = await saveConfig({
          application,
          name,
          namespace,
          type,
          kubeconfig,
          config: window.btoa(yamlStr),
        });
        const { Success, Message } = response;
        if (Success) {
          setShowResult("success");
          message.success(Message);
        } else {
          setShowResult("fail");
          message.error(Message);
        }
        setShowLoading(false);
      } catch (e) {
        setShowLoading(false);
        setShowResult("fail");
        message.error("Please Check Network");
        throw new Error(e);
      }
    } else {
      setShowModal(true);
    }
  };

  const handleInputContainer = (e: any) => {
    if (e.keyCode === 13) {
      generateContainer(e.target.value);
    }
  };

  const handleSelectSearch = (value) => {
    setContainerName(value);
  };

  const generateContainer = (value: string) => {
    if (containerOptions.map((item) => item.label).includes(value)) {
      form.setFieldsValue({
        containerIndex: "",
      });
      return message.warning(
        translate({ message: "Container Name Is Duplicate!" })
      );
    }
    const tmpOptions = containerOptions || [];
    tmpOptions.push({
      label: value,
      value: containerOptions.length,
    });
    const tmpYamlObj = yamlObj || ({} as YamlObj);
    tmpYamlObj.containers = tmpYamlObj.containers || [];
    tmpYamlObj.containers.push({
      name: value,
      ...JSON.parse(JSON.stringify(DEFAULT_CONTAINER)),
    });
    setYamlObj({ ...tmpYamlObj });
    setContainerOptions(tmpOptions);
    form.setFieldsValue({
      name: value,
      containerIndex: tmpOptions.length - 1,
    });
    coverFormField(true);
  };

  const handleMenuChange = (menu: ConfigType) => {
    setConfigType(menu);
  };

  const handleSelect = (value) => {
    if (value === "add") {
      generateContainer(containerName || `container-${newContainerIndex + 1}`);
      setNewContainerIndex(newContainerIndex + 1);
      localStorage.setItem("containerIndex", newContainerIndex + 1 + "");
    } else {
      form.setFieldsValue({
        name: containerOptions[value].label,
        containerIndex: value,
      });
    }
  };

  function coverFormField(container = null) {
    form.setFieldsValue({
      image: "",
      gitUrl: "",
      shell: "",
      workDir: "",
      sidecarImage: "",
      syncType: "",
      filePattern: [],
      ignoreFilePattern: [],
      "command-run": "",
      "command-debug": "",
      remoteDebugPort: "",
      hotReload: false,
      storageClass: "",
      persistentVolumeDirs: [],
      "requests-memory": "",
      "limits-memory": "",
      "requests-cpu": "",
      "limits-cpu": "",
      env: [],
      portForward: [],
    });
    const { containerIndex } = form.getFieldsValue();
    const currentContainer =
      container || yamlObj.containers[containerIndex] || {};
    if (currentContainer?.dev) {
      const {
        image,
        gitUrl,
        shell,
        workDir,
        sidecarImage,
        hotReload,
        storageClass,
        persistentVolumeDirs,
      } = currentContainer.dev;
      form.setFieldsValue({
        image,
        gitUrl,
        shell,
        workDir,
        sidecarImage,
        hotReload: !!hotReload,
        storageClass,
        persistentVolumeDirs:
          persistentVolumeDirs?.map((item) => {
            return {
              ...item,
              capacity: item?.capacity.replace("Gi", ""),
            };
          }) || [],
      });

      if (currentContainer.dev?.sync) {
        const {
          type,
          filePattern = [],
          ignoreFilePattern = [],
        } = currentContainer.dev.sync;
        form.setFieldsValue({
          syncType: type,
          filePattern,
          ignoreFilePattern,
        });
      }

      if (currentContainer.dev?.command) {
        const { run = [], debug = [] } = currentContainer?.dev?.command;

        form.setFieldsValue({
          "command-run": run.join(" "),
          "command-debug": debug.join(" "),
        });
      }

      if (currentContainer.dev?.debug?.remoteDebugPort) {
        const { remoteDebugPort } = currentContainer.dev.debug;
        form.setFieldsValue({
          remoteDebugPort,
        });
      }

      if (currentContainer?.dev?.resources) {
        if (currentContainer?.dev?.resources?.limits) {
          const { memory, cpu } = currentContainer?.dev?.resources?.limits;
          form.setFieldsValue({
            "limits-memory": isNaN(parseFloat(memory))
              ? ""
              : parseFloat(memory),
            "limits-cpu": cpu,
          });
        }
        if (currentContainer?.dev?.resources?.requests) {
          const { memory, cpu } = currentContainer?.dev?.resources?.requests;
          form.setFieldsValue({
            "requests-memory": isNaN(parseFloat(memory))
              ? ""
              : parseFloat(memory),
            "requests-cpu": cpu,
          });
        }
      }
      const portForward = currentContainer?.dev?.portForward;
      if (portForward) {
        form.setFieldsValue({
          portForward: portForward.map((item) => {
            const [local, container] = item.split(":");
            return {
              local: local || "",
              container: container || "",
            };
          }),
        });
      }
    }
  }

  const handleDeleteContainer = (index: number) => {
    const containers = yamlObj.containers;
    containers.splice(index, 1);
    containerOptions.splice(index, 1);
    setYamlObj({
      ...yamlObj,
    });
    setContainerOptions([...containerOptions]);
    const containerIndex = form.getFieldValue("containerIndex");
    console.log(index, containerIndex, index === containerIndex);
    if (index === form.getFieldValue("containerIndex")) {
      form.setFieldsValue({
        containerIndex: "",
        name: "",
      });
      setContainerName("");
    }
  };

  return (
    <Layout>
      {!showResult && (
        <div className={styles["tool-wrap"]}>
          <div className={styles["left"]}>
            <div className={styles["header"]}>
              <div className={styles["header-content"]}>
                <span>
                  <Translate>Parameter configuration</Translate>
                </span>
                <div className={styles["warning"]}>
                  {isValid ? <IconSuccess /> : <IconWaring />}
                  <span
                    className={cx({
                      valid: isValid,
                    })}
                  >
                    {isValid ? (
                      <Translate>
                        Completed the minimal development configuration
                      </Translate>
                    ) : (
                      <Translate>
                        Not yet completed the minimal development configuration
                      </Translate>
                    )}
                  </span>
                </div>
              </div>
              <Button
                loading={showLoading}
                onClick={handleApply}
                disabled={!isValid}
                type="primary"
              >
                <Translate>Apply</Translate>
              </Button>
            </div>
            <div className={styles["content"]}>
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                onFieldsChange={handleFieldChange}
              >
                <div className={styles["form-line"]}>
                  <Form.Item
                    label={translate({
                      message: "Workload Name",
                    })}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    name="workloadName"
                  >
                    <Input
                      style={{ width: 352 }}
                      placeholder={translate({
                        message: "Please input workload name ",
                      })}
                    />
                  </Form.Item>
                  <Form.Item
                    label={translate({
                      message: "Workload Type",
                    })}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    name="workloadType"
                  >
                    <Select
                      options={WORKLOAD_TYPE}
                      style={{ width: 352 }}
                      suffixIcon={DownArrow}
                      placeholder={translate({
                        message: "Please select workload type",
                      })}
                    />
                  </Form.Item>
                </div>
                <Form.Item
                  label={translate({ message: "Select Container" })}
                  required={true}
                  name="containerIndex"
                >
                  <Select
                    style={{ width: 352 }}
                    filterOption={false}
                    notFoundContent={null}
                    onInputKeyDown={handleInputContainer}
                    onSearch={handleSelectSearch}
                    onSelect={handleSelect}
                    suffixIcon={DownArrow}
                    placeholder={translate({
                      message: "Please input or select container name",
                    })}
                  >
                    {containerOptions.map((item, index) => {
                      return (
                        <Select.Option key={index} value={item.value}>
                          <div className={styles["container-option"]}>
                            <div className={styles["option-left"]}>
                              <div className={styles["icon"]}>
                                {form.getFieldValue("containerIndex") ===
                                index ? (
                                  <IconFileActive />
                                ) : (
                                  <IconFile />
                                )}
                              </div>

                              {item.label}
                            </div>
                            <div
                              className={styles["delete"]}
                              onClick={() => handleDeleteContainer(index)}
                            >
                              <IconDel />
                            </div>
                          </div>
                        </Select.Option>
                      );
                    })}
                    <Select.Option key="add" value="add">
                      <div
                        style={{ display: "flex", alignItems: "center" }}
                        className={styles["add-container"]}
                      >
                        <IconAdd />
                        <span style={{ marginLeft: 4 }}>
                          {translate({ message: "Add Container" })}
                        </span>
                      </div>
                    </Select.Option>
                  </Select>
                </Form.Item>
                <div
                  className={cx({
                    "config-wrap": true,
                    disabled: !form.getFieldValue("name"),
                  })}
                >
                  <div className={styles["menu"]}>
                    <ul className={styles["menu-list"]}>
                      {menuList.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className={cx({
                              "menu-item": true,
                              active: item.type === configType,
                            })}
                            onClick={() => handleMenuChange(item.type)}
                          >
                            {
                              /*Basic Config*/
                              index === 0 &&
                                (isValid ? <IconSuccess /> : <IconWaring />)
                            }
                            {index === 1 &&
                              (fileSyncValid ? (
                                <IconSuccess />
                              ) : (
                                <IconOption />
                              ))}
                            {index === 2 &&
                              (commandValid ? <IconSuccess /> : <IconOption />)}
                            {index === 3 &&
                              (volumeValid ? <IconSuccess /> : <IconOption />)}
                            {index === 4 &&
                              (limitValid ? <IconSuccess /> : <IconOption />)}
                            {index === 5 &&
                              (envVarValid ? <IconSuccess /> : <IconOption />)}
                            {index === 6 &&
                              (portForwardValid ? (
                                <IconSuccess />
                              ) : (
                                <IconOption />
                              ))}
                            <span>
                              <Translate>{item.name}</Translate>
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                    <ul className={styles["menu-tip"]}>
                      <div className={styles["menu-tip-title"]}>
                        <Translate>Menu Tip Title</Translate>
                      </div>
                      <li className={styles["menu-tip-item"]}>
                        <IconSuccess />
                        <span>
                          <Translate>Menu Success Tip</Translate>
                        </span>
                      </li>
                      <li className={styles["menu-tip-item"]}>
                        <IconWaring />
                        <span>
                          <Translate>Menu Finish Tip</Translate>
                        </span>
                      </li>
                      <li className={styles["menu-tip-item"]}>
                        <IconOption />
                        <span>
                          <Translate>Menu Option Tip</Translate>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={styles["config"]}>
                    {configType === "Basic" && <BasicConfig />}
                    {configType === "FileSync" && <FileSync />}
                    {configType === "RunAndDebug" && <RunAndDebug />}
                    {configType === "Volume" && <Volume />}
                    {configType === "ResourceLimit" && <ResourceLimit />}
                    {configType === "DevEnv" && <EnvVar />}
                    {configType === "PortForward" && <PortForward />}
                  </div>
                  {!form.getFieldValue("name") && (
                    <div className={styles["mask"]}></div>
                  )}
                </div>
              </Form>
            </div>
          </div>
          <div className={styles["right"]}>
            <div className={styles["title"]}>
              <Translate>Yaml Preview</Translate>
              {isValid && (
                <CopyToClipboard onCopy={handleCopy} text={yamlStr}>
                  <Button>
                    <Translate>Copy</Translate>
                  </Button>
                </CopyToClipboard>
              )}
            </div>
            <div className={styles["content"]}>
              <Input.TextArea
                disabled={true}
                rows={36}
                style={{
                  height: "100%",
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                }}
                value={yamlStr}
              ></Input.TextArea>
            </div>
            {!yamlStr && (
              <div className={styles["yaml-empty"]}>
                <ImageYamlEmpty />
              </div>
            )}
          </div>
        </div>
      )}
      {showResult && (
        <Result status={showResult} workload={yamlObj.name} yamlStr={yamlStr} />
      )}
      <Modal
        width={700}
        footer={null}
        visible={showModal}
        onCancel={() => setShowModal(false)}
      >
        <GuidCard workload={yamlObj.name} yamlStr={yamlStr} />
      </Modal>
    </Layout>
  );
};

export default Tools;
