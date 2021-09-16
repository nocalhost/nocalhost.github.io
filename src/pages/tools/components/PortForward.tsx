import React from "react";
import { Form, Input } from "antd";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "../index.module.scss";
import IconAdd from "../images/icon_add.svg";
import IconRemove from "../images/icon_remove.svg";

const PortForward = () => {
  return (
    <>
      <Form.List name="portForward">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => (
              <div key={field.fieldKey} className={styles["directory-item"]}>
                <Form.Item
                  label={
                    index === 0
                      ? translate({ message: "Port Forward List" })
                      : ""
                  }
                  style={{ marginBottom: 0 }}
                >
                  <div className={styles["form-item"]}>
                    <Form.Item
                      {...field}
                      name={[field.name, "local"]}
                      style={{ marginBottom: 0, marginRight: 36 }}
                      rules={[
                        {
                          type: "number",
                          min: 1,
                          max: 65535,
                          transform: (v) => Number(v),
                          message: "Please input number 1-65535",
                        },
                      ]}
                    >
                      <Input
                        placeholder={translate({
                          message: "Please Input Local Port",
                        })}
                        style={{ width: 190 }}
                      />
                    </Form.Item>
                    <Form.Item
                      {...field}
                      name={[field.name, "container"]}
                      style={{ marginBottom: 0 }}
                      rules={[
                        {
                          type: "number",
                          min: 1,
                          max: 65535,
                          transform: (v) => Number(v),
                          message: "Please input number 1-65535",
                        },
                      ]}
                    >
                      <Input
                        placeholder={translate({
                          message: "Please Input Container Port",
                        })}
                        style={{ width: 190 }}
                      />
                    </Form.Item>
                  </div>
                </Form.Item>
                <div
                  className={index === 0 ? styles["remove"] : styles["normal"]}
                  onClick={() => remove(field.name)}
                >
                  <IconRemove />
                </div>
              </div>
            ))}
            <div className={styles["add-field"]} onClick={() => add()}>
              <IconAdd />
              <span style={{ marginLeft: 4 }}>
                <Translate>Add Port Forward</Translate>
              </span>
            </div>
          </>
        )}
      </Form.List>
    </>
  );
};

export default PortForward;
