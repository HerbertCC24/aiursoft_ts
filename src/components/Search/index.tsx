/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import { AutoComplete, Button, Input } from "antd";
import { flex } from "../../utils/layout";
import { useDebounce } from "ahooks";
import { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { openNewTab } from "../../utils/utils";
async function httpGet(theUrl: string | URL) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.response;
}
const Search: React.FC = (params) => {
  const [value, setValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<
    {
      label: string;
      value: string;
    }[]
  >([]);
  const debouncedValue = useDebounce(value, { wait: 500 });
  const onChange = (e: string) => {
    setValue(e);
  };
  const onSelect = (e: string) => {
    setValue(e);
    openNewTab(`https://www.aiursoft.com/search?q=${e}`);
  };
  useEffect(() => {
    const fetchData = async () => {
      if (!debouncedValue) {
        setOpen(false);
        return;
      }
      const res = JSON.parse(
        await httpGet(`https://www.aiursoft.com/suggestion/${debouncedValue}`)
      );
      const msg = res?.map((element: string) => ({
        label: element,
        value: element,
      }));
      setOptions(msg);
      setOpen(true);
    };
    fetchData();
  }, [debouncedValue]);
  return (
    <div css={[flex, { paddingTop: 0 }]}>
      <AutoComplete
        value={value}
        options={options}
        onSelect={onSelect}
        onChange={onChange}
        open={open}
        backfill
        allowClear
        children={
          <Input
            size="large"
            css={flex}
            placeholder="输入关键字搜索"
            style={{ alignSelf: "center", width: 500 }}
            onPressEnter={(e: any) => onSelect(e.target.value)}
            styles={{
              input: {
                backgroundColor: "rgba(255,255,255,0.5)",
                borderRadius: 40,
                // height: 50,
              },
            }}
          />
        }
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
        onClick={() => onSelect(value)}
      >
        搜索
      </Button>
    </div>
  );
};
export default Search;
