import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    UseDisclosureProps,
    useDisclosure,
    IconButton,
    Image,
    Box,
    Heading,
    useToast,
    ToastId,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { ReactElement, useRef } from "react";
import { theme } from "../theme";
import ItemPageHeading from "./ItemPageHeading";
import AddsTable from "./AddsTable";
import { AddItemButton } from "./CustomButtons";
import { ItemListProps } from "./ListItem";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addItemOnCart } from "../store/slices/cartSlice";

// export interface CartProps {
//     flavor: number;
//     price: string;
//     addsPrice?: number
//     ingredients: any;
//     increment: any;
//     paidIncrement: any;
//     quantity?: number;
// }

export default function ItemPage({ item }: ItemListProps): ReactElement {
    const { isOpen, onOpen, onClose }: UseDisclosureProps = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);
    const methods = useForm();
    const dispatch = useDispatch();
    const toast = useToast();

    function submitHandler(data: FieldValues): ToastId {
        dispatch(addItemOnCart(data));
        if (onClose) onClose();

        return toast({
            title: "Item adicionado a sua sacola.",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
            // containerStyle: {
            //     my: "2rem",
            // },
        });
    }

    return (
        <>
            <IconButton
                colorScheme="red"
                bg="red.300"
                boxShadow="dark-lg"
                rounded={100}
                h="2rem"
                w="2rem"
                size="xs"
                aria-label="add-button"
                ref={btnRef}
                onClick={onOpen}
            >
                <Icon
                    icon="mdi:add-bold"
                    height="1.5rem"
                    color={theme.colors.white}
                />
            </IconButton>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
                size="md"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton
                        color="white"
                        bg="red.300"
                        colorScheme="red"
                        m={4}
                        mt={6}
                        boxShadow="dark-lg"
                        left={4}
                        size="md"
                    >
                        <Icon icon="mdi:arrow-left-thick" fontSize={30} />
                    </DrawerCloseButton>

                    <FormProvider {...methods}>
                        <DrawerBody
                            p={0}
                            as="form"
                            onSubmit={methods.handleSubmit(submitHandler)}
                        >
                            <Image
                                w={"full"}
                                src="https://www.nacozinhadahelo.com.br/wp-content/uploads/2022/08/como-fazer-tapioca.jpg"
                                alt="imagem-tapioca"
                                h={150}
                                objectFit="cover"
                            />
                            <ItemPageHeading
                                flavor={item.flavor}
                                price={item.price}
                                type={item.type}
                                adds={item.adds}
                            />
                            {/* <Box my={5}>
                            <Heading ml={5} size="x1">
                                Ingredientes:
                            </Heading>
                            <Text fontSize="0.8rem" ml={8} mb={2}>
                                Deseja remover algo?
                            </Text>
                            <AddsTable isAdds={false} />
                        </Box> */}
                             {item.ingredients && (
                                <>
                                    <Box my={5}>
                                        <Heading ml={5} size="x1">
                                            Ingredientes:
                                        </Heading>
                                        <AddsTable
                                            isAdds={false}
                                            ingredients={item.ingredients}
                                            listType="ingredients"
                                        />
                                    </Box>
                                </>
                            )}
                            {item.adds && item.type === "sal" && (
                                <>
                                    <Box my={5}>
                                        <Heading ml={5} size="x1">
                                            Adicione sem custo:
                                        </Heading>
                                        <AddsTable
                                            isAdds={true}
                                            listType="increment"
                                        />
                                    </Box>
                                </>
                            )}
                            {item.adds && (
                                <>
                                    <Box my={5}>
                                        <Heading ml={5} size="x1">
                                            Adicionais:
                                        </Heading>
                                        <AddsTable
                                            isAdds={true}
                                            listType="paidIncrement"
                                            type={item.type}
                                        />
                                    </Box>
                                </>
                            )}
                            <AddItemButton />
                        </DrawerBody>
                    </FormProvider>
                </DrawerContent>
            </Drawer>
        </>
    );
}
