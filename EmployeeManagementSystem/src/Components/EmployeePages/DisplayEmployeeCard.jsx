import {EmailIcon, PhoneIcon} from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const DisplayEmployeeCard = ({empdata}) => {
    let {token,email} = useSelector((store) => store.Auth);

let filtereddta=empdata.filter((val)=>{
   return val.email!=email
})
console.log(filtereddta)
  return (
    
    <>
    <Grid width={"80%"} m={"auto"}  templateColumns='repeat(4, 1fr)' gap={6}>
    {/* <Flex width={"70%"} m={"auto"} gap={4}  flexWrap={"wrap"} justifyContent={"space-between"}> */}
 {   
  filtereddta?.map((el)=> <Box w={"100%"} rounded={"10%"}   bg={"gray.800"} boxShadow='xl' m={"auto"}  p={6} pl={8}>
      <Stack>
        <Avatar
          name="Profile Image"
          size="lg"
          src="https://bit.ly/ryan-florence"
        >
          <AvatarBadge boxSize="1em" bg="green.500" />
        </Avatar>
        <Box textAlign={"start"}>
          <Text fontSize={"lg"} color={"white"}>{el.firstname}  {el.lastname}</Text>
          <Text display={"flex"} gap={1} fontSize={"xs"} color={"gray.500"}>
            {" "}
             <Text>{el.position}</Text>
          </Text>
        </Box>

        <Box>
          <HStack fontSize={"xs"} gap={2} color={"gray.500"}>
            <PhoneIcon color={"blue.400"} />
            <Text>+918600405446</Text>
          </HStack>
          <HStack fontSize={"xs"} gap={2} color={"gray.500"}>
            <EmailIcon color={"blue.400"} />
            <Text>{el.email}</Text>
          </HStack>
        </Box>
      </Stack>
      {/* <Button w={"40%"} m={"auto"} fontSize={"xs"} mt={4}>View Profile</Button> */}
    </Box>) }
    {/* </Flex>/ */}
    </Grid>
    </>
  );
};

export default DisplayEmployeeCard;
