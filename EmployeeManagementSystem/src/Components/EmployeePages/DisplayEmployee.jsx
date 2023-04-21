
import {
  Grid, SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import SingleEmpBox from "./SingleEmpBox";

const DisplayEmployee = ({empdata,tasks}) => {
    let {email} = useSelector((store) => store.Auth);

let filtereddta=empdata.filter((val)=>{
   return val.email!=email
})
  return (
    
    <>
    <SimpleGrid  width={"90%"} m={"auto"}  columns={{lg:"4",sm:"2"}}  gap={4}>
    {/* <Flex width={"70%"} m={"auto"} gap={4}  flexWrap={"wrap"} justifyContent={"space-between"}> */}
 {   
  filtereddta?.map((el)=> <SingleEmpBox tasks={tasks} emp={el}/>) }
    {/* </Flex>/ */}
    </SimpleGrid>
    </>
  );
};

export default DisplayEmployee;
