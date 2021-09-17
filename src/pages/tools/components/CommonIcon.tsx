import React, { useState } from "react";

import { Tooltip } from "antd";

import IconQuery from "../images/icon_label_query.svg";
import IconQueryActive from "../images/icon_label_query_hover.svg";

const CommonIcon = ({ title = "" }) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      style={{ display: "flex", alignItems: "center" }}
    >
      <Tooltip title={title}>
        {active ? <IconQueryActive /> : <IconQuery />}
      </Tooltip>
    </div>
  );
};

export default CommonIcon;
