import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import SwitchTheam from "../Components/SwitchTheam";
import {AiTwotoneHome} from "react-icons/ai";
import {FiBell, FiChevronDown, FiHome} from "react-icons/fi";
import {Menu} from "react-pro-sidebar";
const Topbar = ({pannel}) => {
  let navigate = useNavigate();
  let RedirecttoHome = () => {
    pannel(false);
    navigate("/feedDashbord");
  };
  return (
    <>
      <Box bg={"green.200"} p={2} >
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text>Dashboard</Text>
      
          <HStack w={"25%"} spacing={{base: "0", md: "6"}}>
          <Button onClick={RedirecttoHome}>
                <AiTwotoneHome color="darkred"  />
              </Button>
            <Flex alignItems={"center"} w={"50%"}>
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{base: "none", md: "flex"}}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="md" fontWeight={"600"}>Dipak Pawar</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
              </HStack>
            </Flex>
              <SwitchTheam />
          </HStack>



        </Flex>
      </Box>
    </>
  );
};

export default Topbar;
