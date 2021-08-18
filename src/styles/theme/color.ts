import { Colors } from "@chakra-ui/react";

/* Reference for type
 * https://github.com/chakra-ui/chakra-ui/blob/be28abf78957787e0efdabe567443f44985dc1e0/packages/theme/src/theme.types.ts#L36-L38
 */
const colors: Colors = {
  dark: {
    background: "#333",
    contrast: {
      color: "#ffb380",
      hover: "#ffccaa",
      inverted: "black"
    },
    text: {
      primary: "#e6e6e6",
      secondary: "white"
    }
  },
  light: {
    background: "#F0F0F0",
    contrast: {
      color: "blue",
      hover: "blue",
      inverted: "black"
    },
    text: {
      primary: "#555",
      secondary: "black"
    }
  }
};

export interface ColorProps {
  color: {
    background: string;
    contrast: {
      color: string;
      hover: string;
      inverted: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
  };
}

export default colors;
