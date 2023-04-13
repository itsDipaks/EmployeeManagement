import React from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { AddTodo } from '../../Redux/Todo/Todo.action';

const AddNewTodo = ({showmytodos}) => {
    let [todoformdata, settodoformdata] = useState({});
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
      };



  return (
    <div>
        
        <Box p={8} gap={2}  w={"50%"} boxShadow='dark-lg' m={"auto"} boxSizing="border-box" >
        
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
            <Button type="submit" bg={"black"} color={"white"} w={"3xs"} mt={4}>
              Add Todo
            </Button>
          </form>
        </Box>
    </div>
  )
}

export default AddNewTodo