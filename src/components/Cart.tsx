import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import CartItemList from "./CartItemList";
import CartInfoData from "./CartInfoData";
import { RootState } from "../store/store";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import formatDataToMessage from "../data/formatDataToMessage";

export interface ConcludeProps {
    name: string;
    pickUpTime: string;
}

export default function Cart(): ReactElement {
    const cartData = useSelector((state: RootState) => state.cart);
    const methods = useForm();

    function addPrices(acc: number, value: FieldValues): number {
        return acc + value.price;
    }

    function conclude(data: FieldValues): void {
        formatDataToMessage({
            cart: cartData,
            data: {
                ...data,
                total: cartData.reduce(addPrices, 0).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }),
            },
        });
    }

    return (
        <>
            <Box bg="white" py={5} px={2} mx={4} rounded={10} boxShadow="md">
                <CartItemList />
            </Box>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(conclude)}>
                    <CartInfoData />
                    <Flex
                        margin="auto"
                        align="center"
                        bgColor="red.500"
                        rounded={10}
                        w="90%"
                        mb={6}
                        pb={3}
                        direction="column"
                        boxShadow="dark-lg"
                    >
                        <HStack
                            color="white"
                            justify="space-between"
                            px={5}
                            pb={3}
                            pt={5}
                            w="full"
                        >
                            <Text>Total:</Text>
                            <Text
                                fontWeight={500}
                                {...methods.register("total")}
                            >
                                {cartData
                                    .reduce(addPrices, 0)
                                    .toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
                            </Text>
                        </HStack>
                        <Button
                            colorScheme="white"
                            color="black"
                            bg="white"
                            borderRadius={10}
                            fontWeight="bold"
                            w="70%"
                            // boxShadow="dark-lg"s
                            my={3}
                            rightIcon={<Icon icon="solar:cart-3-bold" />}
                            type="submit"
                        >
                            Adicionar à sacola
                        </Button>
                    </Flex>
                </form>
            </FormProvider>
        </>
    );
}
