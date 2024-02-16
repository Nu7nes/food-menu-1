import { ReactElement } from "react";
import { itemTypes } from "../pages/ListFeatured";
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

export default function ListItem({
    name,
    description,
    price,
}: itemTypes): ReactElement {
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
                <Heading size={"xs"}>{name}</Heading>
                <Text fontSize={"0.8rem"} lineHeight={1} color="gray.400">
                    {description}
                </Text>
                <Text
                    fontWeight="bold"
                    fontSize={"0.8rem"}
                    color={theme.colors.red[500]}
                >{`R$${price},00`}</Text>
            </CardBody>
            <CardFooter m={-1}>
                <ItemPage />
            </CardFooter>
        </Card>
    );
}
