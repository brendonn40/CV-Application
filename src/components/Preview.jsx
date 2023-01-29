import React from "react";
import { Box, Flex, Container, Text, Avatar } from "@chakra-ui/react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const Preview = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <Flex justifyContent={`space-between`} mt={`80px`}>
        <Avatar
          size={`2xl`}
          name={props?.props?.name}
          src={props?.props?.photo}
        />
        <Flex direction={`column`} gridGap={`12px`}>
          <div>
            <strong>{props?.props?.name}</strong>
            <Text>{props?.props?.profession}</Text>
          </div>
          <Box border={`solid 1px black`} padding={`8px`}>
            <strong>CONTATO</strong>
            <Flex gridGap={`5px`} alignItems={`center`}>
              <BsTelephone />
              <Text>{props?.props?.tel}</Text>
            </Flex>
            <Flex gridGap={`5px`} alignItems={`center`}>
              {" "}
              <AiOutlineMail /> <Text>{props?.props?.email}</Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Box mt={`20px`}>
        <strong>Formação</strong>
        <ul style={{ listStyle: `none` }}>
          {props?.props?.formations?.map((formation, index) => (
            <li key={index}>
              <div>Curso: {formation.course}</div>{" "}
              <div>
                Periodo: {formation.initialYear} -{" "}
                {formation.conclusionYear === ""
                  ? "Cursando"
                  : formation.conclusionYear}
              </div>
              <div>Tipo:{formation.courseType}</div>
              <div>Instituição:{formation.institution}</div>
            </li>
          ))}
        </ul>
        <strong>Experiências</strong>
        <ul style={{ listStyle: `none` }}>
          {props?.props?.experiences?.map((experience, index) => (
            <li key={index}>
              <div>Empresa: {experience.company}</div>{" "}
              <div>
                Periodo: {experience.beginDate} -{" "}
                {experience.endDate === "" ? "Atualmente" : experience.endDate}
              </div>
              <span>Cargo: {experience.position}</span>
            </li>
          ))}
        </ul>
      </Box>
    </Container>
  );
});

export default Preview;
