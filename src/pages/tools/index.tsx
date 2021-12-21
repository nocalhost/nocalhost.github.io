import React, { useState, useEffect, useRef } from "react";
import Layout from "@theme/Layout";
import {
  Button,
  Form,
  Select,
  Input,
  message,
  Modal,
  Alert,
  AutoComplete,
} from "antd";
import BasicConfig from "./components/BasicConfig";
import FileSync from "./components/FileSync";
import RunAndDebug from "./components/RunAndDebug";
import Volume from "./components/Volume";
import ResourceLimit from "./components/ResourceLimit";
import EnvVar from "./components/EnvVar";
import Result from "./components/Result";
import PortForward from "./components/PortForward";
import GuidCard from "./components/GuideCard";
import Patches from "./components/Patches";

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
import { MenuItem, ConfigType, YamlObj, SaveInfo, ISync } from "../../types";
import { CONFIG_TYPE, WORKLOAD_TYPE, DEFAULT_CONTAINER } from "../../constants";

import {
  isYamlValid,
  isFileSyncValid,
  isCommandValid,
  isVolumeValid,
  isLimitValid,
  isEnvVarValid,
  isPortForwardValid,
  isPatchesValid,
  isContainerItemValid,
} from "../../util";
import { saveConfig, queryConfig } from "../../util/request";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import EnterButton from "./components/EnterButton";
import { ItemLabel } from "./components/RunAndDebug";

const cx = classNames.bind(styles);

const search2Obj = (search: string): SaveInfo => {
  let obj: SaveInfo = {} as SaveInfo;
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
    obj = {} as SaveInfo;
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
  const [menuList, setMenuList] = useState<MenuItem[]>(CONFIG_TYPE);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [fileSyncValid, setFileSyncValid] = useState<boolean>(false);
  const [commandValid, setCommandValid] = useState<boolean>(false);
  const [volumeValid, setVolumeValid] = useState<boolean>(false);
  const [limitValid, setLimitValid] = useState<boolean>(false);
  const [envVarValid, setEnvVarValid] = useState<boolean>(false);
  const [portForwardValid, setPortForwardValid] = useState<boolean>(false);
  const [patchesValid, setPatchesValid] = useState<boolean>(false);
  const [URLParams, setURLParams] = useState<SaveInfo>({} as SaveInfo);
  const [showResult, setShowResult] = useState<string>("");
  const [containerName, setContainerName] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [newContainerIndex, setNewContainerIndex] = useState<number>(0);
  const [hasContainer, setHasContainer] = useState<boolean>(false);
  const [isNameValid, setIsNameValid] = useState<boolean>(true);
  const [workloadType, setWorkloadType] = useState([]);
  const [openWorkload, setOpenWorkload] = useState<boolean>(false);
  const [containerValidArr, setContainerValidArr] = useState<boolean[]>([]);

  const timer = useRef<number | null>();
  const flagRef = useRef<string>("change");
  const workloadRef = useRef<any>(null);

  const handleCopy = () => {
    message.success(translate({ message: "Copy Successfully!" }));
  };

  useEffect(() => {
    const search = location?.search;
    if (search) {
      const searchObj: SaveInfo = search2Obj(location.search);
      setURLParams(searchObj);

      try {
        getConfig(searchObj);
      } catch (e) {
        console.log(e);
      }
    }
    return clearTimeout(timer.current);
  }, []);

  useEffect(() => {
    if (yamlObj) {
      setYamlStr(json2yaml.stringify(yamlObj).replace(/\-\-\-\s*\n/, ""));
    }
    // check container valid
    const tmpValidArr =
      yamlObj?.containers?.map((item) => isContainerItemValid(item)) || [];
    setContainerValidArr(tmpValidArr);
    checkContainerName();
    setIsValid(isYamlValid(yamlObj));
    setFileSyncValid(isFileSyncValid(yamlObj));
    setCommandValid(isCommandValid(yamlObj));
    setVolumeValid(isVolumeValid(yamlObj));
    setLimitValid(isLimitValid(yamlObj));
    setEnvVarValid(isEnvVarValid(yamlObj));
    setPortForwardValid(isPortForwardValid(yamlObj));
    setPatchesValid(isPatchesValid(yamlObj));
  }, [yamlObj]);

  // check duplicate container name
  function checkContainerName(name?: string) {
    let isValid = true;
    const containerNames = yamlObj?.containers?.map((item) => item.name) || [];
    if (name) {
      if (containerNames.includes(name)) {
        message.warning(
          translate({
            message: "Container name has duplicate!",
          })
        );
        isValid = false;
      }
    } else {
      if (new Set(containerNames).size !== containerNames?.length) {
        message.warning(
          translate({ message: "Container name has duplicate, please check!" })
        );
        isValid = false;
      }
    }
    setIsNameValid(isValid);
    return isValid;
  }

  const getConfig = async (params: SaveInfo) => {
    const config = await queryConfig(params);
    const containerArr = config.containers.map((item, index) => ({
      label: item.name,
      value: index,
    }));
    setContainerOptions(containerArr);

    let currentContainer = containerArr[0];

    if (params?.container) {
      const result = containerArr.find(
        (item) => item.label === params.container
      );
      if (result) {
        currentContainer = result;
      }
    }

    setYamlObj(config);
    form.setFieldsValue({
      workloadName: config.name,
      workloadType: config.serviceType,
      name: currentContainer?.label,
      containerIndex: currentContainer?.value,
    });
    coverFormField(config.containers[currentContainer?.value || 0]);
    setHasContainer(
      config.containers[currentContainer?.value || 0] ? true : false
    );
    console.log(config);
  };

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
                if (
                  [
                    "deployment",
                    "statefulset",
                    "daemonset",
                    "job",
                    "cronjob",
                    "pod",
                  ].includes(value)
                ) {
                  setMenuList([
                    ...CONFIG_TYPE,
                    {
                      name: "Patches",
                      status: "pending",
                      type: "Patches",
                    },
                  ]);
                } else {
                  setMenuList(CONFIG_TYPE);
                }
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
                tmpObj[containerIndex].label = value;
                setContainerOptions(tmpObj);
                tmpYamlObj.containers[containerIndex][field] = value;
              }
              break;
            case "deleteProtection":
              {
                let obj =
                  tmpYamlObj.containers[containerIndex]["dev"]["sync"] ||
                  ({} as ISync);
                obj.deleteProtection = value;
                tmpYamlObj.containers[containerIndex]["dev"]["sync"] = {
                  ...obj,
                };
              }
              break;
            case "syncType":
              {
                let obj =
                  tmpYamlObj.containers[containerIndex]["dev"]["sync"] ||
                  ({} as ISync);
                obj.type = value;
                tmpYamlObj.containers[containerIndex]["dev"]["sync"] = {
                  ...obj,
                };
              }
              break;
            case "syncMode":
              {
                let obj =
                  tmpYamlObj.containers[containerIndex]["dev"]["sync"] ||
                  ({} as ISync);
                obj.mode = value;
                if (value === "gitIgnore") {
                  delete obj["filePattern"];
                  delete obj["ignoreFilePattern"];
                } else {
                  obj.filePattern = form.getFieldValue("filePattern");
                  obj.ignoreFilePattern =
                    form.getFieldValue("ignoreFilePattern");
                }
                tmpYamlObj.containers[containerIndex]["dev"]["sync"] = {
                  ...obj,
                };
              }
              break;
            case "filePattern":
            case "ignoreFilePattern":
              {
                let obj =
                  tmpYamlObj.containers[containerIndex]["dev"]["sync"] ||
                  ({} as ISync);
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
                obj[field] = +value;
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
                  obj[a][b] = value
                    ? b === "memory"
                      ? `${value}Mi`
                      : value
                    : "";
                } else {
                  obj[a] = {
                    [b]: value ? (b === "memory" ? `${value}Mi` : value) : "",
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
          let obj =
            yamlObj.containers[containerIndex]["dev"]["sync"] || ({} as ISync);
          if (obj[field]) {
            obj[field][index] = value;
          } else {
            obj[field] = {};
            obj[field][index] = value;
          }
          yamlObj.containers[containerIndex]["dev"]["sync"] = { ...obj };
        } else if (len === 5) {
          const [field, index, prop, subIndex, attr] = name;
          tmpYamlObj.containers[containerIndex].dev[field][index][prop] =
            yamlObj.containers[containerIndex].dev[field][index][prop] || [];
          let obj =
            tmpYamlObj?.containers?.[containerIndex]?.dev?.[field]?.[index]?.[
              prop
            ]?.[subIndex] || {};
          obj[attr] = value;
          tmpYamlObj.containers[containerIndex].dev[field][index][prop][
            subIndex
          ] = {
            ...obj,
          };
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

            if (field === "patches" && prop === "patch") {
              const arr =
                tmpYamlObj?.containers?.[containerIndex]?.dev?.patches || [];
              const result = arr.map((item) => {
                const obj = item || ({} as { type: string });
                return {
                  ...obj,
                  type: obj.type || "strategic",
                };
              });
              // @ts-ignore
              tmpYamlObj.containers[containerIndex].dev.patches = result;
            }

            if (field === "patches" && prop === "type") {
              if (value === "strategic") {
                tmpYamlObj.containers[containerIndex].dev.patches[index] = {
                  type: value,
                  patch: "",
                };
              } else {
                tmpYamlObj.containers[containerIndex].dev.patches[index] = {
                  type: value,
                  patch: [{}],
                };
              }
              // set field
              form.setFieldsValue({
                patches: tmpYamlObj.containers[containerIndex].dev.patches,
              });
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
    }, 200);
  };

  const handleApply = async () => {
    const { from, application, name, namespace, type, kubeconfig } = URLParams;
    if (checkContainerName()) {
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
            if (Message.indexOf("[Configuration Validate Error]") > -1) {
              message.error(Message, 10);
            } else {
              setShowResult("fail");
              message.error(Message);
            }
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
    }
  };

  const handleInputContainer = (e: any) => {
    if (e.keyCode === 13) {
      generateContainer(e.target.value);
    }
  };

  const generateContainer = (value: string) => {
    if (containerOptions.map((item) => item.label).includes(value)) {
      form.setFieldsValue({
        containerIndex: "",
      });
      message.warning(translate({ message: "Container Name Is Duplicate!" }));
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
      setHasContainer(true);
    } else {
      if (flagRef.current === "delete") {
        flagRef.current = "change";
      } else {
        form.setFieldsValue({
          name: containerOptions[value]?.label,
          containerIndex: value,
        });
        setHasContainer(true);
      }
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
      deleteProtection: true,
      storageClass: "",
      persistentVolumeDirs: [],
      "requests-memory": "",
      "limits-memory": "",
      "requests-cpu": "",
      "limits-cpu": "",
      env: [],
      portForward: [],
      patches: [],
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
          mode = "pattern",
          filePattern = [],
          ignoreFilePattern = [],
          deleteProtection = true,
        } = currentContainer.dev.sync;
        form.setFieldsValue({
          syncType: type,
          syncMode: mode,
          filePattern,
          ignoreFilePattern,
          deleteProtection,
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

      const formatMemory = (memory: string) => {
        const num = parseFloat(memory);
        return isNaN(num) ? "" : memory.indexOf("G") > -1 ? num * 1024 : num;
      };

      if (currentContainer?.dev?.resources) {
        if (currentContainer?.dev?.resources?.limits) {
          const { memory, cpu } = currentContainer?.dev?.resources?.limits;

          form.setFieldsValue({
            "limits-memory": formatMemory(memory),
            "limits-cpu": cpu,
          });
        }
        if (currentContainer?.dev?.resources?.requests) {
          const { memory, cpu } = currentContainer?.dev?.resources?.requests;
          form.setFieldsValue({
            "requests-memory": formatMemory(memory),
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

      // patches
      const patches = currentContainer?.dev?.patches;
      if (patches) {
        form.setFieldsValue({
          patches,
        });
      }
    }
  }

  const handleDeleteContainer = (index: number) => {
    const containers = yamlObj.containers;
    flagRef.current = "delete";
    containers.splice(index, 1);
    containerOptions.splice(index, 1);
    setYamlObj({
      ...yamlObj,
    });
    const tmpOptions = containerOptions.map((item, index) => ({
      ...item,
      value: index,
    }));
    setContainerOptions([...tmpOptions]);
    const containerIndex = form.getFieldValue("containerIndex");
    setTimeout(() => {
      if (index === containerIndex) {
        form.setFieldsValue({
          containerIndex: "",
          name: "",
        });
        setContainerName("");
        setHasContainer(false);
      } else if (index < containerIndex) {
        form.setFieldsValue({
          containerIndex: containerIndex - 1,
        });
      } else {
        form.setFieldsValue({
          containerIndex: containerIndex,
        });
      }
    }, 0);
  };

  const handleSearchWorkload = () => {
    setWorkloadType(WORKLOAD_TYPE);
    setOpenWorkload(true);
  };

  const handleSelectWorkload = () => {
    setWorkloadType([]);
    setOpenWorkload(false);
  };

  return (
    <Layout>
      {!showResult && (
        <div className={styles["tool-wrap"]}>
          <div className={styles["left"]}>
            <div className={styles["header"]}>
              <div className={styles["header-content"]}>
                <span>
                  <Translate>Development Configuration</Translate>
                </span>
                <div className={styles["warning"]}>
                  {isValid ? <IconSuccess /> : <IconWaring />}
                  <span
                    className={cx({
                      valid: isValid,
                    })}
                  >
                    {isNameValid ? (
                      isValid ? (
                        <Translate>
                          Completed the minimal development configuration
                        </Translate>
                      ) : (
                        <Translate>
                          Minimal development configuration is incomplete
                        </Translate>
                      )
                    ) : (
                      <Translate>Container name has duplicate!</Translate>
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
                    <AutoComplete
                      ref={workloadRef}
                      options={workloadType}
                      style={{ width: 352 }}
                      open={openWorkload}
                      onSelect={handleSelectWorkload}
                      onBlur={() => setOpenWorkload(false)}
                    >
                      <Input
                        placeholder={translate({
                          message: "Please select workload type",
                        })}
                        addonAfter={
                          <EnterButton
                            handleShowSelect={handleSearchWorkload}
                          />
                        }
                      />
                    </AutoComplete>
                  </Form.Item>
                </div>
                <div className={styles["form-line-start"]}>
                  <Form.Item
                    label={
                      <ItemLabel
                        title={translate({ message: "Container Tip" })}
                        label={translate({ message: "Container" })}
                      />
                    }
                    required={true}
                    name="containerIndex"
                  >
                    <Select
                      style={{ width: 352 }}
                      filterOption={false}
                      notFoundContent={null}
                      onInputKeyDown={handleInputContainer}
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
                                  {containerValidArr[index] ? (
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
                  {containerValidArr.includes(false) && (
                    <div className={styles["container-waring"]}>
                      <IconWaring />
                      <span className={styles["ml6"]}>
                        <Translate>Container Waring</Translate>
                      </span>
                    </div>
                  )}
                </div>
                <div
                  className={cx({
                    "config-wrap": true,
                    disabled: !hasContainer,
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
                              item.name === "Basic Config" &&
                                (isValid ? <IconSuccess /> : <IconWaring />)
                            }
                            {item.name === "File Synchronization" &&
                              (fileSyncValid ? (
                                <IconSuccess />
                              ) : (
                                <IconOption />
                              ))}
                            {item.name === "Run And Debug" &&
                              (commandValid ? <IconSuccess /> : <IconOption />)}
                            {item.name === "Volume" &&
                              (volumeValid ? <IconSuccess /> : <IconOption />)}
                            {item.name === "Resource Limit" &&
                              (limitValid ? <IconSuccess /> : <IconOption />)}
                            {item.name === "Development Variable" &&
                              (envVarValid ? <IconSuccess /> : <IconOption />)}
                            {item.name === "Port Forward" &&
                              (portForwardValid ? (
                                <IconSuccess />
                              ) : (
                                <IconOption />
                              ))}
                            {item.name === "Patches" &&
                              (patchesValid ? <IconSuccess /> : <IconOption />)}
                            <span>
                              <Translate>{item.name}</Translate>
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className={styles["config"]}>
                    {configType === "Basic" && <BasicConfig />}
                    {configType === "FileSync" && <FileSync form={form} />}
                    {configType === "RunAndDebug" && <RunAndDebug />}
                    {configType === "Volume" && <Volume />}
                    {configType === "ResourceLimit" && <ResourceLimit />}
                    {configType === "DevEnv" && <EnvVar />}
                    {configType === "PortForward" && <PortForward />}
                    {configType === "Patches" && <Patches form={form} />}
                  </div>
                  {!hasContainer && <div className={styles["mask"]}></div>}
                </div>
              </Form>
              <ul className={styles["menu-tip"]}>
                <div className={styles["menu-tip-title"]}>
                  <Translate>Development configuration tips</Translate>
                </div>
                <li className={styles["menu-tip-item"]}>
                  <IconSuccess />
                  <span>
                    <Translate>Completed</Translate>
                  </span>
                </li>
                <li className={styles["menu-tip-item"]}>
                  <IconWaring />
                  <span>
                    <Translate>Incomplete</Translate>
                  </span>
                </li>
                <li className={styles["menu-tip-item"]}>
                  <IconOption />
                  <span>
                    <Translate>Non-required fields</Translate>
                  </span>
                </li>
              </ul>
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
