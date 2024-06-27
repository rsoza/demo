import { motion } from "framer-motion";
import { Box, Center, Code, Select, Stack } from "@chakra-ui/react";
import TextDropdown from "./util/TextDropdown";
import { upper_static, edit_code, lower_static } from "./util/syntax";

function CodeBlock() {
  

  const generateCodeLines = () => {
    const codeLines = [];
    const edit = edit_code.split(" ");
    for (let i = 0; i < 15; i++) {
    }
    return (
      <>
        <Select variant='unstyled' icon="transparent" placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </>
    );
  };

  const codeWithLoop = generateCodeLines();
  const triggerWords = ["int", "left", "if ("];

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
            <Code bg="transparent" whiteSpace="pre" fontSize={18}>
              <TextDropdown code={edit_code} triggerWords={triggerWords} />
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
