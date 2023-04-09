/** @jsxImportSource @emotion/react */

import { GithubOutlined } from "@ant-design/icons";
import { flex } from "../../utils/layout";
import { Space } from "antd";
import * as icons from "../MainCard/icons";
import { IconFont } from "../IconFont";
const iconCss = { css: { marginRight: "6px" } };
const imgCss = {
  css: { width: "24px", height: "24px", marginRight: "12px", borderRadius: 2 },
};
const e = [
  {
    id: 2,
    title: "住户小区",
    icon: <IconFont type="icon-xiaoquguanli" />,
    children: [
      {
        label: "AnduinXue",
        value: "https://anduin.aiursoft.cn",
        icon: <img src={icons.anduin} {...imgCss} alt="" />,
      },
      {
        label: "杨过",
        value: "https://gxhao.aiursoft.cn",
        icon: <img src={icons.yang} {...imgCss} alt="" />,
      },
      {
        label: "Gbiner",
        value: "https://gbiner.aiursoft.cn",
        icon: <img src={icons.gb} {...imgCss} alt="" />,
      },
      {
        label: "Rest",
        value: "https://rest.aiursoft.cn",
        icon: <img src={icons.rest} {...imgCss} alt="" />,
      },
      {
        label: "Jimmoen",
        value: "https://jimmoen.aiursoft.cn",
        icon: <img src={icons.jim} {...imgCss} alt="" />,
      },
      {
        label: "蓝猫猫",
        value: "https://cat.aiursoft.cn",
        icon: <img src={icons.kit} {...imgCss} alt="" />,
      },
    ],
  },
  {
    id: 3,
    title: "帮助",
    children: [
      {
        label: "Github",
        value: "https://github.com/AiursoftWeb",
        icon: <GithubOutlined {...iconCss} />,
      },
    ],
  },
];
const Help: React.FC<{ i: number; title?: boolean }> = ({
  i,
  title = true,
}) => {
  return (
    <div css={{ padding: 10, minWidth: 150 }}>
      {title && (
        <Space
          css={{
            fontSize: 20,
            color: "#666",
            fontWeight: 600,
            marginBottom: 20,
          }}
        >
          {e[i].title}
        </Space>
      )}
      <div>
        {e[i].children.map((more) => {
          return (
            <div>
              <a
                href={more.value}
                target="_blank"
                css={[
                  flex,
                  {
                    color: "#777",
                    height: 30,
                    fontSize: 16,
                    justifyContent: "flex-start",
                  },
                ]}
                rel="noreferrer"
              >
                {/* <p> */}
                {more?.icon ? (
                  more?.icon
                ) : (
                  <svg style={{ width: 21, height: 1 }} />
                )}
                {/* </p> */}
                {more.label}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Help;
