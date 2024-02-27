// import { HStack } from "@chakra-ui/react";
import { ReactElement } from "react";
import CustomSwipper from "../components/CustomSwiper";
import ListItem, { ItemType } from "../components/ListItem";
import { Box, Flex} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function ListFeatured(): ReactElement {
    const data = useSelector((state: RootState) => state.data.menu)
    return (
        <Box  transform={["translateY(-2.5rem)", "translateY(-2.5rem)", "translateY(-1rem)"]}>
            <CustomSwipper />
            <Flex
                direction={["column", "row"]}
                align={"center"}
                justify={"center"}
                wrap={["nowrap", "wrap"]}
                gap={[1]}
                columnGap={8}
            >
                {/* <Heading size="sm" alignSelf="flex-start">Nossos produtos:</Heading> */}
                {data.map((it: ItemType) => (
                    <ListItem
                        item={it}
                        key={it.flavor}
                    />
                ))}
            </Flex>
        </Box>
    );
}
