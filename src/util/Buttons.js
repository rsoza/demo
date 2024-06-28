import { Button, Center, Stack } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import React, {useState} from "react";

/* 
Sequence of game LOGIC::

playing -> false -> PLAY -> true -> STOP button appears
stopGame -> false -> STOP -> true -> FIX CODE button appears
fixerStart -> false -> FIX CODE -> true -> TIMER appears


*/

function CustomButtons({
  playing,
  stopGame,
  handleStop,
  moveCount,
  resetCode,
  fixerStart,
  setFixerTime,
  setIsPlaying,
}) {
  const [time, setTime] = useState(0);

  const timer = () => {
    setFixerTime(true);
    
 
  };

  return (
    <Center>
      {playing && !stopGame ? (
        <Stack direction="row" spacing={2}>
          <Button
            hsize="lg"
            height="48px"
            width="200px"
            border="2px"
            borderColor="red"
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
      ) : stopGame && !fixerStart ? (
        <Button
          hsize="lg"
          height="48px"
          width="200px"
          border="2px"
          borderColor="green"
          colorScheme="green"
          onClick={timer}
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
      ) : (
        <Button
          hsize="lg"
          height="48px"
          width="200px"
          colorScheme="blue"
          variant="flushed"
          cursor="default"
        >
          {time}
        </Button>
      )}
    </Center>
  );
}

export default CustomButtons;
