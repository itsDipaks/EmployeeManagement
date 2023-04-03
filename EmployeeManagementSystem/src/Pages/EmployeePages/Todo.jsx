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
import {useDispatch, useSelector} from "react-redux";
import {AddTodo, GetallMyTodos} from "../../Redux/Todo/Todo.action";
import {useEffect} from "react";
const Todo = () => {
  let [todoformdata, settodoformdata] = useState({});
  let dispatch = useDispatch();

  let {token, email} = useSelector((store) => store.Auth);
  let {loading, Todos} = useSelector((store) => store.Todo);

  let showmytodos = () => {
    dispatch(GetallMyTodos(email));
  };

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
  };

  useEffect(() => {
    showmytodos();
  }, []);

  return (
    <>
      <Heading>Manage Todos</Heading>

      <Grid templateColumns="repeat(4, 1fr)" gap={6} p={4}>
        <VStack p={4} gap={2} border={"1px"} boxSizing="border-box">
          <Box width={"100%"} borderBottom={"1px"} p={3} mb={2}>
            Add New Todo
          </Box>
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
            <Button type="submit" mt={4}>
              Add Todo
            </Button>
          </form>
        </VStack>

        <TodoColumn Todos={Todos} tabletitle={"Incomplete"} />
        <TodoColumn tabletitle={"Progress"} />
        <TodoColumn tabletitle={"completed"} />
      </Grid>
    </>
  );
};

export default Todo;
