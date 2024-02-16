import { Button, HStack, Image, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import wave_top_second from "../assets/wave_top_second.svg";

export default function Tabs(): ReactElement {
    return (
        <VStack gap="0">
            <HStack
                w="full"
                h="full"
                justify="space-around"
                bg="gray.100"
                py={[2, 4]}
                pt={[10, 10, 6]}
                px={5}
                transform={["translateY(-2.2rem)", "translateY(-2.8rem)", "translateY(0rem)"]}
            >
                <Link to="/">
                    <Button variant="link" fontWeight="500">
                        Destaque
                    </Button>
                </Link>
                <Link to="/todos">
                    <Button variant="link" fontWeight="500">
                        Todos
                    </Button>
                </Link>
            </HStack>
            <Image
                src={wave_top_second}
                w="full"
                transform={["translateY(-2.2rem)", "translateY(-2.8rem)", "translateY(0rem)"]}
            />
        </VStack>
    );
}
