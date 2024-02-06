import { Box, Button, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { displayBreakpoint } from "../assets/chakra/breakepoints";
import logo from "../assets/logo.svg";
import wave_top from "../assets/wave_top_first.svg";
import { ReactElement, RefObject } from "react";

interface DrawerInformationProps {
    isOpen: boolean;
    onClick: () => void;
    btnRef: RefObject<HTMLButtonElement>;
}

export default function Header({
    btnRef,
    onClick,
}: DrawerInformationProps): ReactElement {
    const breakpoints: string | undefined =
        useBreakpointValue(displayBreakpoint);

    return (
        <Box>
            <Flex
                justify="space-between"
                align="center"
                bg="red.400"
                // h="30px"
                pt={[8, 4]}
                pb={[6, 4]}
                px={[4, 1, 0]}
                shadow={["lg", ""]}
            >
                <Image
                    src={logo}
                    alt="Logo Tapioca da Jessica"
                    h={[59]}
                    objectFit="cover"
                    ml="3"
                />
                <Button
                    size="sm"
                    mr={3}
                    colorScheme="red.400"
                    boxShadow="dark-lg"
                    display={breakpoints}
                    onClick={onClick}
                    ref={btnRef}
                >
                    <Icon icon="mingcute:menu-fill" />
                </Button>
            </Flex>
            <Image src={wave_top} width="100%" display={breakpoints} />
        </Box>
    );
}
