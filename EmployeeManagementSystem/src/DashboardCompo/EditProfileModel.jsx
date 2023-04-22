import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import {BiEdit} from "react-icons/bi";

const EditProfileModel = ({data}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <div>
      <BiEdit
        onClick={onOpen}
        style={{
          color: "gray",
          width: "1.5rem",
          height: "1.5rem",
          cursor: "pointer",
        }}
      />

      <Modal onClose={onClose} size="lg" isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Prrofile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form
            //   onSubmit={SubmitFormData}
            >
              <Stack>
                <HStack>
                  <FormControl isRequired>
                    <FormLabel> First Name : </FormLabel>
                    <Input
                      placeholder="Enter First name"
                      name="firstname"
                      // onChange={Handeldinput}
                      defaultValue={data.firstname}
                      type="text"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Last Name : </FormLabel>
                    <Input
                      placeholder="Enter Last Name"
                      name="lastname"
                      // onChange={Handeldinput}
                      defaultValue={data.lastname}
                      type="text"
                    />
                  </FormControl>
                </HStack>
                <FormControl isRequired>
                  <FormLabel>Email Address </FormLabel>
                  <Input
                    placeholder=" Enter Email "
                    name="email"
                    //   onChange={Handeldinput}
                    type="email"
                    defaultValue={data.email}
                  />
                </FormControl>

                <HStack>
                  <FormControl isRequired>
                    <FormLabel>Salary in Rs</FormLabel>
                    <Input
                      placeholder="Salery in Rs."
                      name="salary"
                      // onChange={Handeldinput}
                      type="number"
                      defaultValue={data.salary}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel> Position</FormLabel>
                    <Select
                      placeholder="Select Position"
                      name="position"
                      defaultValue={data.position}
                      // onChange={Handeldinput}
                    >
                      <option value="HR (Hiring Resources)">
                        HR (Human resource )
                      </option>
                      <option value="Frontend Developer">
                        Frontend Developer
                      </option>
                      <option value="Backend Developer">
                        Backend Developer
                      </option>
                      <option value="Full Stack Developer">
                        Full stack Developer
                      </option>
                      <option value="NodeJs Developer">Nodejs Developer</option>
                    </Select>
                  </FormControl>
                </HStack>
                <Button type="submit"> Add </Button>
              </Stack>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="outline">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default EditProfileModel;
