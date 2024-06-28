import { Center, ChakraProvider, Box, Stack, Code } from "@chakra-ui/react";
import CodeBlock from "./CodeBlock";
import React, { useState } from "react";
import { BreakerScoreBoard, FixerScoreboard } from "./util/Scoreboard";

function App() {
  const [playing, setIsPlaying] = useState(false);
  const [stopGame, setStop] = useState(false);

  return (
    <ChakraProvider>
      <Center>
        <Code
          bg="transparent"
          fontSize="x-large"
          color="blue"
        >
          Scoreboard
        </Code>
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
