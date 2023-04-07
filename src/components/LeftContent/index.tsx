/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import logo from "../../static/logo.png";
import { Space } from "antd";
import { flex } from "../../utils/layout";
const LeftContent = () => {
  return (
    <Space css={flex}>
      <div
        css={css`
          background-image: url(${logo});
          width: 32px;
          height: 32px;
          background-size: contain;
        `}
      />
      <div
        css={css`
          font-size: 20px;
          font-family: Helvetica;
          font-weight: 600;
        `}
      >
        Aiursoft
      </div>
    </Space>
  );
};
export default LeftContent;
