import "typeface-open-sans";

import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

import customTheme from "@/styles/theme";
import "@/styles/style.css";

import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        content="width=device-width, initial-scale=1, maximum-scale=1"
        name="viewport"
      />
    </Head>
    <ChakraProvider resetCSS theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
);

export default App;
