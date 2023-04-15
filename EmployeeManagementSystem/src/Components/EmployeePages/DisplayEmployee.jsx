
import {
  Grid,
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
    <Grid width={"80%"} m={"auto"}  templateColumns='repeat(4, 1fr)' gap={6}>
    {/* <Flex width={"70%"} m={"auto"} gap={4}  flexWrap={"wrap"} justifyContent={"space-between"}> */}
 {   
  filtereddta?.map((el)=> <SingleEmpBox tasks={tasks} emp={el}/>) }
    {/* </Flex>/ */}
    </Grid>
    </>
  );
};

export default DisplayEmployee;
