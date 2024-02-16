import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import Tabs from "./Tabs";
import ListFeatured from "../pages/ListFeatured";
import ListAll from "../pages/ListAll";
import wave_botton from "../assets/wave_botton.svg";

export default function Main(): ReactElement {
    return (
        <Box>
            <Tabs />
            <Box>
                <Routes>
                    <Route path="/" element={<ListFeatured />} />
                    <Route path="/todos" element={<ListAll />} />
                </Routes>
            </Box>
            <Box bg="red.400" pb={1}>
                <Image src={wave_botton} transform="translateY(-80%)" w="full"/>
                <HStack color="white" justify="center">
                    <Text fontSize="0.6rem">Desenvolvido por:</Text>
                    <Button
                        size="xs"
                        variant="link"
                        fontWeight="bold"
                        fontSize="0.8rem"
                        colorScheme="white"
                        as="a"
                        href="https://brunonunes.site"
                    >
                        Bruno Nunes
                    </Button>
                </HStack>
            </Box>
        </Box>
    );
}
