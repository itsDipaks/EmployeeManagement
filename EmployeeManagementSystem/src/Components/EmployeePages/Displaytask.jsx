import React from "react";
import ShowProjectTask from "./ShowProjectTask";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {GetallTask} from "../../Redux/TaskProject/TaskProject.action";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import ShowMyAssigntaskcard from "./ShowMyAssigntaskcard";

const Displaytask = ({AuthEmail,projectval,tasks,getProjectTasks}) => {

  // ====For All Employee ======
  let MyAssignPpendingTasks = tasks?.filter((el) => {
    return el.AssignEmployee == AuthEmail && el.Status == "Incomplete";
  });

  let MyAssignCompletedTasks = tasks?.filter((el) => {
    return el.AssignEmployee == AuthEmail && el.Status == "Completed";
  });

  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <div>
      <Button variant='outline' color="green.400" onClick={onOpen}>View My Task</Button>

      <Drawer onClose={onClose} placement={"right"} isOpen={isOpen} size={"sm"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader p={4} boxShadow={"md"}>
            {" "}
            My Assigned Task{" "}
          </DrawerHeader>
          <DrawerBody>
  
            {/* {ProjectsData[0]?.AssignedProject?.groupleader == email ? (
              <Box>
                <Text m={4} fontSize={"md"}>
                  Project Tasks
                </Text>
                <VStack gap={2}>
                  {MyAssignPpendingTasks?.map((el) => (
                    <ShowProjectTask data={el} showtaskdata={showtaskdata} />
                  ))}
                </VStack>
              </Box>
            ) : (
              ""
            )} */}

            {projectval? (
              <Box>
                <Box minHeight={"20vh"}>
                  <Text
                    m={4}
                    fontSize={"xl"}
                    color={"blue.800"}
                    fontWeight={"semibold"}
                  >
                    Pending Tasks
                  </Text>

                  <VStack gap={1}>
                    {MyAssignPpendingTasks?.map((el, index) => (
                      <ShowMyAssigntaskcard
                        data={el}
                        colorstatus={"red.100"}
                        getProjectTasks={getProjectTasks}
                        onclickstatus={"Completed"}
                        iconcolor={"red"}
                        index={index}
                      />
                    ))}
                    {MyAssignPpendingTasks.length == 0 ? (
                      <Text mt={"5%"}>No Remaining Pending Task </Text>
                    ) : (
                      ""
                    )}
                  </VStack>
                </Box>

                <Box minHeight={"30vh"}>
                  <Text
                    m={4}
                    color={"blue.800"}
                    fontSize={"xl"}
                    fontWeight={"semibold"}
                  >
                    Completed Tasks
                  </Text>
                  <VStack gap={1}>
                    {MyAssignCompletedTasks?.map((el, index) => (
                      <ShowMyAssigntaskcard
                        data={el}
                        colorstatus={"green.100"}
                        getProjectTasks={getProjectTasks}
                        onclickstatus={"Incomplete"}
                        iconcolor={"green"}
                        index={index}
                      />
                    ))}
                    {MyAssignCompletedTasks.length == 0 ? (
                      <Text mt={"5%"}>No Completed Task </Text>
                    ) : (
                      ""
                    )}
                  </VStack>
                </Box>
              </Box>
            ) : (
              ""
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Displaytask;
