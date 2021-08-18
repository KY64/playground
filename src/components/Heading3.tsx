import React from "react";

import { Heading } from "@chakra-ui/react";

const Head = (props: any) => (
  <Heading
    as="h3"
    color="dark.text.secondary"
    fontSize="lg"
    marginTop={4}
    {...props}
  />
);

export default Head;
