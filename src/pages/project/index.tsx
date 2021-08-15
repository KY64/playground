import React, { useState } from "react";

import Layout from "@/components/Layout";

import NextImage from "next/image";
import { Box, Center, Heading, SimpleGrid, Text } from "@chakra-ui/react";

import type { ColorProps } from "@/styles/theme/color";

let arr: number[] = [];
const items: number = 6;
for (let i = 0; i < items; i++) {
  arr.push(i);
}

const Project = (props: any) => (
  <>
    <Heading as="h1" color={props.color.text.primary} textAlign="center">
      Project
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
      A collection of project using technology I've learned
    </Heading>
    <SimpleGrid columns={[1, 3]} justifyItems="center" spacing={10}>
      {arr.map((_, idx) => (
        <Card key={idx} {...props} />
      ))}
    </SimpleGrid>
  </>
);

const Card = (props: ColorProps) => {
  const [mouseOver, setMouseOver] = useState<boolean>(false);

  return (
    <Box
      _hover={{ background: props.color.contrast.color, cursor: "pointer" }}
      borderColor={props.color.contrast.color}
      borderWidth={2}
      display="relative"
      height="180px"
      onMouseLeave={() => setMouseOver(false)}
      onMouseOver={() => setMouseOver(true)}
      padding={4}
      width="100%"
    >
      <Heading
        as="h4"
        color={
          mouseOver ? props.color.contrast.inverted : props.color.contrast.color
        }
        fontSize="sm"
        fontWeight="light"
        textAlign="center"
      >
        PROJECT NAME
      </Heading>
      {mouseOver ? (
        <Text
          color={props.color.contrast.inverted}
          display={mouseOver ? "block" : "none"}
          fontSize="sm"
          marginTop={2}
        >
          This is the short description about the project. It will tell you
          about the purpose, who contributed, and the result.
        </Text>
      ) : (
        <Center marginY={4}>
          <NextImage
            height="100%"
            src="https://picsum.photos/640/360"
            width="100%"
          />
        </Center>
      )}
    </Box>
  );
};

const View = () => (
  <Layout>
    <Project />
  </Layout>
);

export default View;
