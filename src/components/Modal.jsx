import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
  } from '@chakra-ui/react'
import Preview from './Preview'
import { useReactToPrint } from 'react-to-print';
import { useRef  } from "react";

function ModalPreview({isOpen,data,onClose}) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  console.log(`data?`, data)
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose} size={'3xl'}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Curriculo Vitae</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
        <Preview props={data} ref={componentRef}/>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Cancelar
              </Button>
              <Button variant='ghost' onClick={handlePrint}>Imprimir</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ModalPreview