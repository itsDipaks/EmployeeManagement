import React from "react";
import ShowProjectTask from "./ShowProjectTask";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {GetallTask} from "../../Redux/TaskProject/TaskProject.action";
import {Box, Text, VStack} from "@chakra-ui/react";
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

  console.log(tasks);
  return (
    <div>
      {ProjectsData[0]?.AssignedProject?.groupleader == email ? (
        <Box>
          <Text m={4} fontSize={"2xl"}>
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
          <Text m={4} fontSize={"2xl"}>
            Pending Tasks
          </Text>

          <VStack gap={1}>
            {MyAssignPpendingTasks?.map((el) => (
              <ShowMyAssigntaskcard
                data={el}
                colorstatus={"red.100"}
                showtaskdata={showtaskdata}
                onclickstatus={"Completed"}
                iconcolor={"red"}
              />
            ))}
          </VStack>
          <Text m={4} fontSize={"2xl"}>
            Completed
          </Text>
          <VStack gap={1}>
            {MyAssignCompletedTasks?.map((el) => (
              <ShowMyAssigntaskcard
                data={el}
                colorstatus={"green.100"}
                showtaskdata={showtaskdata}
                onclickstatus={"Incomplete"}
                iconcolor={"green"}
              />
            ))}
          </VStack>
        </Box>
      ) : (
        ""
      )}
    </div>
  );
};

export default Displaytask;
