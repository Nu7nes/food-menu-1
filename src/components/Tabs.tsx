import { Button, HStack, Image, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import wave_top_second from '../assets/wave_top_second.svg'

export default function Tabs(): ReactElement {
    return (
        <VStack  gap="0">
            <HStack w="full" h="full" justify="space-around" bg="gray.100" py="20px" pt='40px'>
                <Link to="/">
                    <Button variant="link">Destaque</Button>
                </Link>
                <Link to="/todos">
                    <Button variant="link">Todos</Button>
                </Link>
            </HStack>
            <Image src={wave_top_second} w="full" />
        </VStack>
    );
}
