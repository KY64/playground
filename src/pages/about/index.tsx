import React from "react";

import Layout from "@/components/Layout";

import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";

const About = (props: any) => (
  <Grid gridTemplateColumns="2fr 2fr" justifyItems="center" spacing={10}>
    <Box>
      <Heading as="h1" color={props.color.text.primary}>
        Hi there
      </Heading>
      <Text
        color={props.color.text.primary}
        fontWeight="light"
        marginBottom={8}
        marginTop={4}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo sed
        egestas egestas fringilla. Quisque id diam vel quam. Quam viverra orci
        sagittis eu volutpat. Risus at ultrices mi tempus imperdiet nulla
        malesuada pellentesque. Neque laoreet suspendisse interdum consectetur.
        <br />
        <br />
        Aliquam faucibus purus in massa tempor nec feugiat nisl pretium.
        Sagittis id consectetur purus ut faucibus. Ultricies mi eget mauris
        pharetra et. Quis viverra nibh cras pulvinar mattis nunc. Eget mi proin
        sed libero enim sed faucibus turpis. Proin fermentum leo vel orci porta
        non. Dictum sit amet justo donec enim diam. Nunc sed augue lacus viverra
        vitae congue eu.
      </Text>
    </Box>
    <VStack alignItems="start">
      <Box>
        <Heading as="h3" fontSize="2xl" fontWeight="normal">
          Skill
        </Heading>
        <Text>My skill</Text>
        <Text>Yet-another skill</Text>
        <Text>Yet-another skill</Text>
        <Text>Yet-another skill</Text>
        <Text>Yet-another skill</Text>
        <Text>Yet-another skill</Text>
      </Box>
      <Box paddingY={2} />
      <Box>
        <Heading as="h3" fontSize="2xl" fontWeight="normal">
          Interest
        </Heading>
        <Text>My interest</Text>
        <Text>Yet-another interest</Text>
        <Text>Yet-another interest</Text>
        <Text>Yet-another interest</Text>
        <Text>Yet-another interest</Text>
        <Text>Yet-another interest</Text>
      </Box>
    </VStack>
  </Grid>
);

const View = () => (
  <Layout marginX={[3, 32]}>
    <About />
  </Layout>
);

export default View;
