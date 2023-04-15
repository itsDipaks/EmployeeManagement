import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormControl, FormLabel, HStack, Input, Select, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddTask } from '../../Redux/TaskProject/TaskProject.action'

const AddProjectTask = ({getProjectTasks,projectid}) => {

    const  [Newtask,setNewtask]= useState({})
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    let { email} = useSelector((store) => store.Auth);
  let {ProjectsData} = useSelector((store) => store.ProjectsData);
let dispatch=useDispatch()

let Handeldinputvalue=(e)=>{
    let {name,value}=e.target
    setNewtask({...Newtask,[name]:value,Projectid:projectid})
}
let handeldTaskAdd=(e)=>{
    e.preventDefault();
    dispatch(AddTask(Newtask))
    onClose()
    setTimeout(()=>{
      getProjectTasks()
    },2000)
}
  return (
    <>
       <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
     Add New Task
      </Button>


        <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent>

        <form onSubmit={handeldTaskAdd}>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>

            <VStack gap={4}>



          <FormControl isRequired>
                        <FormLabel> Task </FormLabel>
                        <Input
                          placeholder="Enter Task Here"
                          name="Task"
                          onChange={Handeldinputvalue}
                          type="text"
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>Assigne To  </FormLabel>
                        <Select
                          placeholder="Select Foks"
                          name="AssignEmployee"
                          onChange={Handeldinputvalue}
                        >
                       {   ProjectsData[0]?.AssignedProject?.AssignedTeam.map((el)=>
                       <option value={el.email}>{el.firstname} {el.lastname} {el.email==email?"Me" :""} </option>
                       )}
                        
                        </Select>
                      </FormControl>

                      <HStack w={"100%"}>
                      <FormControl isRequired>
                        <FormLabel> Due Date</FormLabel>
                        <Input
                          type="date"
                          name="DueDate"
                          onChange={Handeldinputvalue}
                        />
                      </FormControl>
                   
                      </HStack>
                      <Flex w={"100%"} gap={4}>


<Button w={"40%"} variant='outline'onClick={onClose}>
  Cancel
</Button>
<Button w={"40%"}  type="submit" colorScheme='blue'>Save</Button>
</Flex>


            </VStack>



          </DrawerBody>

         

</form>

        </DrawerContent>
      </Drawer> 

    </>
  )
}

export default AddProjectTask