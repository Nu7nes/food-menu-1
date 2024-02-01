import { Box, Button, Flex, Image, Img, useBreakpointValue } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import logo from "../assets/logo.svg";
import wave_top from "../assets/wave_top_first.svg";
import { ReactElement } from "react";

export default function Header(): ReactElement {

    const displayBreakpoint: string | undefined = useBreakpointValue({
        base: 'block',
        sm: 'block',
        md: 'none'
    })
    
    return (
        <Box>
            <Flex
                justify="space-between"
                align="center"
                bg="red.400"
                h="80px"
                pt={3}
                px={3}
            >
                <Image
                    src={logo}
                    alt="Logo Tapioca da Jessica"
                    h={[10, 35, 35]}
                    // maxH="100%"
                    objectFit="cover"
                    ml="3"
                />
                <Button size="" p={0} mr={3} variant="link" color="white" display={displayBreakpoint}>
                    <Icon icon="mingcute:menu-fill" />
                </Button>
            </Flex>
            <Image src={wave_top} width="100%" display={displayBreakpoint}/>
        </Box>
    );
}
