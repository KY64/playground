import React from "react";

import Layout from "@/components/Layout";

import { Client } from "@/lib/cms";
import NextImage from "next/image";
import NextLink from "next/link";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";
import { createSummary } from "@/lib/utils";
import { Box, Center, Heading, Link, SimpleGrid, Text } from "@chakra-ui/react";

import type { ColorProps } from "@/styles/theme/color";

interface PostProps {
  image: string;
  summary: string;
  title: string;
}

const Blog = (props: any) => {
  return (
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
        {props.cms.map((content: any, idx: number) => (
          <NextLink href={`/blog/${content.uid}`} key={`blog-${idx}`}>
            <Link
              _hover={{ textDecoration: "none" }}
              color={props.color.text.primary}
            >
              <Post
                color={props.color}
                image={content.data.cover.url}
                summary={createSummary(
                  RichText.asText(content.data.description)
                )}
                title={RichText.asText(content.data.title)}
              />
            </Link>
          </NextLink>
        ))}
      </SimpleGrid>
    </>
  );
};

const Post = (props: ColorProps & PostProps) => (
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
      {props.title}
    </Heading>
    <Center marginY={3}>
      <NextImage className="img" height={540} src={props.image} width={960} />
    </Center>
    <Text fontSize="sm" lineHeight="1.15" textAlign="justify">
      {props.summary}
      <Text as="span" color={props.color.contrast.color} fontWeight="bold">
        Read More
      </Text>
    </Text>
  </Box>
);

const View = (props: any) => (
  <Layout>
    <Blog {...props} />
  </Layout>
);

// TODO:
// Change to useSWR for immediate update recent post
export const getStaticProps = async () => {
  const client = Client();
  const post = await client.query(
    Prismic.Predicates.at("document.type", "post"),
    { orderings: "[document.first_publication_date desc]", pageSize: 10 }
  );

  let cms = post.results;

  return {
    props: {
      cms
    },
    revalidate: 60
  };
};

export default View;
