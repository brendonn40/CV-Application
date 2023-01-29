import React from "react";
import {
  Input,
  Select,
  Text,
  FormLabel,
  Flex,
  Button,
  Heading,
} from "@chakra-ui/react";
import {
  useFieldArray
} from "react-hook-form";
import { AiFillPlusSquare } from "react-icons/ai";
import { Divider } from '@chakra-ui/react'

const Formacao = ({ control, register }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "formations",
  });

  return (
    <>
      <Heading size="md" mt="20px" textAlign={"center"}>
        Formação
        <Button>
          <AiFillPlusSquare   onClick={() => append({})}/>
        </Button>
      </Heading>
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gridGap={"5px"}
      >
        {fields.map((field, index) => (
          <>
            <Input
              name="course"
              type="text"
              placeholder="Nome do curso"
              isRequired={true}
              backgroundColor={"white"}
              padding="10px"
              width={"95%"}
              key={field.id}
              {...register(`formations.${index}.course`)}
            />
            <Input
              name="institution"
              placeholder="Instituição"
              type="text"
              isRequired={true}
              backgroundColor={"white"}
              padding="10px"
              width={"95%"}
              key={field.id}
              {...register(`formations.${index}.institution`)}
            />

            <Input
              name="initialYear"
              placeholder="Ano de inicio"
              type="number"
              min="1970"
              max="2099"
              isRequired={true}
              backgroundColor={"white"}
              padding="10px"
              width={"95%"}
              key={field.id}
              {...register(`formations.${index}.initialYear`)}
            />
            <Input
              name="conclusionYear"
              placeholder="Ano de conclusão."
              type="text"
              backgroundColor={"white"}
              padding="10px"
              width={"95%"}
              key={field.id}
              {...register(`formations.${index}.conclusionYear`)}
            />
            <Select
              placeholder="Tipo de curso"
              isRequired={true}
              backgroundColor={"white"}
              width={"95%"}
              key={field.id}
              name="courseType"
              {...register(`formations.${index}.courseType`)}
            >
              <option value="Ensino fundamental">Ensino fundamental</option>
              <option value="Ensino médio ">Ensino médio </option>
              <option value="Graduação">Graduação</option>
              <option value="Mestrado">Mestrado</option>
              <option value="MBA">MBA</option>
              <option value="Curso técnico">Curso técnico</option>
              <option value="Outros">Outros</option>
            </Select>
            <Divider orientation="horizontal" color={`black`}/>
          </>
        ))}
      </Flex>
    </>
  );
};
export default Formacao;
