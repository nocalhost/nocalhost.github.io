import React from "react";
import { Form, Input, Select, Switch } from "antd";
import { translate } from "@docusaurus/Translate";
import { CaretDownOutlined } from "@ant-design/icons";

import styles from "../index.module.scss";
import CommonIcon from "./CommonIcon";
import { LANGUAGE_OPTIONS } from "../../../constants";

export const ItemLabel = ({ label, title }) => {
  return (
    <div className={styles["item-label"]}>
      <span>{label}</span>
      <CommonIcon title={title} />
    </div>
  );
};

const RunAndDebug = () => {
  return (
    <>
      <Form.Item
        label={
          <ItemLabel
            label="Run Command"
            title={translate({ message: "run tooltip" })}
          />
        }
        name="command-run"
      >
        <Input
          placeholder={translate({
            message: "Please Input Run Command",
          })}
          style={{ width: 460 }}
        />
      </Form.Item>
      <Form.Item
        label={
          <ItemLabel
            label="Debug Command"
            title={translate({ message: "debug tooltip" })}
          />
        }
        name="command-debug"
      >
        <Input
          placeholder={translate({ message: "Please Input Debug Command" })}
          style={{ width: 460 }}
        />
      </Form.Item>
      <Form.Item
        label={
          <ItemLabel
            label="Debug Port"
            title={translate({ message: "debug port tooltip" })}
          />
        }
        name="remoteDebugPort"
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
          placeholder={translate({ message: "Please Input Debug Port" })}
          style={{ width: 460 }}
        />
      </Form.Item>
      <Form.Item
        label={translate({ message: "Debug Language" })}
        name="language"
      >
        <Select
          options={LANGUAGE_OPTIONS}
          suffixIcon={
            <CaretDownOutlined
              className="ant-select-suffix"
              style={{ color: "rgba(0, 0, 0, 0.85)", fontSize: 14 }}
            />
          }
        ></Select>
      </Form.Item>
      <Form.Item
        label={translate({ message: "Whether To Enable Hot Reload" })}
        name="hotReload"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>
    </>
  );
};

export default RunAndDebug;
