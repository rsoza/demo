import { Center, Text, Box, Stack } from "@chakra-ui/react";
import React from "react";

export const BreakerScoreBoard = ({ stopGame }) => {
  return (
    <div>
      <Box p={2} width="150px" bg={stopGame ? "transparent" : "orange"}>
        <Center>
          <Stack>
            <Text
              fontSize="xx-large"
              color={stopGame ? "transparent" : "white"}
            >
              Breaker
            </Text>
            <Center>
              <Text
                fontSize="xx-large"
                color={stopGame ? "transparent" : "white"}
              >
                0
              </Text>
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
      bg={playing && !stopGame ? "transparent" : "skyblue"}
    >
      <Center>
        <Stack>
          <Text
            fontSize="xx-large"
            color={playing && !stopGame ? "transparent" : "white"}
          >
            Fixer
          </Text>
          <Center>
            <Text
              fontSize="xx-large"
              color={playing && !stopGame ? "transparent" : "white"}
            >
              0
            </Text>
          </Center>
        </Stack>
      </Center>
    </Box>
  );
};
