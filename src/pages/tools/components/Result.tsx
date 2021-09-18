import React from "react";

import styles from "../index.module.scss";
import ImageSuccess from "../images/image_succeed.svg";
import ImageFail from "../images/image_failed.svg";

import ImageVscode from "../images/image_success_VSCode_EN.svg";
import ImageJB from "../images/image_success_JB_EN.svg";

import ImageVscodeCN from "../images/image_success_VSCode_CN.svg";
import ImageJBCN from "../images/image_success_JB_CN.svg";

import IconLamp from "../images/icon_lamp.svg";
import Translate, { translate } from "@docusaurus/Translate";
import classNames from "classnames";

import { message } from "antd";
import Card from "./Card";

const Result = ({ status, workload = "", yamlStr = "" }) => {
  const handleCopy = () => {
    message.success(translate({ message: "Copy Successfully!" }));
  };
  const cx = classNames.bind(styles);
  const lang = translate({ message: "lang" });
  return (
    <div className={styles["result-wrap"]}>
      <div className={styles["main"]}>
        {status === "fail" ? <ImageFail /> : <ImageSuccess />}
        <h3 className={styles["result-title"]}>
          {status === "success" ? (
            <Translate> Configuration Successful</Translate>
          ) : (
            <Translate>Configuration Failed</Translate>
          )}
          {translate({ message: "Configuration Successful" })}
        </h3>
        <span className={styles["result-desc"]}>
          {translate({
            message:
              "Please follow the guide below to enter the development mode in the plugin",
          })}
        </span>
        <div className={styles["result-content"]}>
          {status === "success" ? (
            <>
              <div className={cx(styles["title"], styles["success-item"])}>
                <span className={styles["number"]}>
                  <IconLamp />
                </span>
                <span>
                  {translate(
                    {
                      message:
                        'Find the workload name "{workload}" to enter the development mode.',
                    },
                    {
                      workload,
                    }
                  )}
                </span>
              </div>
              <div className={styles["image"]}>
                {lang === "zh-cn" ? <ImageVscodeCN /> : <ImageVscode />}
                {lang === "zh-cn" ? <ImageJBCN /> : <ImageJB />}
              </div>
            </>
          ) : (
            <Card workload={workload} yamlStr={yamlStr} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Result;
