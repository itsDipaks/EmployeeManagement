import { Box, Button, Flex, FormControl, FormLabel, Grid, HStack, Heading, Input, Select, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import TodoColumn from '../../Components/EmployeePages/TodoColumn'
const Todo = () => {
  return (
    <>
       <Heading>Manage My Todos</Heading> 


       <Grid templateColumns='repeat(4, 1fr)' gap={6} p={4}>


<VStack p={4} gap={2} border={"1px"} boxSizing="border-box">
<FormControl isRequired>
            <FormLabel>Todo </FormLabel>
            <Input
              placeholder="Enter Todo"
              name="Todo"
            //   onChange={(e)=>setstreetaddress(e.target.value)}
            //   colorScheme={"red"}
            />
          </FormControl>

          <HStack>

<FormControl isRequired>
            <FormLabel>Date </FormLabel>
            <Input
              placeholder="Enter Todo"
              name="Todo"
            //   onChange={(e)=>setstreetaddress(e.target.value)}
            //   colorScheme={"red"}
            type='date'
            />
          </FormControl>
<FormControl isRequired>
            <FormLabel>Time </FormLabel>
            <Input
              placeholder="Enter Todo"
              name="Todo"
            //   onChange={(e)=>setstreetaddress(e.target.value)}
            //   colorScheme={"red"}
            type='time'
            />
          </FormControl>
          </HStack>
          <FormControl isRequired>
            <FormLabel>Priority </FormLabel>
            <Select
              placeholder="Select Priority"
              name="ProjectType"
            >
                <option value="1">High </option>
                <option value="2">Medium</option>
                <option value="3">Low</option>
            </Select>
          </FormControl>
<Button>Add Todo</Button>
</VStack>


<TodoColumn/>
<TodoColumn/>
<TodoColumn/>


</Grid>

    </>
  )
}

export default Todo