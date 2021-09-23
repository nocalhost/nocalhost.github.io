import React from "react";
import { Form, Input, Tooltip, Switch } from "antd";
import { translate } from "@docusaurus/Translate";

import styles from "../index.module.scss";
import IconQuery from "../images/icon_label_query.svg";
import CommonIcon from "./CommonIcon";

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
