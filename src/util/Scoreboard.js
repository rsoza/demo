import { Center, Box, Stack, Code } from "@chakra-ui/react";
import React from "react";

export const BreakerScoreBoard = ({ stopGame }) => {
  return (
    <div>
      <Box p={2} width="150px" bg={stopGame ? "transparent" : "orange.300"}>
        <Center>
          <Stack>
            <Code
            bg="transparent"

              fontSize="xx-large"
              color={stopGame ? "transparent" : "white"}
            >
              Breaker
            </Code>
            <Center>
              <Code
                fontSize="xx-large"
            bg="transparent"
                color={stopGame ? "transparent" : "white"}
              >
                0
              </Code>
            </Center>
          </Stack>
        </Center>
      </Box>
    </div>
  );
};

export const FixerScoreboard = ({ stopGame, playing }) => {
  return (
    <Box
      p={2}
      width="150px"
      bg={playing && !stopGame ? "transparent" : "blue.200"}
    >
      <Center>
        <Stack>
          <Code
            fontSize="xx-large"
            bg="transparent"
            color={playing && !stopGame ? "transparent" : "white"}
          >
            Fixer
          </Code>
          <Center>
            <Code
              fontSize="xx-large"
              bg="transparent"
              color={playing && !stopGame ? "transparent" : "white"}
            >
              0
            </Code>
          </Center>
        </Stack>
      </Center>
    </Box>
  );
};
