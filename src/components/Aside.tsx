import {
    Button,
    HStack,
    Heading,
    Text,
    VStack
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { ReactElement } from "react";

export default function Aside(): ReactElement {

    return (
        <VStack
            my={3}
            px={4}
            color="white"
            minW={['auto', "330px"]}
            pt={[0, 10]}
            align="center"
            gap={8}
        >
            <VStack align="flex-start">
                <Heading fontSize={["1rem", "1.2rem"]}>Quem somos?</Heading>
                <Text fontSize={["0.8rem", "1rem"]} ml={4}>
                    A Tapioca da Jessica é a melhor barraca de tapioca da feira
                    tradicional de Duque de Caxias. A barraca em si , que ja foi
                    dirigida por Dona Josefina durante 40 anos, hoje esta com
                    sua neta.
                </Text>
            </VStack>
            <VStack align="flex-start">
                <Heading fontSize={["1rem", "1.2rem"]}>Onde estamos?</Heading>
                <Text fontSize={["0.8rem", "1rem"]} ml={4}>
                    Abaixo encontra-se o endereço, a barraca fica na feira de
                    roupas, próximo a praça Roberto Silveira. Para quem sai da
                    praça e vai em direção à agência do Correios, a barraca
                    estará à esquerda, ao lado do Espetinho do Doido.
                </Text>
            </VStack>
            <HStack justify="center" w="90%">
                <Icon fontSize="4rem" icon="mdi:google-maps" />
                <Text>Av. Presidente Vargas, 113A Centro, Duque de Caxias</Text>
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
