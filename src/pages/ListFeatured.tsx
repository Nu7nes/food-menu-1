// import { HStack } from "@chakra-ui/react";
import { ReactElement } from "react";
import CustomSwipper from "../components/CustomSwiper";
import ListItem from "../components/ListItem";
import { Box, Flex} from "@chakra-ui/react";

export interface itemTypes {
    name: string;
    description: string;
    price: number;
}
const itens: itemTypes[] = [
    {
        name: "Coco",
        description: "A mais querida!",
        price: 8,
    },
    {
        name: "Frango com Queijo",
        description: "Escolha seu queijo e adicione sabores!",
        price: 12,
    },
    {
        name: "Banana com Nutella",
        description: "É tudo de bom!",
        price: 15,
    },{
        name: "Coco",
        description: "A mais querida!",
        price: 8,
    },
    {
        name: "Frango com Queijo",
        description: "Escolha seu queijo e adicione sabores!",
        price: 12,
    },
    {
        name: "Banana com Nutella",
        description: "É tudo de bom!",
        price: 15,
    },{
        name: "Coco",
        description: "A mais querida!",
        price: 8,
    },
    {
        name: "Frango com Queijo",
        description: "Escolha seu queijo e adicione sabores!",
        price: 12,
    },
    {
        name: "Banana com Nutella",
        description: "É tudo de bom!",
        price: 15,
    },{
        name: "Coco",
        description: "A mais querida!",
        price: 8,
    },
    {
        name: "Frango com Queijo",
        description: "Escolha seu queijo e adicione sabores!",
        price: 12,
    },
    {
        name: "Banana com Nutella",
        description: "É tudo de bom!",
        price: 15,
    },
];

export default function ListFeatured(): ReactElement {
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
                {itens.map((it) => (
                    <ListItem
                        name={it.name}
                        description={it.description}
                        price={it.price}
                    />
                ))}
            </Flex>
        </Box>
    );
}
