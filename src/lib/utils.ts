import { useBreakpointValue } from "@chakra-ui/react";

export const createSummary = (text: string): string => {
  const maxlen: number = 200;
  if (text.length > maxlen) {
    text = text.slice(0, maxlen);
    text += "....";
  }
  text += " ";
  return text;
};

export const useMobileView = () =>
  useBreakpointValue({ base: true, md: false });
