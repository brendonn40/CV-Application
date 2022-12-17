import React from "react";
import Header from "./components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import Form from "./components/Form";
const App = () => {
  return (
    <ChakraProvider>
      <Header text={"CV Application"}></Header>

      <Form></Form>
    </ChakraProvider>
  );
};

export default App;
