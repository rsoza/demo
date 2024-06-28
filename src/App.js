import { Center, ChakraProvider, Text, Box, Stack } from "@chakra-ui/react";
import CodeBlock from "./CodeBlock";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [playing, setIsPlaying] = useState(false);
  return (
    <ChakraProvider>
      <Box width="100%">
        <Center>
          <Text fontSize="x-large" fontWeight="bold">
            Scoreboard
          </Text>
        </Center>
        <Center>
          <Stack direction="row" width="100%">
            <Box p={2} width="100%" bg="orange">
              <Center>
                <Text color="white">

                Breaker {<br></br>}0
                </Text>
                </Center>
            </Box>
            <Box p={2} width="100%" bg={playing ? "transparent" : "skyblue"}>
              <Center>
                <Text color={playing ? "transparent" : "white"}>Fixer {<br></br>}0</Text>
              </Center>
            </Box>
          </Stack>
        </Center>
        <Box p={10}>
          <CodeBlock setIsPlaying={setIsPlaying} playing={playing} />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
