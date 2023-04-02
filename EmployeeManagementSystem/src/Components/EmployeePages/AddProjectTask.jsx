import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormControl, FormLabel, HStack, Input, Select, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const AddProjectTask = () => {

    const  [Newtask,setNewtask]= useState({})
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    let {token, email} = useSelector((store) => store.Auth);
  let {ProjectsData} = useSelector((store) => store.ProjectsData);

//   let filtereddta=ProjectsData[0]?.AssignedProject?.AssignedTeam.filter((val)=>{
//     return val.email!==email
//  })
let Handeldinputvalue=(e)=>{
    let {name,value}=e.target
    setNewtask({...Newtask,[name]:value})
}
let handeldTaskAdd=()=>{

}
  return (
    <>
       <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
     Assign Task
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
                        <FormLabel>  Start Date</FormLabel>
                        <Input
                          type="date"
                          name="StartDate"
                          onChange={Handeldinputvalue}
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>  Start Date</FormLabel>
                        <Input
                          type="date"
                          name="EstimateEndData"
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