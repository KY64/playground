import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import customTheme from "@/styles/theme";
import "@/styles/style.css";

import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider resetCSS theme={customTheme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
