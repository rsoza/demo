import { Box, Button, Center, Code, Stack, Text } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import BreakerTurn from "./util/TextDropdown";
import FixerTurn from "./util/FixerTurn";
import { motion } from "framer-motion";
import {
  upper_static,
  edit_code,
  lower_static,
  cKeywords,
} from "./util/syntax";
import { useState } from "react";


/* 
Sequence of game LOGIC::

playing -> false -> PLAY -> true -> STOP button appears
stopGame -> false -> STOP -> true -> FIX CODE button appears
fixerStart -> false -> FIX CODE -> true -> TIMER appears


*/

function CodeBlock({playing, setIsPlaying, stopGame, setStop}) {
  const [copy_code, setCopyCode] = useState("");
  const [showUnitTest, setShowUnitTest] = useState(false);
  const [resetSelected, setResetSelected] = useState(false);
  const [moveCount, setMoveCount] = useState(3);
  const [fixerStart, setFixerTime] = useState(false);

  const resetCode = () => {
    setResetSelected(!resetSelected);
    setIsPlaying(false);
    setMoveCount(3);
  };

  const handleStop = () => {
    setStop(true);
  };

  return (
    <>
        <Stack pt={2}>
          <Center>
          {playing && !stopGame? (
            <Stack direction="row" spacing={2}>
              <Button
                hsize="lg"
                height="48px"
                width="200px"
                border="2px"
                borderColor="red.500"
                colorScheme="red"
                onClick={() => handleStop()}
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
          ) : stopGame && !fixerStart ?
          (
            <Button
            hsize="lg"
            height="48px"
            width="200px"
            border="2px"
            borderColor="skyblue"
            colorScheme="blue"
            onClick={() => setFixerTime(true)}
            >
              FIX CODE
            </Button>
          ) : !playing ? (
            <Button
            hsize="lg"
            height="48px"
            width="200px"
            border="2px"
            borderColor="green"
            colorScheme="green"
            onClick={() => setIsPlaying(true)}
            >
              PLAY
            </Button>
          ):
          (
            <Button
                hsize="lg"
                height="48px"
                width="200px"
                colorScheme="blue"
                variant="flushed"
                cursor="default"
                >
                TIMER
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
                    pb={2}
                  >
                    {(playing && !stopGame) ? (
                      <BreakerTurn
                        code={edit_code}
                        triggerWords={cKeywords}
                        setMoveCount={setMoveCount}
                        moveCount={moveCount}
                        setCopyCode={setCopyCode}
                      />
                    ) : (stopGame && !fixerStart) ? (
                      <Center>
                        <Text fontSize={20} fontWeight="bold" p={2}>
                      Are you ready to fix the code?
                        </Text>
                      </Center>
                    ) : !playing ? (
                      edit_code
                    ): (
                      <FixerTurn />
                    )
                    }
                  </Code>
                  {showUnitTest ? (
                    <>
                    <Box>
                      <Code
                      bg="transparent"
                      whiteSpace="pre-wrap"
                      onClick={() => setShowUnitTest(!showUnitTest)}
                      overflowWrap="break-word"
                      color="grey"
                      >
                        {lower_static}
                      </Code>
                        </Box>
                    </>
                  ) : (
                    <>
                      <Code bg="transparent" whiteSpace="pre" color="grey">
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
