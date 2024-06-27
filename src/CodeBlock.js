import { motion } from "framer-motion";
import { Box, Center, Code, Stack } from "@chakra-ui/react";
import TextDropdown from "./util/TextDropdown";
import { upper_static, edit_code, lower_static, cKeywords } from "./util/syntax";

function CodeBlock() {

  return (
    <Box>
      <Center>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
        >
          <Stack>
            <Code bg="transparent" whiteSpace="pre" fontSize={18}>
              {upper_static}
            </Code>
            <Code
              bg="transparent"
              whiteSpace="pre"
              fontSize={18}
              border="dotted"
              borderColor="gainsboro"
              pb={3}
            >
              <TextDropdown code={edit_code} triggerWords={cKeywords} />
            </Code>
            <Code bg="transparent" whiteSpace="pre" fontSize={18}>
              {lower_static}
            </Code>
          </Stack>
        </motion.div>
      </Center>
    </Box>
  );
}

export default CodeBlock;
