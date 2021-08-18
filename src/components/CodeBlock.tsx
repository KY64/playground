import React from "react";

import { Box } from "@chakra-ui/react";
import theme from "prism-react-renderer/themes/oceanicNext";
import Highlight, { defaultProps } from "prism-react-renderer";

const CodeBlock = (props: any) => {
  const language = props.className.replace(/language-/, "");
  return (
    <Box marginY={4}>
      <Highlight
        {...defaultProps}
        code={props.children.trim()}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{
              ...style,
              borderRadius: "12px",
              overflow: "auto",
              padding: "20px"
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ key: i, line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ key, token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
  );
};

export default CodeBlock;
