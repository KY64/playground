import React from "react";

import { List, ListItem } from "@chakra-ui/react";

const CustomList = (props: any) => (
  <List>
    <ListItem
      color="dark.text.secondary"
      letterSpacing=".4pt"
      margin="3px 26px"
      {...props}
    />
  </List>
);

export default CustomList;
