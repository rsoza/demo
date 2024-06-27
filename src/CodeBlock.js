import { motion } from "framer-motion";
import { Box, Button, Center, Code, Stack } from "@chakra-ui/react";
import TextDropdown from "./util/TextDropdown";
import {
  upper_static,
  edit_code,
  lower_static,
  cKeywords,
} from "./util/syntax";
import { useState } from "react";

function CodeBlock() {
  const [playing, setIsPlaying] = useState(false);
  return (
    <>
      <Box pt={10} pl={20}>
        {playing ? 
        
        <Button
        hsize="lg"
        height="48px"
        width="200px"
        border="2px"
        borderColor="red.500"
        colorScheme="red"
        onClick={()=> setIsPlaying(!playing)}
        >
          STOP
        </Button>
        :
        <Button
        hsize="lg"
        height="48px"
        width="200px"
        border="2px"
        borderColor="green"
        colorScheme="green"
        onClick={()=> setIsPlaying(!playing)}
        >
          PLAY
        </Button>
    }
      </Box>
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
                {playing ?
                 <TextDropdown code={edit_code} triggerWords={cKeywords} />
                 :
                 edit_code
                }
              </Code>
              <Code bg="transparent" whiteSpace="pre" fontSize={18}>
                {lower_static}
              </Code>
            </Stack>
          </motion.div>
        </Center>
      </Box>
    </>
  );
}

export default CodeBlock;
