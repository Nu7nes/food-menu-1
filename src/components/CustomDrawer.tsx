import {
    Button,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    UseDisclosureProps,
    useDisclosure,
    useBreakpointValue,
    Image,
    Heading,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { ReactElement, useRef } from "react";
import { displayBreakpoint } from "../chakra/breakepoints";
import logo from "../assets/logo.svg";

interface CustomDrawerProps {
    children: ReactElement;
    button: string;
    hasLogo: boolean;
    header?: string;
}

export default function CustomDrawer({
    children,
    button,
    hasLogo,
    header,
}: CustomDrawerProps): ReactElement {
    const { isOpen, onOpen, onClose }: UseDisclosureProps = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);

    const breakpoints: string | undefined =
        useBreakpointValue(displayBreakpoint);

    return (
        <>
            {button === "cart" && (
                <Button
                    ref={btnRef}
                    onClick={onOpen}
                    aria-label="cart-button"
                    colorScheme="red"
                    position="fixed"
                    bottom="2rem"
                    right="2rem"
                    rounded={100}
                    height="4rem"
                    width="4rem"
                    boxShadow="dark-lg"
                >
                    <Icon icon="solar:cart-3-bold" height="2.4rem" />
                </Button>
            )}
            {button === "infoPost" && (
                <Button
                    ref={btnRef}
                    onClick={onOpen}
                    aria-label="cart-button"
                    alignSelf="flex-end"
                    colorScheme="red"
                    w="50%"
                    h={8}
                    m={1}
                    rounded={100}
                    fontSize="14px"
                    rightIcon={
                        <Icon icon="mdi:about-circle-outline" fontSize={18} />
                    }
                >
                    Saiba mais
                </Button>
            )}
            {button === "menu" && (
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
            )}
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
                size={button == "cart" ? "md" : "xl"}
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
                        {hasLogo && (
                            <Image
                                src={logo}
                                alt="Logo Tapioca da Jessica"
                                h={[59]}
                                objectFit="cover"
                            />
                        )}
                        {header && <Heading color="white" mt={2}>{header}</Heading>}
                    </DrawerHeader>

                    <DrawerBody px={0} pb={0}>{children}</DrawerBody>

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
