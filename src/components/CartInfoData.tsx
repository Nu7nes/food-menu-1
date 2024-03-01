import {
    Box,
    FormControl,
    Heading,
    Input,
    Text,
    VStack,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";

export default function CartInfoData(): ReactElement {
    const { register } = useFormContext();
    return (
        <Box mx={6} mt={5} mb={30} color="white">
            <Heading size="md" fontWeight={500} my={2}>
                Seus dados:
            </Heading>
            <VStack align="flex-start" mb={8}>
                <Text fontWeight={200} fontSize="0.8rem">
                    Insira seu nome para identificação:
                </Text>
                <FormControl>
                    <Input
                        placeholder="Nome"
                        focusBorderColor="red"
                        bg="white"
                        color="black"
                        boxShadow="md"
                        {...register("name", {
                            required: "Adicione seu nome!",
                            minLength: {
                                value: 3,
                                message: "Minimo de 3 caracteres!",
                            },
                        })}
                    />
                    
                </FormControl>
            </VStack>
            <Heading size="md" fontWeight={500} my={2}>
                Horario da retirada:
            </Heading>
            <VStack align="flex-start" mb={8}>
                <Text fontWeight={200} fontSize="0.8rem">
                    Insira o horario em que irá retirar o pedido:
                </Text>
                <Input
                    type="time"
                    focusBorderColor="red"
                    bg="white"
                    color="black"
                    boxShadow="md"
                    {...register("pickUpTime", {
                        required: "Adicione o horario de retirada!",
                    })}
                />
            </VStack>
        </Box>
    );
}
