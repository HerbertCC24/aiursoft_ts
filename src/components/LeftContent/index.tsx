/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import logo from "../../static/grey.svg";
import { Space } from "antd";
import { flex } from "../../utils/layout";
const LeftContent = () => {
  return (
    <Space css={flex}>
      <div
        css={css`
          background-image: url(${logo});
          width: 42px;
          height: 42px;
          background-size: contain;
          border-radius: 5px;
        `}
      />
      <div
        css={css`
          font-size: 28px;
          font-family: Helvetica;
          font-weight: 600;
          margin-left: 10px;
        `}
      >
        Aiursoft
      </div>
    </Space>
  );
};
export default LeftContent;
