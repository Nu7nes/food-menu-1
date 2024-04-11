import { Grid, GridItem, useMediaQuery } from "@chakra-ui/react";
import Header from "./components/Header";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Aside from "./components/Aside";
import Main from "./components/Main";
import CustomDrawer from "./components/CustomDrawer";
import Cart from "./components/Cart";
import { useDispatch } from "react-redux";
import Api from "./data/firebaseConfig";
import { useEffect } from "react";
import { addData } from "./store/slices/dataSlice";

function App() {
    const [isLargerThan448]: boolean[] = useMediaQuery("(min-width: 768px)");
    const dispatch = useDispatch();

    useEffect(() => {
        async function dataHandler() {
            const api = new Api();
            const data = await api.getData();
            dispatch(addData(data));
        }
        dataHandler();
    }, []);

    return (
        // <BrowserRouter>
        <HashRouter>
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
            <CustomDrawer hasLogo={false} button="cart" header="Pedidos">
                <Cart />
            </CustomDrawer>
        </HashRouter>
        // </BrowserRouter>
    );
}

export default App;
