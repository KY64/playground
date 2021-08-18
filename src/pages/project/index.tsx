import React, { useState } from "react";

import Layout from "@/components/Layout";

import { Client } from "@/lib/cms";
import NextImage from "next/image";
import Prismic from "@prismicio/client";
import {
  Box,
  Link as ChakraLink,
  Heading,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import { Link, RichText } from "prismic-reactjs";

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
      {props.cms.map((result: any, idx: number) => (
        <ChakraLink
          href={Link.url(result.data.repository)}
          key={`project-${idx}`}
          target="_blank"
        >
          <Card
            description={RichText.asText(result.data.description)}
            image={Link.url(result.data.image)}
            project_name={RichText.asText(result.data.project_name)}
            {...props}
          />
        </ChakraLink>
      ))}
    </SimpleGrid>
  </>
);

const Card = (props: any) => {
  const [mouseOver, setMouseOver] = useState<boolean>(false);
  return (
    <Box
      _hover={{ background: props.color.contrast.color, cursor: "pointer" }}
      borderColor={props.color.contrast.color}
      borderWidth={2}
      display="relative"
      height="max-content"
      onMouseLeave={() => setMouseOver(false)}
      onMouseOver={() => setMouseOver(true)}
      padding={4}
      position="relative"
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
        {props.project_name}
      </Heading>
      <Box paddingRight={2} position="absolute">
        <Text
          color={props.color.contrast.inverted}
          display="relative"
          fontSize="sm"
          marginTop={2}
          opacity={mouseOver ? 1 : 0.001}
        >
          {props.description}
        </Text>
      </Box>
      <Box marginTop={4}>
        <NextImage
          className="behind"
          height={360}
          src={props.image}
          width={640}
        />
      </Box>
    </Box>
  );
};

const View = (props: any) => (
  <Layout>
    <Project {...props} />
  </Layout>
);

export const getStaticProps = async () => {
  const client = Client();
  const query = await client.query(
    Prismic.Predicates.at("document.type", "project"),
    { orderings: "[document.first_publication_date desc]" }
  );

  let cms = query.results;

  return {
    props: {
      cms
    },
    revalidate: 60
  };
};

export default View;
