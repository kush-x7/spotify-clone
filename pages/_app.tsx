import React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import PlayerLayout from "../components/playerLayout";
import "reset-css"; // Package For resetting css 

// Extending theme of Chakra UI
const theme = extendTheme({
  colors: {
    gray: {
      100: "#F5f5f5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  Comment: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    // This will provide theme to all are component
    <ChakraProvider theme={theme}>
      {/* We are nesting component inside Player Layout because player will not change when inside component changes */}
      <PlayerLayout>
        <Component {...pageProps} />
      </PlayerLayout>
    </ChakraProvider>
  );
};

export default App;
