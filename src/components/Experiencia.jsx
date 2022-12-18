import React from "react";
import { Input,Flex } from "@chakra-ui/react";

const Experiencia = () => {
  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gridGap={"5px"}
    >
      <Input
        name='company'
        type='text'
        placeholder='Nome da empresa'
        isRequired={true}
        backgroundColor={"white"}
        padding='10px'
        width={"95%"}
      />
      <Input
        name='position'
        placeholder='Cargo'
        type='text'
        isRequired={true}
        backgroundColor={"white"}
        padding='10px'
        width={"95%"}
      />

      <Input
        name='beginDate'
        placeholder='Data de inicio'
        type='date'
        isRequired={true}
        backgroundColor={"white"}
        padding='10px'
        width={"95%"}
      />
      <Input
        name='endDate'
        placeholder='Data de saida'
        type='date'
        backgroundColor={"white"}
        padding='10px'
        width={"95%"}
      />
      
    </Flex>
  );
};
export default Experiencia;
