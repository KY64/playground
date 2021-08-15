import React from "react";

import Layout from "@/components/Layout";

import NextImage from "next/image";
import { Box, Button, Grid, Heading, Link, Text } from "@chakra-ui/react";

const Home = (props: any) => {
  return (
    <>
      <Grid
        gridColumnGap={14}
        marginTop={8}
        marginX={32}
        templateColumns="1.5fr 3fr"
      >
        <Box justifySelf="end">
          <NextImage
            alt="some random image"
            className="rounded"
            height={200}
            src="https://picsum.photos/200"
            width={200}
          />
        </Box>
        <Box width="32rem">
          <Heading as="h1" color={props.color.text.primary} fontWeight="light">
            Hi, I'm Nobody
          </Heading>
          <Heading as="h2" color={props.color.text.secondary}>
            Software Developer
          </Heading>
          <Text fontSize="xl">
            I enjoy doing web development and learning new stuffs.
            <br />I use Javascript, Python and Shell script for development.
          </Text>
          <Text fontSize="xl">
            Reach me at &nbsp;
            <Link href="mailto:exceldaris@tuta.io">mail@hostmail.io</Link>
          </Text>
          <Button
            _hover={{ background: props.color.contrast.hover }}
            as="a"
            bg={props.color.contrast.color}
            borderRadius="none"
            color={props.color.contrast.inverted}
            fontSize="xl"
            fontStyle="italic"
            fontWeight="light"
            href="https://www.linkedin.com/in/excel-d-515b391a5/"
            marginTop={6}
            padding={6}
            target="_blank"
          >
            I'm open to work
          </Button>
        </Box>
      </Grid>
    </>
  );
};

const View = () => (
  <Layout>
    <Home />
  </Layout>
);

export default View;
