import React from "react";

import NextLink from "next/link";
import { Center, HStack, Link } from "@chakra-ui/react";
import { NextRouter, useRouter } from "next/router";

const NavBar = () => {
  const path: string[] = ["Home", "Project", "Blog", "About"];
  const current_path: NextRouter = useRouter();
  let string_path: string = current_path.asPath;

  if (string_path !== "/") {
    string_path = current_path.asPath.split("/")[1];
  }

  // Change navigation menu dynamically
  let route: string[] = path.filter((value) => {
    if (string_path === "/") string_path = "Home";
    return value.toLowerCase() !== string_path.toLowerCase();
  });

  return (
    <Center as="header">
      <HStack as="nav" fontSize="lg" padding={8} spacing={10}>
        {route.map((path) => (
          <NextLink
            href={path === "Home" ? "/" : `/${path.toLowerCase()}`}
            key={`nav-${path.toLowerCase()}`}
          >
            <Link>{path}</Link>
          </NextLink>
        ))}
      </HStack>
    </Center>
  );
};

export default NavBar;
