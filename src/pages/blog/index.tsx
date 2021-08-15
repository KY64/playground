import React from "react";

import Layout from "@/components/Layout";

import NextImage from "next/image";
import { Box, Center, Heading, SimpleGrid, Text } from "@chakra-ui/react";

import type { ColorProps } from "@/styles/theme/color";

let arr: number[] = [];
const items: number = 6;
for (let i = 0; i < items; i++) {
  arr.push(i);
}

const summary =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const createSummary = (text: string): string => {
  const maxlen: number = 200;
  if (text.length > maxlen) text = text.slice(0, maxlen);
  text += "....";
  return text;
};

const Blog = (props: any) => (
  <>
    <Heading as="h1" color={props.color.text.primary} textAlign="center">
      Blog
    </Heading>
    <Heading
      as="h2"
      color={props.color.text.primary}
      fontSize="sm"
      fontWeight="light"
      marginBottom={8}
      marginTop={4}
      textAlign="center"
    >
      Mostly my personal note after learning interesting stuffs
    </Heading>
    <SimpleGrid columns={[1, 3]} justifyItems="center" spacing={4}>
      {arr.map((_, idx) => (
        <Post key={idx} {...props} />
      ))}
    </SimpleGrid>
  </>
);

const Post = (props: ColorProps) => (
  <Box
    _hover={{
      borderColor: props.color.contrast.color,
      borderWidth: 2,
      cursor: "pointer",
      transition: ".2s"
    }}
    borderColor="transparent"
    borderWidth={2}
    display="relative"
    height="fit-content"
    padding={4}
    width="100%"
  >
    <Heading as="h4" color={props.color.text.secondary} fontSize="md">
      BLOG TITLE
    </Heading>
    <Center marginY={2}>
      <NextImage
        height="100%"
        src="https://picsum.photos/640/360"
        width="100%"
      />
    </Center>
    <Text fontSize="sm" lineHeight="1.15" textAlign="justify">
      {createSummary(summary)}{" "}
      <Text as="span" color={props.color.contrast.color} fontWeight="bold">
        Read More
      </Text>
    </Text>
  </Box>
);

const View = () => (
  <Layout>
    <Blog />
  </Layout>
);

export default View;
