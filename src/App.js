import {
  Center,
  ChakraProvider,
  Flex,
  Text,
  Box,
  Stack,
} from "@chakra-ui/react";
import CodeBlock from "./CodeBlock";
import React from "react";
import "./App.css";

function App() {
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
            <Box heigh={48} width="100%" bg="orange">
              <Center>Breaker {<br></br>}0</Center>
            </Box>
            <Box heigh={48} width="100%" bg="skyblue">
              <Center>Fixer {<br></br>}0</Center>
            </Box>
          </Stack>
        </Center>
        <Box>
            <CodeBlock />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
