/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import { AutoComplete, Button } from "antd";
import { flex } from "../../utils/layout";
import { useDebounce } from "ahooks";
import { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { searchSuggest } from "../../service/api";

const Search: React.FC = (params) => {
  const [value, setValue] = useState<string>("");
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const debouncedValue = useDebounce(value, { wait: 500 });
  const onSelect = (e: string) => {
    setValue(e);
  };
  useEffect(() => {
    const fetchData = async () => {
      if (!debouncedValue) {
        return;
      }
      const msg = await searchSuggest(debouncedValue);
      msg?.forEach((element: string) => ({ [element]: element }));
      setOptions(msg);
    };
    fetchData();
  }, [debouncedValue]);
  return (
    <div css={[flex, { paddingTop: 0 }]}>
      {/* <Input
        size="large"
        css={flex}
        placeholder="输入关键字搜索"
        style={{ alignSelf: "center", width: 500 }}
        styles={{
          input: {
            backgroundColor: "rgba(255,255,255,0.5)",
            borderRadius: 40,
            // height: 50,
          },
        }}
      /> */}
      <AutoComplete
        value={value}
        options={options}
        onSelect={onSelect}
        // onSearch={onSearch}
        onChange={onSelect}
        placeholder="请输入"
        style={{ alignSelf: "center", width: 500 }}
        // styles={{
        //   input: {
        //     backgroundColor: "rgba(255,255,255,0.5)",
        //     borderRadius: 40,
        //     // height: 50,
        //   },
        // }}
      />
      <Button
        ghost
        shape="round"
        css={{ marginLeft: 10, height: 36 }}
        type="primary"
        icon={<SearchOutlined />}
      >
        搜索
      </Button>
    </div>
  );
};
export default Search;
