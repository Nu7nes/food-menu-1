import { Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { ReactElement } from "react";

export default function Aside(): ReactElement {
    return (
        <VStack
            my={3}
            px={4}
            color="white"
            minW={["auto", "330px"]}
            pt={[0, 10]}
            align="center"
            gap={8}
        >
            <VStack align="flex-start">
                <Heading fontSize={["1rem", "1.2rem"]}>Quem somos?</Heading>
                <Text fontSize={["0.8rem", "1rem"]} ml={4}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                </Text>
            </VStack>
            <VStack align="flex-start">
                <Heading fontSize={["1rem", "1.2rem"]}>Onde estamos?</Heading>
                <Text fontSize={["0.8rem", "1rem"]} ml={4}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                </Text>
            </VStack>
            <HStack justify="center" w="90%">
                <Icon fontSize="4rem" icon="mdi:google-maps" />
                <Text>Av. Rio Branco, 113A Centro, Rio de janeiro</Text>
            </HStack>
            <Button
                fontWeight="bold"
                w="90%"
                boxShadow="dark-lg"
                my={3}
                rightIcon={<Icon icon="mdi:whatsapp" />}
            >
                WhatsApp
            </Button>
        </VStack>
    );
}
