import React from "react";

import Layout from "@/components/Layout";
import Serializer from "@/components/Serializer";

import { Client } from "@/lib/cms";
import { MDXRemote } from "next-mdx-remote";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";
import { serialize } from "next-mdx-remote/serialize";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

const Page = (props: any) => {
  return (
    <>
      <Heading as="h1" color={props.color.text.primary} textAlign="center">
        {RichText.asText(props.post.data.title)}
      </Heading>
      <Heading
        as="h2"
        color={props.color.text.primary}
        fontSize="md"
        fontWeight="light"
        marginBottom={8}
        marginTop={4}
        textAlign="center"
      >
        {RichText.asText(props.post.data.subtitle)}
      </Heading>
      <SimpleGrid templateColumns="repeat(3, minmax(auto, 55%))">
        <Box />
        <Box>
          <Serializer>
            <MDXRemote {...props.mdxSource} />
          </Serializer>
        </Box>
        <Box />
      </SimpleGrid>
    </>
  );
};

const View = (props: any) => (
  <Layout>
    <Page {...props} />
  </Layout>
);

export const getStaticProps = async (props: any) => {
  const client = Client();
  const post = await client.getByUID("post", props.params.uid, {});
  const mdxSource = await serialize(RichText.asText(post.data.markdown));
  return {
    props: { mdxSource, post }
  };
};

export const getStaticPaths = async () => {
  const client = Client();
  const source = await client.query(
    Prismic.Predicates.at("document.type", "post"),
    { orderings: "[document.first_publication_date desc]" }
  );
  const paths = source.results.map((post: any) => {
    let slug = post.uid;
    return `/blog/${slug}`;
  });

  return { paths, fallback: false };
};

export default View;
