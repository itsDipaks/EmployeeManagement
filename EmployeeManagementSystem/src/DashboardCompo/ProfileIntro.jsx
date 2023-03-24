import {Box, Flex, Image, Radio, Text} from "@chakra-ui/react";
import React from "react";
import HighlightBtn from "./HighlightBtn";
import {MdOutlineArrowDropDown} from "react-icons/md";
const ProfileIntro = ({data}) => {
  console.log(data);
  let teamdatat = [
    {
      name: "Dipak Pawar",
      img: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=600",
      designation: "Frontend",
    },
    {
      name: "Dipak Pawar",
      img: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=600",
      designation: "Frontend",
    },
    {
      name: "Dipak Pawar",
      img: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=600",
      designation: "Frontend",
    },
  ];
  return (
    <>
      <Flex mt="1rem"   width="100%">
        <Flex
          justifyContent={"space-between"}
          gap={4}
          width="100%"
          // border={"1px"}
        >
          <Box width={"30%"}>
            <Text p="1rem" textAlign={"start"} fontWeight={"semibold"}>
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
              <Box width={"45%"}>
                <Box p={4}>
                  <Text pb={2} fontWeight={"semibold"}>ROLE</Text>
                  <HighlightBtn
                    icon={<MdOutlineArrowDropDown />}
                    title={data.position}
                    minititle={"position"}
                  />

                  <Text pb={4} pt={8} fontWeight={"semibold"} >
                    TEAM
                  </Text>
                  {/* ----------------Team--------- */}
                  {teamdatat.map((el) => (
                    <Flex
                      display={"flex"}
                      w="100%"
                      border={"1px"}
                      p="0.2rem 1rem 0.2rem 1rem"
                      justifyContent="space-between"
                      alignItems={"center"}
                      boxSizing="border-box"
                      rounded={"10px"}
                      m="0.5rem 0rem 0.5rem 0rem"
                    >
                      <Box>
                        <Text fontSize={"0.7rem"}>{el.designation}</Text>
                        <Flex justifyContent={"space-between"}>
                          <Image
                            w={"20px"}
                            rounded="full"
                            src={el.img}
                            alt="image"
                          />
                          <Text ml={"1rem"}>{el.name} </Text>
                        </Flex>
                      </Box>
                      <MdOutlineArrowDropDown />
                    </Flex>
                  ))}
                </Box>
              </Box>
              <Box width={"45%"} textAlign={"start"}>
                <Box p={4} boxSizing="border-box">
                  <Text pb={2} fontWeight={"semibold"}>ONBOARDING </Text>
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
