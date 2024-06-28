import { Box, Button, Center, Code, Stack, Text } from "@chakra-ui/react";
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
import CustomButtons from "./util/Buttons";

function CodeBlock({ playing, setIsPlaying, stopGame, setStop }) {
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
    console.log("pass code to fixer turn", copy_code);
  };

  return (
    <>
      <Stack pt={2}>
        <CustomButtons
          playing={playing}
          stopGame={stopGame}
          handleStop={handleStop}
          moveCount={moveCount}
          resetCode={resetCode}
          fixerStart={fixerStart}
          setFixerTime={setFixerTime}
          setIsPlaying={setIsPlaying}
        />
        <Box>
          <Center>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
            >
              <Stack>
                <Code bg="transparent" whiteSpace="pre" color="grey">
                  {upper_static}
                </Code>
                <Code
                  bg="transparent"
                  whiteSpace="pre"
                  border="dotted"
                  borderColor="grey"
                  pb={2}
                >
                  {playing && !stopGame ? (
                    <BreakerTurn
                      code={edit_code}
                      triggerWords={cKeywords}
                      setMoveCount={setMoveCount}
                      moveCount={moveCount}
                      setCopyCode={setCopyCode}
                    />
                  ) : stopGame && !fixerStart ? (
                    <Center>
                      <Text fontSize={20} fontWeight="bold" p={2}>
                        Are you ready to fix the code?
                      </Text>
                    </Center>
                  ) : !playing ? (
                    edit_code
                  ) : (
                    <FixerTurn />
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
