import PropTypes from "prop-types";
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
const Header = ({ text }) => {
  return (
    <>
      <Box bg='tomato' w='100%' p={4} color='white'>
        <Center fontSize='2xl'>
          <Heading>{text}</Heading>
        </Center>
      </Box>
    </>
  );
};

Header.propTypes = {
  text: PropTypes.string,
};
export default Header;
