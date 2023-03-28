import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {AiFillCopy, AiOutlineDelete} from "react-icons/ai";
import {BsArrowLeft} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import ProfileIntro from "../../DashboardCompo/ProfileIntro";
import {SingleEmployee} from "../../Redux/Employee/Employee.action";

const EmpProfile = ({data}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  let openmodal = () => {
    onOpen();
  };
  return (
    <div>
      <Button colorScheme="messenger" onClick={openmodal}>
        View
      </Button>

      <Drawer onClose={onClose} isOpen={isOpen} size={"xl"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {" "}
            <Box w="95%" m={"auto"} pl={2} pr={2}>
              <Flex
                justifyContent={"space-between"}
                alignItems="center"
                boxSizing="border-box"
              >
                <Flex alignItems={"center"} width="30%" gap={2}>
                  <Image
                    boxSize="50px"
                    objectFit="cover"
                    boxShadow="2xl"
                    rounded="full"
                    src="https://cdn.pixabay.com/photo/2016/03/27/16/54/face-1283106__340.jpg"
                    alt=""
                  />
                  <Text fontSize={"3xl"} fontWeight="semibold">
                    {data?.firstname} {data?.lastname}
                  </Text>
                </Flex>

                <Button
                  w={"10%"}
                  p={2}
                  colorScheme="red"
                  variant="outline"
                  fontSize={"xl"}
                >
                  <AiOutlineDelete
                    style={{marginRight: "0.5rem", width: "120px"}}
                  />{" "}
                  Delete{" "}
                </Button>
              </Flex>
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <Box>
              <Divider mt={1} mb={1} />

              <Box width={"80%"} m="auto">
                <ProfileIntro data={data} />
              </Box>

              <Divider mt={2} mb={2} />

              <Flex width={"90%"} m="auto" textAlign={"start"}>
                <Box w={"80%"} m="auto">
                  <Text fontWeight={"semibold"}>EMPLOYEE DETAILS</Text>

                  <Flex
                    width="40%"
                    alignItems={"center"}
                    justifyContent="space-between"
                    border="1px solid gray"
                    borderRadius={"1rem"}
                    p="0.2rem 0.5rem 0.2rem 1rem"
                    m={4}
                  >
                    <Box width={"90%"} textAlign="start">
                      <Text fontSize={"0.7rem"}>Name</Text>
                      <Text fontSize={"0.9rem"}>Dipak Pawar</Text>
                    </Box>
                  </Flex>

                  <Flex
                    width="40%"
                    alignItems={"center"}
                    justifyContent="space-between"
                    border="1px solid gray"
                    borderRadius={"1rem"}
                    p="0.2rem 0.5rem 0.2rem 1rem"
                    m={4}
                  >
                    <Box width={"90%"} textAlign="start">
                      <Flex
                        justifyContent={"space-between"}
                        alignItems="center"
                      >
                        <Box>
                          <Text fontSize={"0.7rem"}>Email</Text>
                          <Text fontSize={"0.9rem"}>{data?.email}</Text>
                        </Box>
                        <AiFillCopy />
                      </Flex>
                    </Box>
                  </Flex>
                </Box>

                <Box w={"30%"} m="auto">
                  {/* <Text>EMPLOYEE DETAILS</Text> */}
                </Box>
              </Flex>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* <Box>
        <Box w="90%" m={"auto"} p={4}>
          <Flex
            justifyContent={"space-between"}
            alignItems="center"
            boxSizing="border-box"
          >
            <Flex
              alignItems={"center"}
              width="30%"
              gap={2}
            >
              <Link to={"/employeelist"}>
                <BsArrowLeft style={{fontSize: "1.5rem", cursor: "pointer"}} />
              </Link>
              <Image
                boxSize="50px"
                objectFit="cover"
                boxShadow="2xl"
                rounded="full"
                src="https://cdn.pixabay.com/photo/2016/03/27/16/54/face-1283106__340.jpg"
                alt=""
              />
              <Text fontSize={"3xl"} fontWeight="semibold">
                {employeeData[0].firstname} {employeeData[0].lastname}
              </Text>
            </Flex>

            <Button
              w={"10%"}
              p={2}
              colorScheme="red"
              variant="outline"
              fontSize={"xl"}
            >
              <AiOutlineDelete
                style={{marginRight: "0.5rem", width: "120px"}}
              />{" "}
              Delete{" "}
            </Button>
          </Flex>
        </Box>

        <Divider mt={2} mb={2}/>

        <Box width={"80%"} m="auto">
          <ProfileIntro data={employeeData[0]} />
        </Box>

        <Divider mt={2} mb={2}/>

        <Flex width={"80%"} m="auto" textAlign={"start"}>
          <Box w={"70%"} m="auto">
            <Text fontWeight={"semibold"}>EMPLOYEE DETAILS</Text>

            <Flex
              width="40%"
              alignItems={"center"}
              justifyContent="space-between"
              border="1px solid gray"
              borderRadius={"1rem"}
              p="0.2rem 0.5rem 0.2rem 1rem"
              m={4}
            >
              <Box width={"90%"} textAlign="start">
                <Text fontSize={"0.7rem"}>Name</Text>
                <Text fontSize={"0.9rem"}>Dipak Pawar</Text>
              </Box>
            </Flex>

            <Flex
              width="40%"
              alignItems={"center"}
              justifyContent="space-between"
              border="1px solid gray"
              borderRadius={"1rem"}
              p="0.2rem 0.5rem 0.2rem 1rem"
              m={4}
            >
              <Box width={"90%"} textAlign="start">
                <Flex justifyContent={"space-between"} alignItems="center">
                  <Box>
                    <Text fontSize={"0.7rem"}>Email</Text>
                    <Text fontSize={"0.9rem"}>{employeeData[0].email}</Text>
                  </Box>
                  <AiFillCopy />
                </Flex>
              </Box>
            </Flex>


          </Box>




          <Box w={"30%"} m="auto">
          </Box>
        </Flex>
      </Box> */}
    </div>
  );
};

export default EmpProfile;
