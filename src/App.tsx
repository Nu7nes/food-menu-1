// import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";
// import { Icon } from "@iconify/react";
import { useDisclosure, useMediaQuery } from "@chakra-ui/react";
import Header from "./components/Header"
import { BrowserRouter} from "react-router-dom";
import DrawerInformation from "./components/Drawer";
import { useRef } from "react";
import { DrawerProps, UseDisclosureProps } from "@chakra-ui/react";
import Aside from "./components/Aside";

// interface DrawerInformationProps {
//   isOpen: boolean;
//   onOpen: () => void;
//   onClick: () => void;
// }

function App() {
    // const [count, setCount] = React.useState(0);
    const [isLargerThan448]: boolean[] = useMediaQuery('(min-width: 448px)')
    // const {isOpen, onOpen, onClose}: UseDisclosureProps = useDisclosure()
    // const btnRef = useRef()

    return (
        <BrowserRouter>
            <Header></Header>
            {isLargerThan448 ? <Aside/> : <></>}
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
