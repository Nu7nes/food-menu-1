import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { displayBreakpoint } from "../chakra/breakepoints";
import logo from "../assets/logo.svg";
import wave_top from "../assets/wave_top_first.svg";
import { ReactElement, useEffect, useState } from "react";
import CustomDrawer from "./CustomDrawer";
import { motion } from "framer-motion";


export default function Header(): ReactElement {
    const breakpoints: string | undefined =
        useBreakpointValue(displayBreakpoint);

    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
    return (
        <Box position={"sticky"} top={0} zIndex={1000}>
            <Flex
                justify="space-between"
                align="center"
                bg="red.400"
                // h="30px"
                pt={[8, 4]}
                pb={[6, 4]}
                px={[4, 1, 0]}
            >
                <Image
                    src={logo}
                    alt="Logo Tapioca da Jessica"
                    h={[59]}
                    objectFit="cover"
                    ml="3"
                    as={motion.img}
                    animate={scrollTop > 0 ? { height: 40 } : ""}
                    transition="50ms linear"
                />
                <CustomDrawer />
            </Flex>
            <Image
                src={wave_top}
                w="100vh"
                // transform="scale: 0.2"
                display={breakpoints}
                as={motion.img}
                transformOrigin="top"
                animate={scrollTop > 0 ? { scaleY: 0 } : ""}
                transition="10ms linear"
            />
        </Box>
    );
}
