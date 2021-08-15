import React from "react";

import { Box, HStack, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { FaGithub, FaMedium } from "react-icons/fa";

import type { ColorProps } from "@/styles/theme/color";

type PropType = ColorProps & {
  height: number;
  iconColor: string;
  padding: number;
  spacing: number;
  width: number;
};

const Foobar = (props: PropType) => {
  return (
    <SimpleGrid
      as="footer"
      bottom={0}
      color={props.iconColor}
      columns={3}
      left={0}
      padding={props.padding}
      paddingBottom={5}
      position="absolute"
      right={0}
      spacing={props.spacing}
      zIndex={100}
    >
      <Box marginBottom={-5}>
        <Text cursor="grab" display="inline" fontSize="xl">
          {/* Let it rest here */}
          🐱
        </Text>
      </Box>
      <HStack
        color={props.iconColor}
        fontSize="3xl"
        justifyContent="center"
        justifySelf="center"
        spacing={props.spacing}
      >
        <Link
          color={props.iconColor}
          href="https://github.com/ky64"
          target="_blank"
        >
          <FaGithub style={{ height: props.height, width: props.width }} />
        </Link>
        <Link
          color={props.iconColor}
          href="https://medium.com/@kimiyukiyukawa"
          target="_blank"
        >
          <FaMedium style={{ height: props.height, width: props.width }} />
        </Link>
        <Link href="https://able.bio/KY64" target="_blank">
          {/* Able Bio SVG */}
          <Box
            as="svg"
            height={props.height}
            id="able-bio-svg"
            version="1.1"
            viewBox="0 0 135.46666 135.46667"
            width={props.width}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs id="defs15438" />
            <g id="layer1" transform="translate(-159.60962,-72.005766)">
              <g
                id="g59886"
                style={{ display: "inline", stroke: props.iconColor }}
                transform="matrix(4.5822647,0,0,4.5822647,-1372.6638,-774.19979)"
              >
                <rect
                  height="28.292946"
                  id="rect57661"
                  style={{
                    fill: "none",
                    fillOpacity: 1,
                    opacity: "1",
                    stroke: props.iconColor,
                    strokeDasharray: "none",
                    strokeMiterlimit: 4,
                    strokeOpacity: 1,
                    strokeWidth: 1.38509
                  }}
                  width="28.292946"
                  x="334.9696"
                  y="185.24713"
                />
                <text
                  id="text59123"
                  style={{
                    fill: props.iconColor,
                    fillOpacity: 1,
                    fontFamily: "sans-serif",
                    fontSize: "16.5508px",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    lineHeight: "1.25",
                    stroke: props.iconColor,
                    strokeWidth: "0.413771"
                  }}
                  x="343.45908"
                  xmlSpace="preserve"
                  y="205.42641"
                >
                  <tspan
                    id="tspan59121"
                    style={{
                      fill: props.iconColor,
                      stroke: props.iconColor,
                      strokeWidth: 0.413771
                    }}
                    x="343.45908"
                    y="205.42641"
                  >
                    A
                  </tspan>
                </text>
              </g>
            </g>
          </Box>
        </Link>
      </HStack>
      <Link
        alignSelf="center"
        fontSize="sm"
        href="https://github.com/KY64/playground"
        justifySelf="end"
        target="_blank"
      >
        View source
      </Link>
    </SimpleGrid>
  );
};

export default Foobar;
