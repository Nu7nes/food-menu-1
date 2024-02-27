import { ReactElement } from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Text,
    theme,
} from "@chakra-ui/react";
import ItemPage from "./ItemPage";

export type ItemType = {
    type?: string;
    desc?: string;
    flavor?: string;
    price?: string;
    adds?: boolean;
    ingredients?: string[]
    counter?: number
    onHandleCounterComponent?:((operation: number) => void)
};

export interface ItemListProps {
    item: ItemType
}

export default function ListItem({ item }: ItemListProps): ReactElement {
    return (
        <Card
            direction="row"
            align="center"
            w={["300px", "400px"]}
            shadow={0}
            bg="transparent"
        >
            <Image
                objectFit="cover"
                w="70px"
                h="70px"
                src="https://www.nacozinhadahelo.com.br/wp-content/uploads/2022/08/como-fazer-tapioca.jpg"
                alt="Caffe Latte"
                boxShadow="dark-lg"
                borderRadius={8}
            />
            <CardBody mr={0}>
                <Heading size={"xs"}>{item.flavor}</Heading>
                <Text fontSize={"0.8rem"} lineHeight={1} color="gray.400">
                    {item.desc}
                </Text>
                <Text
                    fontWeight="bold"
                    fontSize={"0.8rem"}
                    color={theme.colors.red[500]}
                >{`R$${item.price}`}</Text>
            </CardBody>
            <CardFooter m={-1}>
                <ItemPage item={item}/>
            </CardFooter>
        </Card>
    );
}
