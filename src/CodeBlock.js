import { Box, Button, Center, Code, Stack } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import TextDropdown from "./util/TextDropdown";
import { motion } from "framer-motion";
import {
  upper_static,
  edit_code,
  lower_static,
  cKeywords,
} from "./util/syntax";
import { useState } from "react";

function CodeBlock({playing, setIsPlaying}) {
  const [showUnitTest, setShowUnitTest] = useState(false);
  const [resetSelected, setResetSelected] = useState(false);
  const [moveCount, setMoveCount] = useState(3);

  const resetCode = () => {
    setResetSelected(!resetSelected);
    setIsPlaying(false);
    setMoveCount(3);
  };

  return (
    <>
        <Stack pt={2}>
          <Center>
          {playing ? (
            <Stack direction="row" spacing={2}>
              <Button
                hsize="lg"
                height="48px"
                width="200px"
                border="2px"
                borderColor="red.500"
                colorScheme="red"
                onClick={() => {setIsPlaying(!playing)}}
                >
                STOP
              </Button>
              <Button
                hsize="lg"
                height="48px"
                width="200px"
                colorScheme="blue"
                variant="flushed"
                cursor="default"
                >
                {moveCount} MOVES LEFT
              </Button>
              {moveCount < 3 && (
                <Button onClick={() => resetCode()}>
                  <RepeatIcon size="x-large" />
                </Button>
              )}
            </Stack>
          ) : (
            <Button
            hsize="lg"
            height="48px"
            width="200px"
            border="2px"
            borderColor="green"
            colorScheme="green"
            onClick={() => setIsPlaying(!playing)}
            >
              PLAY
            </Button>
          )}
          </Center>
          <Box>
            <Center>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
              >
                <Stack>
                  <Code bg="transparent" whiteSpace="pre">
                    {upper_static}
                  </Code>
                  <Code
                    bg="transparent"
                    whiteSpace="pre"
                    border="dotted"
                    borderColor="gainsboro"
                    pb={3}
                  >
                    {playing ? (
                      <TextDropdown
                        code={edit_code}
                        triggerWords={cKeywords}
                        setMoveCount={setMoveCount}
                        moveCount={moveCount}
                      />
                    ) : (
                      edit_code
                    )}
                  </Code>
                  {showUnitTest ? (
                    <>
                    <Box>
                      <Code
                      bg="transparent"
                      whiteSpace="pre-wrap"
                      onClick={() => setShowUnitTest(!showUnitTest)}
                      overflowWrap="break-word"
                      >
                        {lower_static}
                      </Code>
                        </Box>
                    </>
                  ) : (
                    <>
                      <Code bg="transparent" whiteSpace="pre">
                        {lower_static.substring(0, 100)}
                      </Code>
                      <Center>
                        <Button
                          variant="transparent"
                          color="blue"
                          onClick={() => setShowUnitTest(!showUnitTest)}
                        >
                          Show Unit Test
                        </Button>
                      </Center>
                    </>
                  )}
                </Stack>
              </motion.div>
            </Center>
          </Box>
        </Stack>
    </>
  );
}

export default CodeBlock;
