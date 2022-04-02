import { ChakraProvider, ColorModeScript, extendTheme, theme } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import { store } from "./store";


const newTheme = extendTheme({
  colors: {
    brand: {
      500: '#f5b324'
    }
  }
})
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ColorModeScript />
      <ChakraProvider theme={newTheme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


// TODO: implement offline first experience with data in local storage
serviceWorker.unregister();

// TODO: create endpoint to report webvitals
reportWebVitals();
