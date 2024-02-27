import { Button, Flex } from "@chakra-ui/react";
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
                rightIcon={<Icon icon="solar:cart-3-bold" />}
                type="submit"
            >
                Adicionar à sacola
            </Button>
        </Flex>
    );
}

// export function CartButton(): ReactElement {
//     return (
//         <IconButton
//             aria-label="cart-button"
//             colorScheme="red"
//             icon={<Icon icon="solar:cart-3-bold" height="2.4rem"/>}
//             position="fixed"
//             bottom="2rem"
//             right="2rem"
//             rounded={100}
//             height="4rem"
//             width="4rem"
//             boxShadow="dark-lg"
//         />
//     );
// }
