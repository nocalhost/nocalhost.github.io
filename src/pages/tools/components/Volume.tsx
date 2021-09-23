import React from "react";
import { Form, Input, InputNumber } from "antd";
import Translate, { translate } from "@docusaurus/Translate";

import { ItemLabel } from "./RunAndDebug";
import IconAdd from "../images/icon_add.svg";
import IconRemove from "../images/icon_remove.svg";

import styles from "../index.module.scss";

const Volume = () => {
  return (
    <>
      <Form.Item
        label={
          <ItemLabel
            label="StorageClass"
            title={translate({ message: "storageClass tooltip" })}
          />
        }
        name="storageClass"
      >
        <Input
          placeholder={translate({ message: "Please Input StorageClass" })}
        />
      </Form.Item>
      <Form.List name="persistentVolumeDirs">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => (
              <div className={styles["directory-item"]} key={field.fieldKey}>
                <Form.Item
                  label={index === 0 ? translate({ message: "Directory" }) : ""}
                  style={{ marginBottom: 0 }}
                >
                  <div className={styles["form-item"]}>
                    <Form.Item
                      {...field}
                      style={{ marginBottom: 0, marginRight: 36 }}
                      name={[field.name, "path"]}
                      fieldKey={[field.fieldKey, "path"]}
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input
                        placeholder={translate({
                          message: "Please Input Directory",
                        })}
                        style={{ width: 190 }}
                      />
                    </Form.Item>
                    <Form.Item
                      {...field}
                      style={{ marginBottom: 0 }}
                      name={[field.name, "capacity"]}
                      fieldKey={[field.fieldKey, "capacity"]}
                      rules={[
                        {
                          type: "number",

                          message: translate({
                            message: "Please input number",
                          }),
                          transform(value) {
                            if (value) {
                              return Number(value);
                            }
                          },
                        },
                      ]}
                    >
                      <Input
                        placeholder={translate({
                          message: "Please Input Size",
                        })}
                        style={{ width: 190 }}
                        suffix="Gi"
                      />
                    </Form.Item>
                  </div>
                </Form.Item>
                <div
                  className={styles["remove-icon"]}
                  onClick={() => remove(field.name)}
                  style={
                    index === 0
                      ? {
                          position: "relative",
                          top: 14,
                        }
                      : {}
                  }
                >
                  <IconRemove />
                </div>
              </div>
            ))}
            <div className={styles["add-field"]} onClick={() => add()}>
              <IconAdd />
              <span style={{ marginLeft: 4 }}>
                <Translate>Add Directory</Translate>
              </span>
            </div>
          </>
        )}
      </Form.List>
    </>
  );
};

export default Volume;
