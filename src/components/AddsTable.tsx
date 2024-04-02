import { ReactElement } from "react";
import {
    Box,
    Checkbox,
    Flex,
    StackDivider,
    Text,
    VStack,
} from "@chakra-ui/react";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { useFormContext } from "react-hook-form";

interface AddsLineProps {
    name: string;
    price?: number;
    isChecked: boolean;
    type: string;
}

interface AddsTableProps {
    isAdds: boolean;
    ingredients?: string[];
    listType: string;
    type?: string;
}

function AddsLineElement({
    name,
    price,
    isChecked,
    type,
}: AddsLineProps): ReactElement {
    const { register, setValue, getValues } = useFormContext();
    function handleItemPrice(event: React.ChangeEvent<HTMLInputElement>): void {
        const checkbox = event.target;

        if (type === "paidIncrement") {
            let oldAddsPrice = isNaN(Number(getValues("addsPrice")))
                ? 0
                : Number(getValues("addsPrice"));
            if (checkbox.checked) {
                setValue(`addsPrice`, oldAddsPrice + Number(checkbox.value));
            } else {
                setValue(`addsPrice`, oldAddsPrice - Number(checkbox.value));
            }
        }
    }
    return (
        <Flex justify="space-between" w="70%" my={1}>
            <Checkbox
                spacing="2rem"
                size="lg"
                colorScheme="red"
                defaultChecked={!isChecked}
                zIndex="0"
                value={price}
                {...register(`${type}.${name}`, { onChange: handleItemPrice })}
            />
            <Text>{name}</Text>
            {price ? <Text>{price}</Text> : <Box w={"10%"}></Box>}
        </Flex>
    );
}

export default function AddsTable({
    isAdds,
    ingredients,
    listType,
    type,
}: AddsTableProps): ReactElement {
    const adds = useSelector((state: RootState) => state.data.adds);

    if (!!ingredients)
        return (
            <VStack
                direction="column"
                mx={10}
                py={2}
                border="1px"
                borderColor="gray.200"
                borderRadius={10}
                divider={<StackDivider borderColor="gray.200" />}
            >
                {ingredients.map((it: string) => (
                    <AddsLineElement
                        name={it}
                        isChecked={isAdds}
                        key={it}
                        type={listType}
                    />
                ))}
            </VStack>
        );
    return (
        <VStack
            direction="column"
            mx={10}
            py={2}
            border="1px"
            borderColor="gray.200"
            borderRadius={10}
            divider={<StackDivider borderColor="gray.200" />}
        >
            {listType === "increment" &&
                adds.increment.map((it: string) => (
                    <AddsLineElement
                        key={it}
                        name={it}
                        isChecked={isAdds}
                        type={listType}
                    />
                ))}
            {(listType === "paidIncrement" &&
                type === "sal" &&
                adds.paidIncrement.salt.map(
                    (it: { name: string; price: number }) => (
                        <AddsLineElement
                            key={it.name}
                            name={it.name}
                            price={it.price}
                            isChecked={isAdds}
                            type={listType}
                        />
                    )
                )) ||
                (listType === "paidIncrement" &&
                    type === "doce" &&
                    adds.paidIncrement.sugar.map(
                        (it: { name: string; price: number }) => (
                            <AddsLineElement
                                key={it.name}
                                name={it.name}
                                price={it.price}
                                isChecked={isAdds}
                                type={listType}
                            />
                        )
                    ))}
        </VStack>
    );
}
