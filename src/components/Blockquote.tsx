import React from "react";

import { Text } from "@chakra-ui/react";

const Blockquote = (props: any) => (
  <Text
    color="dark.text.secondary"
    fontSize="3xl"
    fontStyle="italic"
    margin="20px 0"
  >
    {props.children.props.children}
  </Text>
);

export default Blockquote;
