import React, { useEffect, useState } from "react";

import styles from "../index.module.scss";
import classNames from "classnames";
import Translate, { translate } from "@docusaurus/Translate";
import CopyToClipboard from "react-copy-to-clipboard";

import ImageVscodeFail from "../images/image_failed_VSCode_EN.svg";
import ImageJBFail from "../images/image_faied_JB_EN.svg";
import ImageVscodeFailCN from "../images/image_failed_VSCode_CN.svg";
import ImageJBFailCN from "../images/image_faied_JB_CN.svg";
import IconCopy from "../images/icon_copy.svg";

import { Button, message } from "antd";

const cx = classNames.bind(styles);

const Card = ({ workload = "", yamlStr = "" }) => {
  const [lang, setLang] = useState<string>("en");

  useEffect(() => {
    setLang(location.pathname.indexOf("zh-CN") > -1 ? "zh-cn" : "en");
  }, []);

  const handleCopy = () => {
    message.success(translate({ message: "Copy Successfully!" }));
  };
  return (
    <ul className={styles["fail-list"]}>
      <li className={cx(styles["fail-item"], styles["inline"])}>
        <div className={styles["desc"]}>
          <span className={styles["number"]}>1</span>
          <div style={{ flex: 1 }}>
            <span style={{ flex: 1 }}>
              <Translate>
                Click the button on the right to copy and generate "Nocalhost
                Yaml" development parameters
              </Translate>
            </span>
            <CopyToClipboard onCopy={handleCopy} text={yamlStr}>
              <Button style={{ marginLeft: 6, position: "relative", top: 5 }}>
                <span>
                  <IconCopy />
                </span>
                <Translate>Copy</Translate>
              </Button>
            </CopyToClipboard>
          </div>
        </div>
      </li>
      <li className={styles["fail-item"]}>
        <div className={styles["desc"]} style={{ marginBottom: 12 }}>
          <span className={styles["number"]}>2</span>
          <span style={{ flex: 1 }}>
            {translate(
              {
                message:
                  "Find the workload name 「{workload}」 and paste the development parameters to the configuration page of the service",
              },
              { workload }
            )}
          </span>
        </div>

        <div className={styles["image"]}>
          {lang === "zh-cn" ? <ImageVscodeFailCN /> : <ImageVscodeFail />}
          {lang === "zh-cn" ? <ImageJBFailCN /> : <ImageJBFail />}
        </div>
      </li>
      <li className={styles["fail-item"]}>
        <span className={styles["number"]}>3</span>
        <span>
          <Translate>
            Save configuration (Windows: Ctrl+s ｜ Mac: Command+s)
          </Translate>
        </span>
      </li>
    </ul>
  );
};

export default Card;
