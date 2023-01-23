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

function ModalPreview({isOpen,data,onClose}) {
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose} size={'3xl'}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Curriculo Vitae</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
        <Preview data={data}/>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ModalPreview