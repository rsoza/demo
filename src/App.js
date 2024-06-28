import { Center, ChakraProvider, Text, Box, Stack } from "@chakra-ui/react";
import CodeBlock from "./CodeBlock";
import React, { useState } from "react";
import { BreakerScoreBoard, FixerScoreboard } from "./util/components";

function App() {
  const [playing, setIsPlaying] = useState(false);
  const [stopGame, setStop] = useState(false);

  return (
    <ChakraProvider>
          <Center>
            <Text fontSize="x-large" fontWeight="bold">
              Scoreboard
            </Text>
          </Center>

          <Center>
            <Stack direction="row">
              <BreakerScoreBoard stopGame={stopGame} />
              <FixerScoreboard playing={playing} stopGame={stopGame} />
            </Stack>
          </Center>

          <Box p={10}>
            <CodeBlock
              setIsPlaying={setIsPlaying}
              playing={playing}
              stopGame={stopGame}
              setStop={setStop}
            />
          </Box>
    </ChakraProvider>
  );
}

export default App;
