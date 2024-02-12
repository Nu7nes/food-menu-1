import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { displayBreakpoint } from "../chakra/breakepoints";
import logo from "../assets/logo.svg";
import wave_top from "../assets/wave_top_first.svg";
import { ReactElement } from "react";
import CustomDrawer from "./CustomDrawer";

// interface DrawerInformationProps {
//     isOpen: boolean;
//     onClick: () => void;
//     btnRef: RefObject<HTMLButtonElement>;
// }

export default function Header(): ReactElement {

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
                <CustomDrawer />
            </Flex>
            <Image src={wave_top} width="100%" display={breakpoints} />
        </Box>
    );
}
