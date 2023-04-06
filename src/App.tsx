/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Layout, ConfigProvider } from "antd";
import logo from "./static/logo.png";
import bg from "./static/bg.jpeg";
import l3 from "./label/l3.svg";
import RightContent from "./components/RightContent";
const { Header, Content } = Layout;
const flex = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const App = () => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  // backgroundImage: `url('../public/logo.png')`
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
        <Header
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "rgba(255,255,255,.6)",
            paddingInline: 44,
            height: 56,
          }}
        >
          <div css={flex}>
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
                padding: 0 10px;
                font-weight: 600;
              `}
            >
              Aiursoft
            </div>
          </div>
          <div>
            <RightContent />
          </div>
        </Header>
        <Content>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "300px",
            }}
          >
            {/* <div style={title}>Aiursoft</div> */}
            <img src={l3} width={800} alt="" />
          </div>
        </Content>
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
