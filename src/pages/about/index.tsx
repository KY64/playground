import React from "react";

import Layout from "@/components/Layout";
import { MDXRemote } from "next-mdx-remote";
import Serializer from "@/components/Serializer";
import { serialize } from "next-mdx-remote/serialize";

import { Client } from "@/lib/cms";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";
import {
  Box,
  Grid,
  Heading,
  Link,
  SimpleGrid,
  Text,
  VStack
} from "@chakra-ui/react";

const About = (props: any) => {
  const cms = props.cms ? props.cms[0] : {};

  const default_interest = [
    {
      interest_name: "My interest"
    },
    {
      interest_name: "Yet-another interest"
    },
    {
      interest_name: "Yet-another interest"
    },
    {
      interest_name: "Yet-another interest"
    },
    {
      interest_name: "Yet-another interest"
    }
  ];

  const default_skill = [
    {
      skill_name: "My skill"
    },
    {
      skill_name: "Yet-another skill"
    },
    {
      skill_name: "Yet-another skill"
    },
    {
      skill_name: "Yet-another skill"
    },
    {
      skill_name: "Yet-another skill"
    }
  ];

  const data = {
    description: cms.data
      ? cms.data.description
      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Ultrices tincidunt arcu non sodales. Orci dapibus ultrices in iaculis nunc. A diam maecenas sed enim ut sem viverra. Lectus quam id leo in. Ac orci phasellus egestas tellus rutrum. Eget nulla facilisi etiam dignissim diam quis. Dui id ornare arcu odio ut sem nulla pharetra diam. Malesuada proin libero nunc consequat interdum varius sit. Viverra nibh cras pulvinar mattis nunc. Vitae aliquet nec ullamcorper sit amet risus nullam. Pretium aenean pharetra magna ac placerat vestibulum lectus. Feugiat nisl pretium fusce id velit ut. Luctus venenatis lectus magna fringilla. Purus ut faucibus pulvinar elementum. Congue quisque egestas diam in arcu cursus euismod quis viverra.",
    email: cms.data ? cms.data.email : "mail@hostmail.zz",
    greetings: cms.data ? RichText.asText(cms.data.greetings) : "Hi there",
    interest: cms.data ? cms.data.interest : default_interest,
    inviting: cms.data ? cms.data.inviting : "Reach me at",
    quotes: cms.data ? RichText.asText(cms.data.quotes) : "Go old-school",
    skill: cms.data ? cms.data.skill : default_skill
  };

  return (
    <Grid gridTemplateColumns="2fr 2fr" justifyItems="center" spacing={10}>
      <Box>
        <Heading as="h1" color={props.color.text.primary}>
          {data.greetings}
        </Heading>
        <Serializer>
          <Text
            color={props.color.text.primary}
            fontWeight="light"
            marginTop={4}
          >
            <MDXRemote {...data.description} />
          </Text>
        </Serializer>
        <Text
          color={props.color.text.primary}
          fontWeight="light"
          marginBottom={8}
        >
          {data.inviting}{" "}
          <Link href={`mailto:${data.email}`}> {data.email} </Link>
        </Text>
      </Box>
      <VStack alignItems="start">
        <Box>
          <Heading as="h3" fontSize="2xl" fontWeight="normal">
            Skill
          </Heading>
          <SimpleGrid columns={2} spacingX={8}>
            {data.skill.map((value: any, idx: number) => (
              <Text key={`skill-${idx}`}> {value.skill_name} </Text>
            ))}
          </SimpleGrid>
        </Box>
        <Box paddingY={2} />
        <Box>
          <Heading as="h3" fontSize="2xl" fontWeight="normal">
            Interest
          </Heading>
          {data.interest.map((value: any, idx: number) => (
            <Text key={`interest-${idx}`}> {value.interest_name} </Text>
          ))}
        </Box>
      </VStack>
    </Grid>
  );
};

const View = (props: any) => (
  <Layout marginX={[3, 32]}>
    <About cms={props.cms} />
  </Layout>
);

export const getStaticProps = async () => {
  const client = Client();
  const query = await client.query(
    Prismic.Predicates.at("document.type", "about"),
    { orderings: "[document.first_publication_date desc]" }
  );

  const cms = query.results;
  const mdx = await serialize(RichText.asText(cms[0].data.description));
  cms[0].data.description = mdx;

  return {
    props: {
      cms
    }
  };
};

export default View;
