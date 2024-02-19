import { Box, Button, Flex } from "@chakra-ui/react";
import { ReactElement } from "react";
import { Icon } from "@iconify/react";

export function AddItemButton(): ReactElement {
    return (
        <Flex
            justify="center"
            bgColor="transparent"
            my={5}
            position="sticky"
            bottom="1rem"
        >
            <Button
                colorScheme="red"
                borderRadius={10}
                fontWeight="bold"
                w="70%"
                boxShadow="dark-lg"
                my={3}
                rightIcon={<Icon icon="mdi:marketplace" />}
            >
                Adicionar à sacola
            </Button>
        </Flex>
    );
}
