import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import goma from "../assets/goma.jpg";
import { Icon } from "@iconify/react";

export default function InfoCard({width} : {width: number}): ReactElement {
    return (
        <Box
            bgImage={`url(${goma})`}
            bgPosition="center"
            bgSize="cover"
            color="white"
            w={`${width}px`}
            h="200px"
            my={8}
            borderRadius={10}
            overflow="hidden"
            boxShadow="xl"
        >
            <Flex
                w="full"
                height="full"
                bg="alpha"
                direction="column"
                px={4}
                py={5}
                gap={3}
            >
                <Heading fontSize="18px" lineHeight={1}>
                    Já ouviu falar em goma de tapioca falsa?
                </Heading>
                <Text fontSize="14px" lineHeight={1}>
                    Por mais que no fim o resultado seja parecido, processos de
                    produção diferentes impactam em varios aspectos no produto
                    final.
                </Text>
                <Button
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
            </Flex>
        </Box>
    );
}
