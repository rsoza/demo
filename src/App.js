import * as React from "react";
import "./App.css";
import { Center, ChakraProvider } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import CodeBlock from "./CodeBlock";

function App() {
  return (
    <ChakraProvider>
      <Grid
        templateAreas={`"header header"
                  "main main"
                  "nav footer"`}
        gap="1"
        width="100%"
        color="blackAlpha.700"
        // fontWeight="bold"
      >
        <GridItem pl="2" area={"header"}>
          <CodeBlock />
        </GridItem>
        <GridItem pl="2" bg="red" area={"nav"}>
          <Center>Breaker {<br></br>}0</Center>
        </GridItem>
        <GridItem pl="2" area={"main"}>
          <Center>Scoreboard</Center>
        </GridItem>
        <GridItem pl="20" bg="blue.300" area={"footer"}>
          <Center>Fixer {<br></br>}0</Center>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
