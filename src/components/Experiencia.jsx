import React from "react";
import { Input, Flex, Button, Heading } from "@chakra-ui/react";
import { useFieldArray } from "react-hook-form";
import { AiFillPlusSquare } from "react-icons/ai";
import { Divider } from '@chakra-ui/react'

const Experiencia = ({ control, register }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  return (
    <>
      <Heading size="md" mt="20px" textAlign={"center"}>
        Experiencia
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
              name="company"
              type="text"
              placeholder="Nome da empresa"
              isRequired={true}
              backgroundColor={"white"}
              padding="10px"
              width={"95%"}
              key={field.id}
              {...register(`experiences.${index}.company`)}
            />
            <Input
              name="position"
              placeholder="Cargo"
              type="text"
              isRequired={true}
              backgroundColor={"white"}
              padding="10px"
              width={"95%"}
              key={field.id}
              {...register(`experiences.${index}.position`)}
            />

            <Input
              name="beginDate"
              placeholder="Data de inicio"
              type="date"
              isRequired={true}
              backgroundColor={"white"}
              padding="10px"
              width={"95%"}
              key={field.id}
              {...register(`experiences.${index}.beginDate`)}
            />
            <Input
              name="endDate"
              placeholder="Data de saida"
              type="date"
              backgroundColor={"white"}
              padding="10px"
              width={"95%"}
              key={field.id}
              {...register(`experiences.${index}.endDate`)}
            />
            <Divider/>
          </>
        ))}
      </Flex>
    </>
  );
};
export default Experiencia;
