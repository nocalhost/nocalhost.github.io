import React from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import styles from "../index.module.scss";

const EnterButton = ({ handleShowSelect }) => {
  return (
    <div onClick={handleShowSelect} className={styles["enter-button"]}>
      <CaretDownOutlined />
    </div>
  );
};

export default EnterButton;
