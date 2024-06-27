import * as React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import CodeBlock from "./CodeBlock";

function App() {
  return (
    <ChakraProvider>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gap="1"
        color="blackAlpha.700"
        // fontWeight="bold"
      >
        <GridItem pl="2" bg="black" area={"header"}>
          <CodeBlock />
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          Nav
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"main"}>
          Main
        </GridItem>
        <GridItem pl="200" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
