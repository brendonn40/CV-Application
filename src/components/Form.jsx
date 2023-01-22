import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Heading,
  Input,
  VStack,
  Center,
  Flex,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import Formacao from "./Formacao";
import { AiFillPlusSquare } from "react-icons/ai";
import Experiencia from "./Experiencia";

const Form = () => {
  const { control,register, handleSubmit } = useForm();

  const onSubmit = data => console.log(data);
  return (
    <VStack mx='auto' w='60%'  justifyContent='center'>
      <Box bg='gray.200' w='100%' borderRadius={"20px"}>
        <Heading size='md' mt='20px' textAlign={"center"}>
          Informações pessoais
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            required={true}
            {...register("name", { required: true})} 
          />
          <Input
            name='email'
            placeholder='Forneça seu endereço de email para contato'
            type='email'
            backgroundColor={"white"}
            padding='10px'
            width={"95%"}
            {...register("email", { required: true})} 
          />
          <Input
            name='tel'
            placeholder='Forneça um numero de telefone contato'
            type='phone'
            backgroundColor={"white"}
            padding='10px'
            width={"95%"}
            required={true}
            {...register("tel", { required: true})} 
          />
          <Input
            name='profession'
            placeholder='Qual a sua profissão?'
            type='text'
            backgroundColor={"white"}
            padding='10px'
            width={"95%"}
            {...register("profession", { required: true, maxLength: 30 })} 
          />
          <FormLabel alignSelf={`flex-start`} ml={'20px'}>Foto</FormLabel>

          <Input
            name='photo'
            placeholder='Foto'
            type='file'
            backgroundColor={"white"}
            padding='10px'
            width={"95%"}
            accept='image/png, image/jpeg'
            {...register("photo")} 
          />
        </Flex>
        <Formacao control={control} register={register}/>
      <Experiencia control={control} register={register}/>
        <Center>
          <Button type='submit' variant='solid' p={2} colorScheme='teal'>
            Create CV
          </Button>
        </Center>
        </form>
      

    
      </Box>
    </VStack>
  );
};

const FileInputWrapper = styled.input`
  display: none;
`;
export default Form;
