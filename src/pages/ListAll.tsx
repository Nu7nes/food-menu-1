import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import ListItem, { ItemType } from "../components/ListItem";
import { Box, Flex } from "@chakra-ui/react";

export default function ListAll(): ReactElement {
    const data = useSelector((state: RootState) => state.data.menu);

    return (
        <Box
            transform={[
                "translateY(-2.5rem)",
                "translateY(-2.5rem)",
                "translateY(-1rem)",
            ]}
        >
            <Flex
                direction={["column", "row"]}
                align={"center"}
                justify={"center"}
                wrap={["nowrap", "wrap"]}
                gap={[1]}
                columnGap={8}
            >
                {data.map((it: ItemType) => (
                    <ListItem item={it} key={it.flavor} />
                ))}
            </Flex>
        </Box>
    );
}
