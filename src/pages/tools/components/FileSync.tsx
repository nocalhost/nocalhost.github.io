import React from "react";
import { Form, Input, Select, Tooltip, Radio } from "antd";
import Translate, { translate } from "@docusaurus/Translate";

import styles from "../index.module.scss";
import { SYNC_FILE_TYPE } from "../../../constants";

import IconDel from "../images/icon_remove.svg";
import IconAdd from "../images/icon_add.svg";
import classNames from "classnames";

const FileSync = ({ form }) => {
  const cx = classNames.bind(styles);
  return (
    <>
      <Form.Item label={translate({ message: "Sync Type" })} name="syncType">
        <Select
          placeholder={translate({ message: "Please Select Sync Type" })}
          options={SYNC_FILE_TYPE}
          style={{ width: 460 }}
        ></Select>
      </Form.Item>
      <Form.Item label={translate({ message: "Sync Mode" })} name="syncMode">
        <Radio.Group>
          <Radio value="pattern">
            <Translate>Pattern</Translate>
          </Radio>
          <Radio value="gitignore">
            <Translate>Gitignore</Translate>
          </Radio>
        </Radio.Group>
      </Form.Item>
      {form.getFieldValue("syncMode") === "pattern" && (
        <>
          <Form.List name="filePattern">
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map((field, index) => (
                  <div className={styles["file-item"]} key={field.fieldKey}>
                    <Form.Item
                      {...field}
                      key={index}
                      label={
                        index === 0
                          ? translate({ message: "Sync Directory" })
                          : ""
                      }
                      style={{ marginBottom: 8 }}
                    >
                      <Input
                        style={{ width: 430 }}
                        placeholder={translate({
                          message: "Please Input Sync Directory",
                        })}
                      />
                    </Form.Item>
                    <span
                      className={cx(
                        styles["remove"],
                        index === 0 ? styles["first"] : ""
                      )}
                      onClick={() => remove(field.name)}
                    >
                      <Tooltip
                        title={translate({
                          message: "Remove",
                        })}
                      >
                        <IconDel />
                      </Tooltip>
                    </span>
                  </div>
                ))}
                <div className={styles["add-field"]} onClick={() => add()}>
                  <IconAdd />
                  <span style={{ marginLeft: 4 }}>
                    <Translate>Add Sync Directory</Translate>
                  </span>
                </div>
              </>
            )}
          </Form.List>

          <Form.List name="ignoreFilePattern">
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map((field, index) => (
                  <div className={styles["file-item"]} key={field.fieldKey}>
                    <Form.Item
                      {...field}
                      key={index}
                      label={
                        index === 0
                          ? translate({ message: "Ignore Directory" })
                          : ""
                      }
                      style={{ marginBottom: 8 }}
                    >
                      <Input
                        style={{ width: 430 }}
                        placeholder={translate({
                          message: "Please Input Ignore Directory",
                        })}
                      />
                    </Form.Item>
                    <span
                      className={cx(
                        styles["remove"],
                        index === 0 ? styles["first"] : ""
                      )}
                      onClick={() => remove(field.name)}
                    >
                      <Tooltip title={translate({ message: "Remove" })}>
                        <IconDel />
                      </Tooltip>
                    </span>
                  </div>
                ))}
                <div className={styles["add-field"]} onClick={() => add()}>
                  <IconAdd />
                  <span style={{ marginLeft: 4 }}>
                    <Translate>Add Ignore Sync Directory</Translate>
                  </span>
                </div>
              </>
            )}
          </Form.List>
        </>
      )}
    </>
  );
};

export default FileSync;
