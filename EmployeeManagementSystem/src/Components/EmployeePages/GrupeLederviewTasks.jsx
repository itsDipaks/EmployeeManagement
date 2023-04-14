import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetallTask } from '../../Redux/TaskProject/TaskProject.action';
import ShowProjectTask from './ShowProjectTask';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import ChartSetup from '../Charts/ChartSetup';

const GrupeLederviewTasks = () => {

  let dispatch = useDispatch();
  useEffect(() => {
    showtaskdata();
  }, []);

  let showtaskdata = () => {
    dispatch(GetallTask());
  };
  let { email} = useSelector((store) => store.Auth);
  let {ProjectsData} = useSelector((store) => store.ProjectsData);

  let {tasks} = useSelector((store) => store.Tasks);


  let adminshowtasks = tasks?.filter((el) => {
    return el.AssignEmployee != email;
  });


  let pendingTasks = tasks?.filter((el) => {
    return  el.Status == "Incomplete";
  });

  let CompletedTasks = tasks?.filter((el) => {
    return el.Status == "Completed";
  });

  return (
    <div>
      <Box w={"30vw"} p={4}>
      <ChartSetup data={[pendingTasks.length,CompletedTasks.length] }/>
        </Box> 
<Flex w={"85%"} m={"auto"} gap={4} justifyContent={"space-between"} minH={"20vh"}>


{/* ==========Pending Tasks ========= */}

<Box border={"1px"}  w={"50%"}>
  <Text p={4} bg={"black"} color={"white"}>Pending Tasks</Text>
 {ProjectsData[0]?.AssignedProject?.groupleader == email ? (
           <Box p={4}>
                <VStack gap={2}>
                  {pendingTasks?.map((el,index) => (
                    <ShowProjectTask data={el} index={index} showtaskdata={showtaskdata} />
                  ))}
                </VStack>
              </Box>
            ) : (
              ""
            )} 


</Box>


{/* ==========Completed Tasks ========= */}

<Box border={"1px"}  w={"50%"} >
  <Text p={4} bg={"black"} color={"white"}>Completed Tasks</Text>

  {ProjectsData[0]?.AssignedProject?.groupleader == email ? (
              <Box p={4}>
                <VStack gap={2}>
                  {CompletedTasks?.map((el,index) => (
                    <ShowProjectTask data={el}index={index} showtaskdata={showtaskdata} />
                  ))}
                </VStack>
              </Box>
            ) : (
              ""
            )} 

</Box>



</Flex>
    </div>
  )
}

export default GrupeLederviewTasks