import React from "react";
import { Form, Input, Select } from "antd";
import styles from "../index.module.scss";
import Translate, { translate } from "@docusaurus/Translate";
import IconAdd from "../images/icon_add.svg";
import { PATCHES_OP_OPTION, PATCHES_TYPE } from "../../../constants";

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
                      <Select style={{ width: 190 }} options={PATCHES_TYPE} />
                    </Form.Item>
                    {form?.getFieldValue("patches")?.[index]?.type ===
                      "strategic" && (
                      <Form.Item
                        {...field}
                        name={[field.name, "patch"]}
                        fieldKey={[field.fieldKey, "patch"]}
                        style={{ marginBottom: 0 }}
                      >
                        <Input style={{ width: 190 }} />
                      </Form.Item>
                    )}
                  </div>
                  {form?.getFieldValue("patches")?.[index]?.type === "json" && (
                    <Form.List name={[field.name, "patch"]}>
                      {(patches, { add, remove }) => (
                        <>
                          {patches.map((patch, patchIndex) => (
                            <div key={patchIndex}>
                              <div
                                className={styles["directory-item"]}
                                style={{ marginTop: 8 }}
                              >
                                <div className={styles["label-field"]}>
                                  <span className={styles["label"]}>Op</span>
                                  <Form.Item
                                    {...patch}
                                    name={[patch.name, "op"]}
                                    fieldKey={[patch.fieldKey, "op"]}
                                    style={{ marginBottom: 0 }}
                                  >
                                    <Select
                                      options={PATCHES_OP_OPTION}
                                      style={{ width: 190 }}
                                    />
                                  </Form.Item>
                                </div>
                              </div>
                              <div
                                className={styles["directory-item"]}
                                style={{ marginTop: 8 }}
                              >
                                <div className={styles["label-field"]}>
                                  <span className={styles["label"]}>Path</span>
                                  <Form.Item
                                    {...patch}
                                    name={[patch.name, "path"]}
                                    fieldKey={[patch.fieldKey, "path"]}
                                    style={{ marginBottom: 0, marginRight: 36 }}
                                  >
                                    <Input />
                                  </Form.Item>
                                </div>
                                <div className={styles["label-field"]}>
                                  <span className={styles["label"]}>Value</span>
                                  <Form.Item
                                    {...patch}
                                    name={[patch.name, "value"]}
                                    fieldKey={[patch.fieldKey, "value"]}
                                    style={{ marginBottom: 0 }}
                                  >
                                    <Input />
                                  </Form.Item>
                                </div>
                              </div>
                            </div>
                          ))}
                          <div
                            className={styles["add-field"]}
                            onClick={() => add()}
                          >
                            <IconAdd />
                            <span style={{ marginLeft: 4 }}>
                              <Translate>Add Patches Item</Translate>
                            </span>
                          </div>
                        </>
                      )}
                    </Form.List>
                  )}
                </Form.Item>
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
