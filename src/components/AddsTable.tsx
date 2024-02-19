import { ReactElement } from "react";
import { Checkbox, Flex, StackDivider, Text, VStack } from "@chakra-ui/react";

interface AddsLineProps {
    price: string;
    isChecked: boolean;
}

function AddsLineElement({ price, isChecked }: AddsLineProps): ReactElement {
    return (
        <Flex justify="space-between" w="70%" my={1}>
            <Checkbox
                spacing="2rem"
                size="lg"
                colorScheme="red"
                defaultChecked={isChecked}
                zIndex="0"
            />
            <Text>Adicional</Text>
            {price ? <Text>{price}</Text> : null}
        </Flex>
    );
}

export default function AddsTable(): ReactElement {
    return (
        <VStack
            direction="column"
            mx={10}
            py={2}
            border="1px"
            borderColor="gray.200"
            borderRadius={10}
            divider={<StackDivider borderColor='gray.200' />}
        >
            <AddsLineElement price="21" isChecked={true} />
            <AddsLineElement price="21" isChecked={true} />
        </VStack>
    );
}
