/** @jsxImportSource @emotion/react */
import { Card, Col, Row, Space } from "antd";
import {
  createFromIconfontCN,
  FilePptOutlined,
  FileTextOutlined,
  VideoCameraOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { flex } from "../../utils/layout";
import * as icons from "./icons";
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_4000305_48omqq0823.js",
});
const iconCss = { css: { marginRight: "6px" } };
const imgCss = {
  css: { width: "14px", height: "14px", marginRight: "6px", borderRadius: 2 },
};
const info = [
  {
    id: 0,
    title: "广场",
    icon: <IconFont type="icon-a-mubiaoguangchang" />,
    children: [
      {
        label: "开友者社区",
        value: "https://git.aiursoft.cn",
        icon: <IconFont {...iconCss} type="icon-shequ1" />,
      },
      {
        label: "包中心",
        value: "https://nuget.aiursoft.cn",
        icon: <FilePptOutlined {...iconCss} />,
      },
      {
        label: "聊天室",
        value: "https://nextcloud.aiursoft.cn/talk",
        icon: <IconFont {...iconCss} type="icon-shequ2" />,
      },
      {
        label: "文档馆",
        value: "https://wiki.aiursoft.cn",
        icon: <FileTextOutlined {...iconCss} />,
      },
      {
        label: "视频舞台",
        value: "https://videos.aiursoft.cn",
        icon: <VideoCameraOutlined {...iconCss} />,
      },
      {
        label: "图书馆",
        value: "books.aiursoft.cn",
        icon: <IconFont {...iconCss} type="icon-tushuguan" />,
      },
      {
        label: "音乐会",
        value: "music.aiursoft.cn",
        icon: <IconFont {...iconCss} type="icon-yinle1" />,
      },
      {
        label: "回答社区",
        value: "qa.aiursoft.cn",
        icon: <IconFont {...iconCss} type="icon-guangchang" />,
      },
    ],
  },
  {
    id: 1,
    title: "游戏厅",
    icon: <IconFont type="icon-youxi" />,
    children: [
      {
        label: "Minecraft",
        value: "https://mc.aiursoft.cn",
        icon: <img src={icons.mc} {...imgCss} alt="" />,
      },
      {
        label: "Terraria",
        value: "https://terraria.aiursoft.cn",
        icon: <img src={icons.tl} {...imgCss} alt="" />,
      },
      {
        label: "Factorio",
        value: "https://factorio.aiursoft.cn",
        icon: <img src={icons.ft} {...imgCss} alt="" />,
      },
      {
        label: "CS",
        value: "https://cssource.aiursoft.cn",
        icon: <img src={icons.cs} {...imgCss} alt="" />,
      },
      {
        label: "街机",
        value: "https://miku.aiursoft.cn",
        icon: <img src={icons.jj} {...imgCss} alt="" />,
      },
      {
        label: "扫雷",
        value: "https://minesweeper.aiursoft.cn",
        icon: <img src={icons.sl} {...imgCss} alt="" />,
      },
      {
        label: "2048",
        value: "https://2048.aiursoft.cn",
        icon: <img src={icons._2048} {...imgCss} alt="" />,
      },
      {
        label: "俄罗斯方块",
        value: "https://tetris.aiursoft.cn",
        icon: <img src={icons.russia} {...imgCss} alt="" />,
      },
    ],
  },
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
    icon: <IconFont {...iconCss} type="icon-bangzhu" />,
    children: [
      { label: "Github", value: "", icon: <GithubOutlined {...iconCss} /> },
    ],
  },
];
const MainCard = () => {
  return (
    <div
      css={[
        {
          marginTop: "100px",
          backgroundColor: "rgba(0,0,0,0)",
          minWidth: "800px",
          width: "80%",
          minHeight: "400px",
        },
      ]}
    >
      <Row>
        {info.map((e) => {
          return (
            <Col span={6}>
              <Card
                key={e.id}
                bordered={false}
                css={{
                  margin: 20,
                  backgroundColor: "rgba(255,255,255,0.6)",
                }}
                bodyStyle={{
                  flexDirection: "column",
                }}
              >
                <Space css={{ fontSize: 20, color: "#666", fontWeight: 600 }}>
                  {e.icon}
                  {e.title}
                </Space>
                <div css={{ marginTop: 20 }}>
                  {e.children.map((more) => {
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
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default MainCard;
