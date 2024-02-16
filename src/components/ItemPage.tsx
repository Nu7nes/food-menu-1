import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    UseDisclosureProps,
    useDisclosure,
    IconButton,
    Image,
    Box,
    Heading,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { ReactElement, useRef } from "react";
import { theme } from "../theme";
import ItemPageHeading from "./ItemPageHeading";
import AddsTable from "./AddsTable";

export default function ItemPage(): ReactElement {
    const { isOpen, onOpen, onClose }: UseDisclosureProps = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);


    return (
        <>
            <IconButton
                colorScheme="red"
                bg="red.300"
                boxShadow="dark-lg"
                rounded={100}
                size="xs"
                aria-label="add-button"
                ref={btnRef}
                onClick={onOpen}
            >
                <Icon
                    icon="mdi:add-bold"
                    height="1rem"
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
                    <DrawerHeader p={0} borderBottom="3px solid gray">
                        <Image
                            w={"full"}
                            src="https://www.nacozinhadahelo.com.br/wp-content/uploads/2022/08/como-fazer-tapioca.jpg"
                            alt="Logo Tapioca da Jessica"
                            h={[150]}
                            objectFit="cover"
                        />
                    </DrawerHeader>

                    <DrawerBody p={0}>
                        <ItemPageHeading />
                        <Box my={5}>
                            <Heading ml={5} size="x1">Adicione sem custo:</Heading>
                            <AddsTable />
                        </Box>
                        <Box>
                            <Heading ml={5} size="x1">Adicionais:</Heading>
                            <AddsTable />
                        </Box>
                    </DrawerBody>

                    {/* <DrawerFooter>
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme="blue">Save</Button>
                        </DrawerFooter> */}
                </DrawerContent>
            </Drawer>
        </>
    );
}
