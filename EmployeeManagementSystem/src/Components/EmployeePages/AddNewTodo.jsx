import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  HStack,
  Heading,
  Input,
  Select,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {AddTodo} from "../../Redux/Todo/Todo.action";

const AddNewTodo = ({showmytodos,LoadTodo}) => {
  let [todoformdata, settodoformdata] = useState({});
  const {isOpen, onOpen, onClose} = useDisclosure();
  let dispatch = useDispatch();

  let {token, email} = useSelector((store) => store.Auth);
  let handeldtodoinputs = (e) => {
    e.preventDefault();
    let {name, value} = e.target;
    settodoformdata({...todoformdata, [name]: value});
  };

  let submitTodo = (e) => {
    e.preventDefault();
    console.log(todoformdata);
    dispatch(AddTodo({...todoformdata, useremail: email}));
    setTimeout(() => {
      showmytodos();
    }, 2000);
    onClose();
  };

  return (
    <div>
      <Button colorScheme={"green"} onClick={onOpen}>
        Ada New Todo
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader borderBottom={"1px"} w={"80%"} m={"auto"}>Add New Todo</ModalHeader>
          <ModalCloseButton />

          <form onSubmit={submitTodo}>
            <ModalBody>
              <Box p={4} gap={2} m={"auto"} boxSizing="border-box">
                <FormControl isRequired>
                  <FormLabel>Todo </FormLabel>
                  <Input
                    placeholder="Enter Todo"
                    name="Todo"
                    onChange={handeldtodoinputs}
                  />
                </FormControl>

                <HStack>
                  <FormControl isRequired>
                    <FormLabel>Date </FormLabel>
                    <Input
                      placeholder="Enter Todo"
                      name="DueDate"
                      onChange={handeldtodoinputs}
                      type="date"
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Time </FormLabel>
                    <Input
                      placeholder="Enter Todo"
                      name="time"
                      onChange={handeldtodoinputs}
                      type="time"
                    />
                  </FormControl>
                </HStack>
                <FormControl isRequired>
                  <FormLabel>Priority </FormLabel>
                  <Select
                    placeholder="Select Priority"
                    name="Priority"
                    onChange={handeldtodoinputs}
                  >
                    <option value="1">High </option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                  </Select>
                </FormControl>
                {/* <Button  bg={"black"} color={"white"} w={"3xs"} mt={4}>
            Add Todo
          </Button> */}
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="red" w={"20%"} mr={4} onClick={onClose}>
          Cancel
              </Button>
              <Button isLoading={LoadTodo ? true :false} type="submit" colorScheme="green" w={"20%"}>
                {" "}
                Add
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddNewTodo;
