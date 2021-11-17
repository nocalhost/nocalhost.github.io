import React from "react";
import { Form, Input, Select, Tooltip } from "antd";
import styles from "../index.module.scss";
import Translate, { translate } from "@docusaurus/Translate";
import IconAdd from "../images/icon_add.svg";
import { PATCHES_OP_OPTION, PATCHES_TYPE } from "../../../constants";
import IconRemove from "../images/icon_remove.svg";

const Patches = ({ form }) => {
  return (
    <>
      <Form.List name="patches">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => (
              <div className={styles["directory-item"]} key={field.key}>
                <Form.Item
                  label={
                    index === 0
                      ? translate({
                          message: "Patches",
                        })
                      : ""
                  }
                  style={{ marginBottom: 0 }}
                >
                  <div className={styles["form-item"]}>
                    <Form.Item
                      {...field}
                      name={[field.name, "type"]}
                      fieldKey={[field.fieldKey, "type"]}
                      style={{ marginBottom: 0, marginRight: 36 }}
                    >
                      <Select
                        style={{ width: 190 }}
                        defaultValue="strategic"
                        options={PATCHES_TYPE}
                      />
                    </Form.Item>
                    {form?.getFieldValue("patches")?.[index]?.type !==
                      "json" && (
                      <Form.Item
                        {...field}
                        name={[field.name, "patch"]}
                        fieldKey={[field.fieldKey, "patch"]}
                        style={{ marginBottom: 0 }}
                      >
                        <Input
                          style={{ width: 190 }}
                          placeholder={translate({
                            message: "Please Input patche",
                          })}
                        />
                      </Form.Item>
                    )}
                  </div>
                  {form?.getFieldValue("patches")?.[index]?.type === "json" && (
                    <Form.List name={[field.name, "patch"]} initialValue={[{}]}>
                      {(patches, { add, remove }) => (
                        <div className={styles["patches-area"]}>
                          {patches.map((patch, patchIndex) => (
                            <div
                              key={patchIndex}
                              className={styles["patches-json"]}
                            >
                              <div
                                className={styles["directory-item"]}
                                style={{ marginTop: 8 }}
                              >
                                <div className={styles["label-field"]}>
                                  <span className={styles["label"]}>Op:</span>
                                  <Form.Item
                                    {...patch}
                                    name={[patch.name, "op"]}
                                    fieldKey={[patch.fieldKey, "op"]}
                                    style={{ marginBottom: 0 }}
                                  >
                                    <Select
                                      options={PATCHES_OP_OPTION}
                                      style={{ width: 120 }}
                                      placeholder={translate({
                                        message: "Please Select Op",
                                      })}
                                    />
                                  </Form.Item>
                                </div>
                              </div>
                              <div
                                className={styles["directory-item"]}
                                style={{ marginTop: 8 }}
                              >
                                <div className={styles["label-field"]}>
                                  <span className={styles["label"]}>Path:</span>
                                  <Form.Item
                                    {...patch}
                                    name={[patch.name, "path"]}
                                    fieldKey={[patch.fieldKey, "path"]}
                                    style={{ marginBottom: 0, marginRight: 36 }}
                                  >
                                    <Input
                                      placeholder={translate({
                                        message: "Please Input Path",
                                      })}
                                      style={{ width: 120 }}
                                    />
                                  </Form.Item>
                                </div>
                                <div className={styles["label-field"]}>
                                  <span className={styles["label"]}>
                                    Value:
                                  </span>
                                  <Form.Item
                                    {...patch}
                                    name={[patch.name, "value"]}
                                    fieldKey={[patch.fieldKey, "value"]}
                                    style={{ marginBottom: 0 }}
                                  >
                                    <Input
                                      style={{ width: 120 }}
                                      placeholder={translate({
                                        message: "Please Input Value",
                                      })}
                                    />
                                  </Form.Item>
                                </div>
                              </div>
                              <div
                                className={styles["patches-json-remove"]}
                                onClick={() => remove(field.name)}
                              >
                                <Tooltip
                                  title={translate({ message: "Remove" })}
                                >
                                  <IconRemove />
                                </Tooltip>
                              </div>
                            </div>
                          ))}
                          <div
                            className={styles["add-field"]}
                            onClick={() => add()}
                            style={{ marginTop: 8 }}
                          >
                            <IconAdd />
                            <span style={{ marginLeft: 4 }}>
                              <Translate>Add Patche Item</Translate>
                            </span>
                          </div>
                        </div>
                      )}
                    </Form.List>
                  )}
                </Form.Item>
                <div
                  className={
                    index === 0
                      ? styles["patches-remove-first"]
                      : styles["patches-remove"]
                  }
                  onClick={() => remove(field.name)}
                >
                  <Tooltip title={translate({ message: "Remove" })}>
                    <IconRemove />
                  </Tooltip>
                </div>
              </div>
            ))}
            <div className={styles["add-field"]} onClick={() => add()}>
              <IconAdd />
              <span style={{ marginLeft: 4 }}>
                <Translate>Add Patches</Translate>
              </span>
            </div>
          </>
        )}
      </Form.List>
    </>
  );
};

export default Patches;
