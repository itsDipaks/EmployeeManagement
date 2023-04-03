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
} from "@chakra-ui/react";
import React from "react";
import TodoColumn from "../../Components/EmployeePages/TodoColumn";
import {useState} from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../../Redux/Todo/Todo.action";
const Todo = () => {
  let [todoformdata, settodoformdata] = useState({});
let dispatch=useDispatch()
  let handeldtodoinputs = (e) => {
    e.preventDefault()
    let {name,value}=e.target
    settodoformdata({...todoformdata,[name]:value})
  };

  let submitTodo = (e) => {
    e.preventDefault()
dispatch(AddTodo(todoformdata))
  };

  return (
    <>
      <Heading>Manage My Todos</Heading>

      <Grid templateColumns="repeat(4, 1fr)" gap={6} p={4}>
        <VStack p={4} gap={2} border={"1px"} boxSizing="border-box">
          <form onSubmit={submitTodo}>
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
                  //   colorScheme={"red"}
                  type="date"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Time </FormLabel>
                <Input
                  placeholder="Enter Todo"
                  name="Todo"
                  onChange={handeldtodoinputs}
                  //   colorScheme={"red"}
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
            <Button type="submit">Add Todo</Button>
          </form>
        </VStack>

        <TodoColumn />
        <TodoColumn />
        <TodoColumn />
      </Grid>
    </>
  );
};

export default Todo;
