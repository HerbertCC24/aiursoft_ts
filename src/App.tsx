/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Layout, ConfigProvider } from "antd";
import bg from "./static/bg.jpeg";
import l3 from "./label/l6.svg";
import RightContent from "./components/RightContent";
import LeftContent from "./components/LeftContent";
import { flex } from "./utils/layout";
import MainCard from "./components/MainCard";
const { Header, Content } = Layout;
const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#9A9A9A",
          borderRadius: 6,
        },
      }}
    >
      <Layout
        className="layout"
        css={css`
          height: 100vh;
          background-image: url(${bg});
          background-size: cover;
          min-width: 1280px;
          min-height: 800px;
        `}
      >
        <div
          css={{
            height: "100%",
            width: "100%",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1),rgba(255,255,255,0.1),rgba(255,255,255,0.2),rgba(255,255,255,0))",
          }}
        >
          <Header
            css={[
              {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "rgba(255,255,255,.6)",
                paddingInline: 44,
                height: 56,
              },
              css`
                box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.04);
              `,
            ]}
          >
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
            <div css={flex} style={{ height: 340 }}>
              <img src={l3} width={800} alt="" css={{ zIndex: 1 }} />
            </div>
            <MainCard />
          </Content>
        </div>
        {/* <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer> */}
      </Layout>
    </ConfigProvider>
  );
};
export default App;
