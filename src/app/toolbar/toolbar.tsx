import { Flex } from "antd";

export default function Toolbar() {
    return (
        <Flex justify="center" style={{ padding: "20px", position:"fixed", zIndex: "100", height:"auto", width:"100%", background: "#fdf6f1" }}>
            <h1 style={{ color: "#bec092", fontFamily: "Sans", fontWeight: "100", fontSize: "40px" }}>Juli & Chris</h1>
        </Flex>
    );
}
