// import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";
// import { Icon } from "@iconify/react";
import { useDisclosure, useMediaQuery } from "@chakra-ui/react";
import Header from "./components/Header"
import { BrowserRouter} from "react-router-dom";
// import DrawerInformation from "./components/Drawer";
// import { useRef } from "react";
// import { Box, Heading } from "@chakra-ui/react";

function App() {
    // const [isLargerThan480]: boolean[] = useMediaQuery('(min-width: 480px)')
    // const {isOpen, onOpen, onClose} = useDisclosure()
    // const btnRef = useRef()

    return (
        <BrowserRouter>
            <Header ></Header>
            {/* {isLargerThan480 ? <></> : <DraCwerInformation btnRef={btnRef}/>} */}
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
