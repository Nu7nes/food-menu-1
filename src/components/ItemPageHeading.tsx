import { ReactElement, useEffect, useState } from "react";
import { Flex, VStack, Text, Heading, IconButton } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { theme } from "../theme";
import { ItemType } from "./ListItem";
import { useFormContext } from "react-hook-form";

export default function ItemPageHeading({
    flavor,
    price,
    type,
    adds,
}: ItemType): ReactElement {
    const [counter, setCounter] = useState<number>(1);
    // const [addsPrice, setAddsPrice] = useState<number>(1);
    const { setValue, getValues, watch } = useFormContext();
    setValue("flavor", flavor);

    function handleCounterComponent(operation: number): void {
        const result = counter + operation < 1 ? 1 : counter + operation;
        setCounter(result);
    }

    useEffect(() => {
        setValue("quantity", counter);
        let totalPrice: number = 0;
        if (typeof price == "number")
            totalPrice =
                price * Number(getValues("quantity")) +
                Number(getValues("addsPrice"));
        setValue("price", totalPrice);
    }, [counter, watch("addsPrice")]);

    useEffect(() => {
        setValue("addsPrice", 0);
    }, []);

    return (
        <Flex
            justify="space-between"
            align="center"
            bg="gray.100"
            p={5}
            px={8}
            position="sticky"
            top="0"
            boxShadow="md"
            zIndex="10"
        >
            <VStack align="flex-start">
                <Text fontSize={12} pl={1} mb={-1}>
                    Tapioca
                </Text>
                <Heading size="md">{flavor}</Heading>
                <VStack align="flex-start" fontSize={12} lineHeight={0.8} m={2}>
                    {type === "sal" && <Text>+ Escolha seu queijo</Text>}
                    {adds && <Text>+ Adicionais disponíveis</Text>}
                </VStack>
                <Text fontWeight="800" color="red.300">
                    {`R$${watch("price")}`}
                </Text>
            </VStack>
            <VStack>
                <IconButton
                    aria-label="add-one-button"
                    colorScheme="red"
                    bg="red.300"
                    boxShadow="dark-lg"
                    rounded={10}
                    size="sm"
                    onClick={() => {
                        setCounter(counter + 1);
                    }}
                >
                    <Icon
                        icon="mdi:add-bold"
                        height="1.5rem"
                        color={theme.colors.white}
                    />
                </IconButton>
                <Text fontSize="1.3rem" fontWeight="600">
                    {counter}
                </Text>
                <IconButton
                    aria-label="minus-one-button"
                    colorScheme="red"
                    bg="red.300"
                    boxShadow="dark-lg"
                    rounded={10}
                    size="sm"
                    onClick={() => {
                        handleCounterComponent(-1);
                    }}
                >
                    <Icon
                        icon="mdi:minus-thick"
                        height="1.5rem"
                        color={theme.colors.white}
                    />
                </IconButton>
            </VStack>
        </Flex>
    );
}
