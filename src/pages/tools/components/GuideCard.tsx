import React from "react";
import styles from "../index.module.scss";
import Translate from "@docusaurus/Translate";

import Card from "./Card";

const GuideCard = ({ workload = "", yamlStr = "" }) => {
  return (
    <div className={styles["guide-card"]}>
      <div className={styles["title"]}>
        <Translate>
          Configure the development parameters follow the guide below
        </Translate>
      </div>
      <Card workload={workload} yamlStr={yamlStr} />
    </div>
  );
};

export default GuideCard;
