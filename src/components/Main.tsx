import { Box, Heading } from "@chakra-ui/react";
import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import Tabs from "./Tabs";

export default function Main(): ReactElement {
    return(
        <Box>
            <Tabs />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Heading color="red.400" fontWeight="700">
                            Destaque
                        </Heading>
                    }
                />
                <Route
                    path="/todos"
                    element={
                        <Heading color="red.400" fontWeight="700">
                            todos
                        </Heading>
                    }
                />
            </Routes>
        </Box>
    )
}