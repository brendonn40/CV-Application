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
  Container,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const Preview = ({ data }) => {
  const onSubmit = (data) => console.log(data);
  return (
    <Container>
      <Flex justifyContent={`space-between`}>
        <Avatar size={`2xl`} name={data.name} src={data?.photo} />
        <Flex direction={`column`} gridGap={`12px`}>
          <div>
            <strong>{data?.name}</strong>
            <Text>{data?.profession}</Text>
          </div>
          <Box border={`solid 1px black`} padding={`8px`}>
            <strong>CONTATO</strong>
            <Flex gridGap={`5px`} alignItems={`center`}>
              <BsTelephone />
              <Text>{data?.tel}</Text>
            </Flex>
            <Flex gridGap={`5px`} alignItems={`center`}>
              {" "}
              <AiOutlineMail /> <Text>{data?.email}</Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Box mt={`20px`}>
        <strong>Formação</strong>
        <ul style={{ listStyle: `none` }}>
          {data?.formations.map((formation, index) => (
            <li key={index}>
              <strong>
                {formation.initialYear} - {formation.conclusionYear === '' ? 'Cursando': formation.conclusionYear}
              </strong>{" "}
              <span>
                {formation.courseType}-{formation.course}
              </span>
            </li>
          ))}
        </ul>
      </Box>
    </Container>
  );
}

const FileInputWrapper = styled.input`
  display: none;
`;
export default Preview;
