import React, { useState } from "react";
import { Form, Input, AutoComplete } from "antd";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "../index.module.scss";
import { IMAGE_OPTIONS } from "../../../constants";
import IconArrowDown from "../images/arrow_down.svg";
import IconArrowRight from "../images/arrow_right.svg";
import DownArrow from "./DownArrow";
import { ItemLabel } from "./RunAndDebug";
import { CaretDownOutlined } from "@ant-design/icons";
import EnterButton from "./EnterButton";

const BasicConfig = () => {
  const [unfold, setUnfold] = useState<boolean>(false);
  const [imageArr, setImageArr] = useState([]);
  const [open, setOpen] = useState(false);

  const handleSearch = () => {
    setImageArr(IMAGE_OPTIONS);
    setOpen(true);
  };

  const handleSelect = (value: any) => {
    setImageArr([]);
    setOpen(false);
  };

  return (
    <>
      <Form.Item
        label={translate({ message: "Container Name" })}
        rules={[{ required: true }]}
        name="name"
      >
        <Input
          style={{ width: 460 }}
          placeholder={translate({
            message: "Please Input Container Name",
          })}
        />
      </Form.Item>
      <Form.Item
        label={translate({ message: "Development Image" })}
        rules={[{ required: true }]}
        name="image"
      >
        <AutoComplete
          style={{ width: 460 }}
          options={imageArr}
          onSelect={handleSelect}
          open={open}
        >
          <Input
            placeholder={translate({
              message: "Please Select OR Enter A Development Image",
            })}
            addonAfter={<EnterButton handleShowSelect={handleSearch} />}
          />
        </AutoComplete>
      </Form.Item>
      <div
        className={styles["config-title"]}
        onClick={() => setUnfold(!unfold)}
      >
        {unfold ? <IconArrowDown /> : <IconArrowRight />}
        <span>
          <Translate>Other basic configuration items</Translate>
        </span>
      </div>
      {unfold && (
        <div className={styles["config-others"]}>
          <Form.Item
            label={translate({
              message: "Git Depository URL",
            })}
            name="gitUrl"
          >
            <Input
              style={{ width: 436 }}
              placeholder={translate({
                message: "Please Input Git Depository URL",
              })}
            />
          </Form.Item>
          <Form.Item label="Shell" name="shell">
            <Input
              style={{ width: 436 }}
              placeholder={translate({
                message: "Please Input Shell",
              })}
            />
          </Form.Item>
          <Form.Item
            label={translate({ message: "Work Directory" })}
            name="workDir"
          >
            <Input
              style={{ width: 436 }}
              placeholder={translate({
                message: "Please Input Work Directory",
              })}
            />
          </Form.Item>
          <Form.Item
            label={
              <ItemLabel
                label="Sidecar"
                title={translate({ message: "sidecar tip" })}
              />
            }
            name="sidecarImage"
          >
            <Input
              style={{ width: 436 }}
              placeholder={translate({
                message: "Please Input Sidecar Image URL",
              })}
            />
          </Form.Item>
        </div>
      )}
    </>
  );
};

export default BasicConfig;
