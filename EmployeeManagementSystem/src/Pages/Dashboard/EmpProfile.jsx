import {Box, Button, Container, Flex, Image, Text} from "@chakra-ui/react";
import React from "react";
import ProfileIntro from "../../DashboardCompo/ProfileIntro";

const EmpProfile = () => {
  return (
    <div>
      <Box border={"1px"}>
        <header>
          <Flex justifyContent={"space-between"} alignItems="center">
            <Flex
              alignItems={"center"}
              width="20%"
              justifyContent={"space-between"}
            >
              <Image
                boxSize="60px"
                objectFit="cover"
                borderRadius="full"
                src="https://cdn.pixabay.com/photo/2016/03/27/16/54/face-1283106__340.jpg"
                alt=""
              />
              <Text fontSize={"2xl"}>Dipak Pawar</Text>
            </Flex>

            <Button>Delete</Button>
          </Flex>
        </header>
        <Box width={"100%"}>
          <ProfileIntro />
        </Box>


        <Box>
            <Text>EMPLOYEE DETAILS</Text>

            



        </Box>
      </Box>
    </div>
  );
};

export default EmpProfile;
