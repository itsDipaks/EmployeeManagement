import {Box, Flex, Image, Text} from "@chakra-ui/react";
import React from "react";
import HighlightBtn from "./HighlightBtn";

const ProfileIntro = () => {
  return (
    <>
      <Flex mt="1rem">
        <Flex justifyContent={"space-between"} width="100%" border={"1px"}>
          <Box width={"45%"}>
            <Text p="1rem">PROFILE IMAGE</Text>
            <Image
              width={"70%"}
              height="auto"
              margin="auto"
              borderRadius={"2rem"}
              src="https://cdn.pixabay.com/photo/2016/03/26/22/13/man-1281562__340.jpg"
              alt=""
            />
          </Box>

          {/* -------------Role box--------------- */}

          <Box width={"50%"} justifyContent="space-between">
            <Flex>
              <Box width={"40%"}>
                <Text p="1rem">ROLE</Text>
                <HighlightBtn />
              </Box>
              <Box width={"40%"}>
                <Text p="1rem">ONBOARDING </Text>
                <HighlightBtn />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default ProfileIntro;
