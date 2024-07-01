import React from "react";
import { motion } from "framer-motion";

/* 
Sequence of game LOGIC::

playing -> false -> PLAY -> true -> STOP motion.button appears
stopGame -> false -> STOP -> true -> FIX CODE button appears
fixerStart -> false -> FIX CODE -> true -> TIMER appears


*/

function CustomButtons({
  playing,
  stopGame,
  handleStop,
  moveCount,
  fixerStart,
  setFixerTime,
  setIsPlaying,
}) {
  return (
    <div>
      {playing && !stopGame ? (
        <div id="stack">
          <motion.button
            className="button"
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{
              scale: 0.9,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            whileTap={{ scale: 1 }}
            onClick={() => handleStop()}
          >
            LOCK
          </motion.button>
          {moveCount < 3 && (
            <motion.button
              className="button"
              whileHover={{
                scale: 0.9,
              }}
              whileTap={{ scale: 1 }}
              onClick={() => window.location.reload()}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 1,
              }}
            >
              Start Over
            </motion.button>
          )}
          <motion.div
            className="button"
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 2,
            }}
          >
            {moveCount} MOVES LEFT
          </motion.div>
        </div>
      ) : stopGame && !fixerStart ? (
        <motion.button className="button">FIX CODE</motion.button>
      ) : !playing ? (
        <motion.button
          className="button"
          initial={{
            rotate: -25,
            opacity: 0.5,
          }}
          animate={{
            rotate: 25,
            opacity: 1,
          }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
            duration: 2,
          }}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9, opacity: 0, duration: 2 }}
          onClick={() => {
            setTimeout(() => {
              setIsPlaying(true);
            }, "200");
          }}
        >
          PLAY
        </motion.button>
      ) : (
        <motion.button>TIMER</motion.button>
      )}
    </div>
  );
}

export default CustomButtons;
