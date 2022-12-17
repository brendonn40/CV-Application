import React from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  VStack,
  Center,
  Flex,
} from "@chakra-ui/react";
import Formacao from "./Formacao";
import { AiFillPlusSquare } from 'react-icons/ai';

const Form = () => {
  return (
    <VStack as='form' mx='auto' w='60%' h='100vh' justifyContent='center'>
      <Box bg='gray.200' w='100%' borderRadius={"20px"}>
        <Heading size='md' mt='20px' textAlign={"center"}>
          Informações pessoais
        </Heading>
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gridGap={"5px"}
        >
          <Input
            name='name'
            placeholder='Digite seu nome completo'
            backgroundColor={"white"}
            padding='10px'
            width={"95%"}
          />
          <Input
            name='email'
            placeholder='Forneça seu endereço de email para contato'
            type='email'
            backgroundColor={"white"}
            padding='10px'
            width={"95%"}
          />
          <Input
            name='phone'
            placeholder='Forneça um numero de telefone contato'
            type='phone'
            backgroundColor={"white"}
            padding='10px'
            width={"95%"}
          />
          <Input
            name='profession'
            placeholder='Qual a sua profissão?'
            type='text'
            backgroundColor={"white"}
            padding='10px'
            width={"95%"}
          />
        </Flex>

        <Heading size='md' mt='20px' textAlign={"center"}>
          Formação
          <Button><AiFillPlusSquare/></Button>
        </Heading>
        <Formacao />
        <Center>
          <Button type='submit' variant='solid' p={2} colorScheme='teal'>
            Create CV
          </Button>
        </Center>
      </Box>
    </VStack>
  );
};
export default Form;
