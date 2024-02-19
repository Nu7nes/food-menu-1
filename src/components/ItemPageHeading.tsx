import { ReactElement, useState } from "react";
import { Flex, VStack, Text, Heading, IconButton } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { theme } from "../theme";

export default function ItemPageHeading(): ReactElement {
    const [counter, setCounter] = useState<number>(1);

    function handleCounterComponent(operation: number): void {
        const result = counter + operation < 0 ? 0 : counter + operation;
        setCounter(result);
    }

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
                <Heading size="md">Frango com Queijo</Heading>
                <VStack align="flex-start" fontSize={12} lineHeight={0.8} m={2}>
                    <Text>+ Escolha seu queijo</Text>
                    <Text>+ Adicionais disponíveis</Text>
                </VStack>
                <Text fontWeight="800" color="red.300">
                    R$12,00
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
