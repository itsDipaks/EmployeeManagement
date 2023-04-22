import {Box, Button, Input, SimpleGrid, Text, Textarea} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddNewFeed, GetAllFeeds } from "../../Redux/Feeds/Feeds.action";
const AdminMassage = () => {
  const [input, setInput] = useState(false);
  const [value, setValue] = useState("");
  const [massage, setMassage] = useState([]);
  const [filter, setFilter] = useState("");
  
  let dispatch=useDispatch()
  let {token , loading , error,isadmin,name,email} = useSelector((store) => store.Auth);
  useEffect(() => {
    showfeeds()
  }, []);

  let showfeeds=()=>{
    dispatch(GetAllFeeds());
  }
  let sendMassage=()=>{
    dispatch(AddNewFeed(massage,name,email))
    setTimeout(()=>{
      showfeeds()
    },1000)
    
  }


  return (
    <div>
      <SimpleGrid
        width="75%"
        mt={4}
        pt="2"
        pb="2"
        borderRadius="10"
        border={"1px solid green"}
        m="auto"
        
      >
        {/* ----------- (Top text row) -------------------- */}

        <Box
          borderBottom={"1px solid #7b8691c1"}
          fontSize={20}
          display={"flex"}
          gap="25px"
          ml="5"
          mt={2}
          pb={2}
          fontWeight="700"
          color="green.400"
        >
      Add New Feed 
        </Box>

        {/* ------------------- (Input) --------------------- */}
        <Input
          onClick={() => setInput(!input)}
          textAlign={"left"}
          ml="6"
          mt="2"
          w={"90%"}
          fontSize={"24"}
          display={input ? "none" : "block"}
          color="#4d545b"
          placeholder="Send message ..."
          borderColor={"transparent"}
        />
        <Textarea
          textAlign={"left"}
          ml="6"
          mt="2"
          onChange={(e) => setMassage(e.target.value)}
          w={"90%"}
          display={input ? "block" : "none"}
          fontSize={"1rem"}
          color="#4d545b"
          placeholder="Send message ..."
          borderColor={"transparent"}
          rows={"4"}
        />
        <Box display={input ? "block" : "none"}>
          {/* ---------------------- (Middle row) --------------------- */}
          <Box
            display={"flex"}
            gap="8"
            fontSize={"15px"}
            ml="74px"
            mt={"2"}
            // className={style.MiddleRow}
          >
            <Input type="file" id="upload" hidden />
            <label htmlFor="upload">File</label>
            <Input type="file" id="upload" hidden />
            <label htmlFor="upload">New document</label>
            {/* <Text>Mention</Text>
            <Text>Quote</Text>
            <Text>Add tag</Text>
            <Text>Record Video</Text> */}
          </Box>

          {/* -----------------------(To: add more) =------------------- */}
          <Box
            display={"flex"}
            gap="4"
            ml="10"
            fontSize={20}
            mt="3"
            alignItems="center"
          >
          
            <Box
              border={"1px solid #7b869190"}
              display="flex"
              gap="2"
              fontSize={"16"}
              alignItems="center"
              justifyContent={"space-between"}
              p="2"
            //   pr="50%" 
            w={"70%"}
            // m="auto"
              borderRadius={10}
            > 
              <Text
                color={"grey"}
                bg="#dbf087"
                textAlign={"center"}
                p="1"
                pr="4"
                pl="4"
                ml="1"
                borderRadius={8}
              >
                To all employees
              </Text>

              <Box display={"flex"} gap="10" >
            <Button
                onClick={sendMassage}
              bg={"#3bc8f5"}
              color="white"
              fontSize={"1rem"}
              _hover={{
                bg: "#0cbef9",
                color: "white",
              }}
            >
              Send
            </Button>
            <Button
              onClick={() => setInput(false)}
              fontSize={"1rem"}
        bg={"red.500"}
        color={"wheat"}
            >
              Cancel
            </Button>
          </Box>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default AdminMassage;
