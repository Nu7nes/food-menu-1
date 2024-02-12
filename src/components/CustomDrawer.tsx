import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    UseDisclosureProps,
    useDisclosure,
    useBreakpointValue,
    Image,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { ReactElement, useRef } from "react";
import { displayBreakpoint } from "../chakra/breakepoints";
import logo from "../assets/logo.svg";
import Aside from "./Aside";

export default function CustomDrawer(): ReactElement {
    const { isOpen, onOpen, onClose }: UseDisclosureProps = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);

    const breakpoints: string | undefined =
        useBreakpointValue(displayBreakpoint);

    return (
        <>
            <Button
                ref={btnRef}
                onClick={onOpen}
                size="sm"
                mr={3}
                colorScheme="red.400"
                boxShadow="dark-lg"
                display={breakpoints}
            >
                <Icon icon="mingcute:menu-fill" />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
                size="xl"
            >
                    <DrawerOverlay />
                    <DrawerContent bg="red.400">
                        <DrawerCloseButton
                            color="white"
                            colorScheme="red.400"
                            m={6}
                            mt={8}
                            boxShadow="dark-lg"
                        />
                        <DrawerHeader m={3} pl={8}>
                            <Image
                                src={logo}
                                alt="Logo Tapioca da Jessica"
                                h={[59]}
                                objectFit="cover"
                            />
                        </DrawerHeader>

                        <DrawerBody>
                            <Aside />
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
