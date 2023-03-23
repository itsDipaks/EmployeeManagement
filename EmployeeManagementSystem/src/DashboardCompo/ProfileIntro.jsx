import {Box, Flex, Image, Radio, Text} from "@chakra-ui/react";
import React from "react";
import HighlightBtn from "./HighlightBtn";
import {MdOutlineArrowDropDown} from "react-icons/md";
const ProfileIntro = ({data}) => {
  console.log(data);
  return (
    <>
      <Flex mt="1rem">
        <Flex
          justifyContent={"space-between"}
          gap={4}
          width="100%"
          // border={"1px"}
        >
          <Box width={"30%"}>
            <Text p="1rem" textAlign={"start"}>
              PROFILE IMAGE
            </Text>
            <Image
              width={"90%"}
              height="16rem"
              margin="auto"
              rounded={"1rem"}
              src="https://cdn.pixabay.com/photo/2016/03/26/22/13/man-1281562__340.jpg"
              alt=""
            />
          </Box>

          {/* -------------Role box--------------- */}

          <Box
            width={"65%"}
            // border="1px solid red"
            justifyContent="space-between"
            
          >
            <Flex justifyContent={"space-between"} textAlign="start">
              <Box width={"40%"}>
                <Box p={4}>
                  <Text pb={2} >ROLE</Text>
                  <HighlightBtn
                    icon={<MdOutlineArrowDropDown />}
                    title={data.position}
                    minititle={"position"}
                  />

                  <Text  pb={4} pt={8}>TEAM</Text>
                </Box>
              </Box>
              <Box width={"40%"} textAlign={"start"}>

                <Box p={4} boxSizing="border-box">
                  <Text  pb={2} >ONBOARDING </Text>
                  <HighlightBtn
                    icon={<MdOutlineArrowDropDown />}
                    title={data.joiningDate}
                    minititle={"Starts on"}
                  />
                </Box>


              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default ProfileIntro;
