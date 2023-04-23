import {
    Avatar,
    AvatarBadge,
    Box,
    Button,
    CircularProgress,
    CircularProgressLabel,
    Flex,
    Grid,
    HStack,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import {EmailIcon, PhoneIcon} from "@chakra-ui/icons";
import React from 'react'

const SingleEmpBox = ({emp,tasks,LoadTask}) => {


let getMyAlltask=tasks.filter((el)=>{
    return el.AssignEmployee==emp.email
})


let CompletedTasks=getMyAlltask?.filter((task)=>{
    return task.Status=="Completed"
})

let getPercentage=Math.floor(CompletedTasks.length/getMyAlltask.length*100)

  return (
    <div>
       {LoadTask ? 
       <Text>Loading</Text>
       
       
       :
       
       <Box minWidth={"max-content"} rounded={"10%"}   bg={"gray.800"} boxShadow='xl' m={"auto"}  p={6} >
       <Stack>
         <Avatar
           name="Profile Image"
           size={{lg:"lg",sm:"sm"}}
           src="https://bit.ly/ryan-florence"
         >
           <AvatarBadge boxSize="1em" bg="green.500" />
         </Avatar>
         <Box textAlign={"start"}>
           <Text fontSize={{lg:"lg",sm:"md"}} color={"white"}>{emp?.firstname}  {emp?.lastname}</Text>
           <Text display={"flex"} gap={1} fontSize={"xs"} color={"gray.500"}>
             {" "}
              <Text>{emp?.position}</Text>
           </Text>
         </Box>
 
         <Box>
           <HStack fontSize={"xs"} gap={2} color={"gray.500"}>
             <PhoneIcon color={"blue.400"} />
             <Text>+918600405446</Text>
           </HStack>
           <HStack fontSize={"xs"} gap={2} color={"gray.500"}>
             <EmailIcon color={"blue.400"} />
             <Text>{emp?.email}</Text>
           </HStack>
         </Box>
       </Stack>
 <Flex mt={4} gap={1} justifyContent={"space-between"} alignItems={"center"}>
 
       {getMyAlltask.length>0? <Text color={"whiteAlpha.800"} fontSize={"sm"}>Tasks :  {CompletedTasks.length} / {getMyAlltask.length} </Text>:<Text fontSize={"sm"} color={"red.700"}>No Task </Text>}
       <CircularProgress value={getPercentage || 0} color='green.400'>
   <CircularProgressLabel  color={"white"}>{getPercentage || 0}%</CircularProgressLabel>
 </CircularProgress>
 </Flex>
       {/* <Button w={"40%"} m={"auto"} fontSize={"xs"} mt={4}>View Profile</Button> */}
     </Box>
       } 

      

    </div>
  )
}

export default SingleEmpBox