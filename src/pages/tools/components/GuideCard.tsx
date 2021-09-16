import React from "react";
import styles from "../index.module.scss";
import classNames from "classnames";
import Translate, { translate } from "@docusaurus/Translate";
import CopyToClipboard from "react-copy-to-clipboard";

import ImageVscodeFail from "../images/image_failed_VSCode_EN.svg";
import ImageJBFail from "../images/image_faied_JB_EN.svg";
import IconCopy from "../images/icon_copy.svg";

import { Button } from "antd";

const GuideCard = ({ workload = "", yamlStr = "" }) => {
  const cx = classNames.bind(styles);

  const handleCopy = () => {};

  return (
    <div className={styles["guide-card"]}>
      <div className={styles["title"]}>
        <Translate>
          Configure the development parameters follow the guide below
        </Translate>
      </div>
      <ul className={styles["fail-list"]}>
        <li className={cx(styles["fail-item"], styles["inline"])}>
          <span className={styles["number"]}>1</span>
          <span>
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
        </li>
        <li className={styles["fail-item"]}>
          <div style={{ marginBottom: 12 }}>
            <span className={styles["number"]}>2</span>
            <span>
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
            <ImageVscodeFail />
            <ImageJBFail />
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
    </div>
  );
};

export default GuideCard;
