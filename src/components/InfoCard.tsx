import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import goma from "../assets/goma.jpg";
// import { Icon } from "@iconify/react";
import CustomDrawer from "./CustomDrawer";
import InfoPost from "./InfoPost";
import { DocumentData } from "firebase/firestore";

interface InfoCardProps {
    width: number
    data: DocumentData
}

export default function InfoCard({width, data} : InfoCardProps): ReactElement {
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
                    {data.title}
                </Heading>
                <Text fontSize="14px" lineHeight={1}>
                    {data.field}
                </Text>
                {/* <Button
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
                </Button> */}
                <CustomDrawer hasLogo={true} button="infoPost">
                    <InfoPost />
                </CustomDrawer>
                
            </Flex>
        </Box>
    );
}
