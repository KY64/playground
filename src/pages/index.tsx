import React from "react";

import Layout from "@/components/Layout";

import { Client } from "@/lib/cms";
import NextImage from "next/image";
import Prismic from "@prismicio/client";
import { useMobileView } from "@/lib/utils";
import { Box, Button, Grid, Heading, Link, Text } from "@chakra-ui/react";
import { Link as PrismicLink, RichText } from "prismic-reactjs";

// TODO:
// Create types for API response
const Home = (props: any) => {
  /* It uses any type since ApiSearchResponse interface
   * from Prismic can only be used privately
   * https://github.com/prismicio/prismic-javascript/blob/c4491113b5e11f15f8632fe100dd20da8b2db894/src/ApiSearchResponse.ts#L3-L12
   */

  const cms: any = props.cms ? props.cms[0] : {};
  let placeholder_picture = "https://picsum.photos/id/1074/400";

  const data = {
    about: cms.data
      ? cms.data.about
      : "A short description about the owner of the website",
    button: cms.data ? cms.data.button : "Button text",
    button_link: cms.data ? PrismicLink.url(cms.data.button_link) : "#",
    email: cms.data ? cms.data.email : "mail@hostmail.zz",
    greetings: cms.data
      ? RichText.asText(cms.data.greetings)
      : "Hi, I'm Nobody",
    inviting: cms.data ? cms.data.inviting : "Reach me at",
    profile_picture: cms.data
      ? PrismicLink.url(cms.data.profile_picture)
      : placeholder_picture,
    role: cms.data ? RichText.asText(cms.data.role) : "Untitled Developer"
  };

  return (
    <>
      <Grid
        gridColumnGap={useMobileView() ? 0 : 14}
        marginTop={useMobileView() ? 0 : 8}
        marginX={useMobileView() ? 0 : 32}
        templateColumns={useMobileView() ? "" : "1.5fr 3fr"}
      >
        <Box justifySelf={useMobileView() ? "center" : "end"}>
          {useMobileView() ? (
            <NextImage
              alt="Profile picture"
              className="rounded"
              height={200}
              src={data.profile_picture}
              width={200}
            />
          ) : (
            <NextImage
              alt="Profile picture"
              className="rounded"
              height={200}
              src={data.profile_picture}
              width={200}
            />
          )}
        </Box>
        <Box
          justifySelf={useMobileView() ? "center" : "left"}
          textAlign={useMobileView() ? "center" : "left"}
          width={useMobileView() ? "initial" : "32rem"}
        >
          <Heading as="h1" color={props.color.text.primary} fontWeight="light">
            {data.greetings}
          </Heading>
          <Heading as="h2" color={props.color.text.secondary}>
            {data.role}
          </Heading>
          <Text fontSize="xl">{data.about}</Text>
          <Text fontSize="xl">
            {data.inviting}
            &nbsp;
            <Link href={`mailto:${data.email}`}>{data.email}</Link>
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
            href={data.button_link}
            marginTop={6}
            padding={6}
            target="_blank"
          >
            {data.button}
          </Button>
        </Box>
      </Grid>
    </>
  );
};

const View = (props: any) => {
  return (
    <Layout>
      <Home {...props} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const client = Client();
  const query = await client.query(
    Prismic.Predicates.at("document.type", "introduction"),
    { orderings: "[document.first_publication_date desc]" }
  );

  const cms = query.results;

  return {
    props: {
      cms
    },
    revalidate: 60
  };
};

export default View;
