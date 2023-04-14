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

const Displaytask = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    showtaskdata();
  }, []);

  let showtaskdata = () => {
    dispatch(GetallTask());
  };
  let {token, email} = useSelector((store) => store.Auth);
  let {ProjectsData} = useSelector((store) => store.ProjectsData);

  let {tasks} = useSelector((store) => store.Tasks);

  console.log(tasks);
  // =========For Admin MAnges Task=======
  let adminshowtasks = tasks?.filter((el) => {
    return el.AssignEmployee != email;
  });
  // ====For All Employee Except Groupe Leader======
  let MyAssignPpendingTasks = tasks?.filter((el) => {
    return el.AssignEmployee == email && el.Status == "Incomplete";
  });

  let MyAssignCompletedTasks = tasks?.filter((el) => {
    return el.AssignEmployee == email && el.Status == "Completed";
  });

  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <div>
      <Button onClick={onOpen}>View My Task</Button>

      <Drawer onClose={onClose} placement={"right"} isOpen={isOpen} size={"sm"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader p={4} boxShadow={"md"}>
            {" "}
            My Assigned Task{" "}
          </DrawerHeader>
          <DrawerBody>
            {ProjectsData[0]?.AssignedProject?.groupleader == email ? (
              <Box>
                <Text m={4} fontSize={"md"}>
                  Project Tasks
                </Text>
                <VStack gap={2}>
                  {adminshowtasks?.map((el) => (
                    <ShowProjectTask data={el} showtaskdata={showtaskdata} />
                  ))}
                </VStack>
              </Box>
            ) : (
              ""
            )}

            {ProjectsData[0]?.AssignedProject?.groupleader != email ? (
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
                        showtaskdata={showtaskdata}
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
                        showtaskdata={showtaskdata}
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
