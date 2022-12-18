import React from "react";
import { Input, Select, Text, FormLabel, Flex } from "@chakra-ui/react";

const Formacao = () => {
  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gridGap={"5px"}
    >
      <Input
        name='course'
        type='text'
        placeholder='Nome do curso'
        isRequired={true}
        backgroundColor={"white"}
        padding='10px'
        width={"95%"}
      />
      <Input
        name='institution'
        placeholder='Instituição'
        type='text'
        isRequired={true}
        backgroundColor={"white"}
        padding='10px'
        width={"95%"}
      />

      <Input
        name='initialYear'
        placeholder='Ano de inicio'
        type='number'
        min='1970'
        max='2099'
        isRequired={true}
        backgroundColor={"white"}
        padding='10px'
        width={"95%"}
      />
      <Input
        name='conclusionYear'
        placeholder='Ano de conclusão(deixe vazio se ainda estiver cursando).'
        type='text'
        backgroundColor={"white"}
        padding='10px'
        width={"95%"}
      />
      <Select
        placeholder='Tipo de curso'
        isRequired={true}
        backgroundColor={"white"}
        width={"95%"}
      >
        <option value='0'>Ensino fundamental</option>
        <option value='1'>Ensino médio </option>
        <option value='2'>Graduação</option>
        <option value='3'>Mestrado</option>
        <option value='5'>MBA</option>
        <option value='6'>Curso técnico</option>
        <option value='7'>Outros</option>
      </Select>
    </Flex>
  );
};
export default Formacao;
