import { Grid, GridItem, useMediaQuery } from "@chakra-ui/react";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Aside from "./components/Aside";
import Main from "./components/Main";

function App() {
    // const [count, setCount] = React.useState(0);
    const [isLargerThan448]: boolean[] = useMediaQuery("(min-width: 768px)");

    return (
        <BrowserRouter>
            <Header></Header>
            {isLargerThan448 ? (
                <Grid
                    h={isLargerThan448 ? "calc(100vh - 91px)" : "auto"}
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(4, 1fr)"
                >
                    <GridItem colSpan={1} bg="red.400">
                        <Aside />
                    </GridItem>
                    <GridItem colSpan={3}>
                        <Main />
                    </GridItem>
                </Grid>
            ) : (
                <Main />
            )}
        </BrowserRouter>
    );
}

export default App;
