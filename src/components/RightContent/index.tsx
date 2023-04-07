/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import { GithubOutlined, DatabaseOutlined } from "@ant-design/icons";
import { Input, Space, Tooltip, Button, Popover } from "antd";
import { flex } from "../../utils/layout";
import Help from "../Help";
import { IconFont } from "../IconFont";
const { Search } = Input;
const RightContent = () => {
  return (
    <>
      <Space>
        <Search
          css={flex}
          placeholder="输入关键字搜索"
          onSearch={() => {}}
          style={{ width: 200, alignSelf: "center", marginRight: 20 }}
        />
        <Popover placement="bottomRight" content={<Help i={0} />}>
          <Button icon={<IconFont type="icon-xiaoqu-xianxing" />} type="text" />
        </Popover>
        <Tooltip placement="bottom" title="文件库">
          <Button icon={<DatabaseOutlined />} type="text" />
        </Tooltip>
        <Tooltip placement="bottom" title="代码库">
          <Button icon={<GithubOutlined />} type="text" />
        </Tooltip>
      </Space>
    </>
  );
};
export default RightContent;
