import React from "react";

import { Heading } from "@chakra-ui/react";

const Head = (props: any) => {
  return (
    <Heading
      as="h2"
      color="dark.text.secondary"
      fontSize="xl"
      marginTop={4}
      {...props}
    />
  );
};

export default Head;
