import { Box, Image, Text } from "@chakra-ui/react";

const Img = (props: any) => (
  <>
    {props.caption ? (
      <Box margin="20px 0" textAlign="center">
        <Image width="100%" {...props} />
        <Text fontSize="sm" marginTop="8px">
          {props["caption"]}
        </Text>
      </Box>
    ) : (
      <Image margin="20px 0" width="100%" {...props} />
    )}
  </>
);

export default Img;
