import {
  Box,
  Button,
  Grid,
  Image,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, {useState} from "react";

const FeedsPost = () => {
  const [input, setInput] = useState(false);
  const [follow, setFollow] = useState(false);
  const [like, setLike] = useState(false);
  const [value, setValue] = useState("");
  const [comments, setComments] = useState([]);
  return (
    <Box m="auto" w={"75%"} mt="4" border="1px">
      {/* ==========Intro============ */}
      <Box display={"flex"} alignItems="center" gap={"5"} w={"100%"} m="auto">
        <Box fontSize={"28px"}  w="45px" ml="5" mt="5">
          <Image
            w="45px"
            borderRadius={"50px"}
            src={
              "https://lh3.googleusercontent.com/a/ALm5wu0n1kkdEi3Dh3wdBxPYmaxA1KpgImRsi_g618RP=s96-c"
            }
          />
        </Box>
        {/* --------- */}
        <Box w="100%" mt="6">
          <Text
            fontWeight={500}
            fontSize={16}
            color="#246ab1"
            textAlign={"left"}
            cursor="pointer"
          >
            itsdipak@gmail.com
            <span style={{color: "grey"}}>{">"} To all employees</span>
          </Text>
          <Text color={"grey"} fontSize={13} textAlign={"left"}>
            {/* {day} {time} */}27 spen 3214
          </Text>
        </Box>
      </Box>

      {/* ===========Feed Details========== */}

      {/* <Box w={"90%"}>
        <Image
          w={"60%"}
          // h="50vh"
          src="https://bitrix24in.netlify.app/static/media/section_on_premise.jpg.62d1c746871007a2f080.webp"
          alt="feedimage"
        />
      </Box> */}

      <Text w={"90%"} m="auto" mt='4' textAlign={"start"}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quo
        accusamus libero facilis. Quae quisquam veniam perferendis. Sunt autem
        quod, sed eum dolorum nobis vitae consequuntur. Dignissimos nisi magni
        asperiores!
      </Text>

      {/* ============Feeds Like folloow============ */}
      <Box
        w="50%"
        mt={"5"}
        ml="85px"
        textAlign={"left"}
        fontSize="14"
        color="grey"
        display={"flex"}
        alignItems="center"
        gap="4"
        cursor={"pointer"}
      >
        <Box>
          <Text>Like</Text>
        </Box>
        <Text
          color={input ? "blue" : "grey"}
          textDecoration={input ? "underline" : "none"}
          _hover={{
            color: "blue",
          }}
        >
          Comment
        </Text>
        <Text color="grey">1</Text>
      </Box>

      {/* ==========Commwnt================== */}

      <Grid ml="14"  display={"flex"} alignItems="center">
        <Box
          fontSize={"23px"}
          borderRadius="50px"
          w="40px"
          ml="5"
          mt="2"
          // h="10"
          // display={input ? "none" : "block"}
        >
          <Image
            w="45px"
            borderRadius={"50px"}
            src={
              "https://bitrix24in.netlify.app/static/media/section_on_premise.jpg.62d1c746871007a2f080.webp"
            }
          />
        </Box>

        {/* -------------------- (Comment Part) --------- */}
        <SimpleGrid
          bg={"#ffffff"}
          width="75%"
          ml="0px"
          mt={4}
          pt="3"
          pb="5"
          borderRadius="10"
        >
          {/* ------------------- (Input) --------------------- */}
          <Input
            // onClick={() => setInput(!input)}
            textAlign={"left"}
            ml="6"
            mt="0"
            w={"90%"}
            fontSize={"17"}
            // display={input ? "none" : "block"}
            color="#4d545b"
            placeholder="Add Comment ..."
            borderColor={"grey"}
            borderRadius="30"
          />
        </SimpleGrid>

        <Button colorScheme={"messenger"}>Comment</Button>
      </Grid>
    </Box>
  );
};

export default FeedsPost;
