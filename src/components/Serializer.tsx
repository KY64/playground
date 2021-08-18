import React from "react";

import {
  Blockquote,
  CodeBlock,
  Heading2,
  Heading3,
  Image,
  List
} from "@/components";

import { MDXProvider } from "@mdx-js/react";
import { Code, Heading, Link, Text } from "@chakra-ui/react";

const components = {
  a: Link,
  blockquote: Blockquote,
  code: CodeBlock,
  h1: Heading,
  h2: Heading2,
  h3: Heading3,
  img: Image,
  inlineCode: (props: any) => <Code colorScheme="blue" {...props} />,
  li: List,
  p: (props: any) => <Text margin="15px 0" {...props} />
};

const Serializer: React.FC = (props) => (
  <MDXProvider components={components}>{props.children}</MDXProvider>
);

export default Serializer;
