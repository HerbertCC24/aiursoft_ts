/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Layout, ConfigProvider, FloatButton, Popover, Button } from "antd";
import bg from "./static/bg.jpeg";
import title from "./label/fffef8.svg";
import RightContent from "./components/RightContent";
import LeftContent from "./components/LeftContent";
import { flex } from "./utils/layout";
import MainCard from "./components/MainCard";
import { QuestionCircleOutlined } from "@ant-design/icons";
import Help from "./components/Help";
import { Footer } from "antd/es/layout/layout";
import Search from "./components/Search";
import { IconFont } from "./components/IconFont";
import { useEffect } from "react";
import { auto as followSystemColorScheme } from "darkreader";
const { Header, Content } = Layout;
const App = () => {
  useEffect(() => {
    followSystemColorScheme({
      brightness: 100,
      contrast: 90,
      sepia: 10,
    });
  }, []);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#9A9A9A",
          borderRadius: 6,
        },
      }}
    >
      <FloatButton.Group shape="square" style={{ right: 48 }}>
        <Popover placement="leftBottom" content={<Help i={0} />}>
          <FloatButton icon={<IconFont type="icon-xiaoqu-xianxing" />} />
        </Popover>
        <Popover placement="leftBottom" content={<Help i={1} />}>
          <FloatButton icon={<QuestionCircleOutlined />} />
        </Popover>
      </FloatButton.Group>
      <Layout
        className="layout"
        css={css`
          height: 100vh;
          background-image: linear-gradient(
              rgba(255, 255, 255, 1),
              rgba(255, 255, 255, 0)
            ),
            url(${bg});
          background-size: cover;
          min-width: 1280px;
          min-height: 800px;
        `}
      >
        <Header css={headerCss}>
          <LeftContent />
          <RightContent />
        </Header>
        <Content
          css={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            css={[
              flex,
              { flexDirection: "column", justifyContent: "space-between" },
            ]}
            style={{ height: "40%" }}
          >
            <img
              src={title}
              width={800}
              alt=""
              css={{ zIndex: 1, paddingTop: 0 }}
            />
            <Search />
          </div>
          <MainCard />
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "rgba(0,0,0,0)",
          }}
        >
          Aiursoft-Homepage ©2023 Created by HerbertLzx 苏ICP备2022030859号{" "}
          <Button href="https://stats.uptimerobot.com/ynrA5c73EN" type="link">
            服务可用性
          </Button>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};
export default App;
const headerCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0);
  padding-inline: 60;
  height: 6%;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.06);
  @media (prefers-color-scheme: dark) {
    box-shadow: none;
  }
`;
