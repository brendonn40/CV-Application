import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";

const TextField = ({ label, ...props }) => {
  return (
    <FormControl bg='white'>
      <FormLabel>{label}</FormLabel>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextField;
