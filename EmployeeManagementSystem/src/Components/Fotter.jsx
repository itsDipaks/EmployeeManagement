import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {Link} from "react-router-dom"
import Logo from "./Logo"
const Fotter = () => {
  return (
    <div>
      <Box
        bg={useColorModeValue("green.100", "green.400")}
        color={useColorModeValue("gray.700", "gray.200")}
        mt="64"
        bottom={0}
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid
            templateColumns={{sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr"}}
            spacing={8}
          >
            <Stack spacing={6}>
              <Box b={"1px"}>
                <Logo color={useColorModeValue("gray.700", "white")} />
              </Box>
              <Text fontSize={"sm"}>
                © DevelopWithDipak. All rights reserved
              </Text>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Routes</ListHeader>
              <Link to="/">Home</Link>
              <Link to="/feedDashbord">Feed</Link>
              <Link to={"/projetdashboard"}>Project Dashboard</Link>
              <Link to={"/todo"}>Todo</Link>
           
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Project</ListHeader>
              <Link to={"/projetdashboard"}>Project Dashboard</Link>
            
            </Stack>
           
            <Stack align={"flex-start"}>
              <ListHeader>Todo </ListHeader>
              <Link to={"/todo"}>Todo Dashboard </Link>
       
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </div>
  );
};

export default Fotter;



const ListHeader = ({children}) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};
