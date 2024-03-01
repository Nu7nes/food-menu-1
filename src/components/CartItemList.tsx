import {
    VStack,
    HStack,
    IconButton,
    Text,
    StackDivider,
    Image,
    Heading,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { removeItemOnCart } from "../store/slices/cartSlice";

function handleRenderAdds(isIgredient: boolean, data: any) {
    const keys = [];
    if (isIgredient) {
        for (const ingredient in data) {
            if (!data[ingredient]) {
                keys.push(ingredient);
            }
        }
    } else {
        for (const ingredient in data) {
            if (data[ingredient]) {
                keys.push(ingredient);
            }
        }
    }
    return keys;
}

export default function CartItemList(): ReactElement {
    const cartData = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    function handleDeleteButton(name: string, price: number) {
        dispatch(removeItemOnCart({ flavor: name, price: price }));
    }

    if (cartData.length < 1)
        return (
            <VStack h="20vh" justify="center">
                <Text>Você ainda não adicionou nada!</Text>
                <Heading size="md">Faça já seu pedido!</Heading>
            </VStack>
        );

    return (
        <VStack divider={<StackDivider borderColor="gray.200" />} spacing={5}>
            {cartData.map((it, index) => (
                <HStack
                    w="full"
                    justify="space-between"
                    align="flex-start"
                    px={2}
                    key={index}
                >
                    <Image
                        objectFit="cover"
                        w="70px"
                        h="70px"
                        mt={1}
                        src="https://www.nacozinhadahelo.com.br/wp-content/uploads/2022/08/como-fazer-tapioca.jpg"
                        alt="Caffe Latte"
                        boxShadow="dark-lg"
                        borderRadius={8}
                    />
                    <VStack w="full" align="flex-start" spacing={0} pl={1}>
                        <Heading size="sm">{it.flavor}</Heading>
                        <VStack
                            spacing={0}
                            align="flex-start"
                            lineHeight={1.2}
                            pl={1}
                        >
                            {handleRenderAdds(true, it.ingredients).map(
                                (it) => (
                                    <Text
                                        fontSize="0.8rem"
                                        fontWeight="500"
                                        color="red"
                                    >
                                        {"- " + it}
                                    </Text>
                                )
                            )}
                            {handleRenderAdds(false, it.increment).map((it) => (
                                <Text
                                    fontSize="0.8rem"
                                    fontWeight="500"
                                    color="green"
                                >
                                    {"+ " + it}
                                </Text>
                            ))}
                            {handleRenderAdds(false, it.paidIncrement).map(
                                (it) => (
                                    <Text
                                        fontSize="0.8rem"
                                        fontWeight="500"
                                        color="green"
                                    >
                                        {"+ " + it}
                                    </Text>
                                )
                            )}
                        </VStack>
                    </VStack>
                    <VStack align="flex-end" spacing={1} lineHeight={1}>
                        <Text>{it.quantity + " unid."}</Text>
                        <Text fontWeight="bold" color="green">
                            {it.price.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </Text>
                        <IconButton
                            icon={
                                <Icon
                                    icon="mdi:trash-can"
                                    fontSize={"1.6rem"}
                                />
                            }
                            colorScheme="red"
                            size="md"
                            w="full"
                            mt={1}
                            boxShadow="dark-lg"
                            aria-label="delete-item"
                            onClick={() => {
                                handleDeleteButton(it.flavor, it.price);
                            }}
                        />
                    </VStack>
                </HStack>
            ))}
        </VStack>
    );
}
