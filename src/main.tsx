import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { theme } from "./theme.ts";
import "./global.css";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </Provider>
    </React.StrictMode>
);
