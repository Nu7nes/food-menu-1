// import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";
// import { Icon } from "@iconify/react";
import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Box, Heading } from "@chakra-ui/react";

function App() {
    // const [count, setCount] = React.useState(0);

    return (
        <BrowserRouter>
            <Header></Header>
            {/* <Routes>
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
            </Routes> */}
        </BrowserRouter>
    );
}

export default App;
