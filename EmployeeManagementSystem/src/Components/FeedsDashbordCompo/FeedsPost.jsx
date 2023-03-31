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
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {CommentonFeed, GetAllFeeds} from "../../Redux/Feeds/Feeds.action";

const FeedsPost = () => {
  const [input, setInput] = useState(false);
  const [follow, setFollow] = useState(false);
  const [like, setLike] = useState(false);
  const [value, setValue] = useState("");
  const [CommentMsg, SetCommentMsg] = useState([]);
  let [FeedId, SetFeedId] = useState("");
  let dispatch = useDispatch();

  let {loading, FeedsData} = useSelector((store) => store.FeedsData);

  let {token, error, isadmin, name, email} = useSelector((store) => store.Auth);

  console.log(FeedsData);
  useEffect(() => {
    dispatch(GetAllFeeds());
  }, []);
  let Commentonfeed = (e, el) => {
    SetCommentMsg(e.target.value);
    SetFeedId(el._id);
  };

  let commentmassage = () => {
    dispatch(CommentonFeed(CommentMsg, FeedId, name));
    console.log("yes");
  };
  return (
    <>
      {FeedsData?.map((el) => (
        <Box m="auto" w={"75%"} mt="4" border="1px">
          {/* ==========Intro============ */}
          <Box
            display={"flex"}
            alignItems="center"
            gap={"5"}
            w={"100%"}
            m="auto"
          >
            <Box fontSize={"28px"} w="45px" ml="5" mt="5">
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
                {isadmin ? (
                  <span style={{color: "grey"}}>{">"} To all employees</span>
                ) : (
                  ""
                )}
              </Text>
              <Text color={"grey"} fontSize={13} textAlign={"left"}>
                {/* {day} {time} */}
                {el?.createdAt}
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

          <Text w={"90%"} m="auto" mt="4" textAlign={"start"}>
            {el.Massage}
          </Text>

          {/* ============Feeds Like folloow============ */}
          <Box
            w="50%"
            mt={"5"}
            mb={"5"}
            ml="14"
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

          {/* ================ Show Comments=================== */}

          <Box>
            <Grid ml="14" display={"flex"} alignItems="center" gap={4}>
              <Box fontSize={"23px"} borderRadius="50px" w="40px" ml="5" mt="2">
                <Image
                  w="40px"
                  borderRadius={"50px"}
                  src={
                    "https://bitrix24in.netlify.app/static/media/section_on_premise.jpg.62d1c746871007a2f080.webp"
                  }
                />
              </Box>
              <Box w="40%">
                <Text
                  fontWeight={500}
                  fontSize={14}
                  color="#246ab1"
                  textAlign={"left"}
                  cursor="pointer"
                >
              {el?.comments?.map((val)=>
              
              
              )}
                </Text>
                <Text color={"black"} fontSize={16} textAlign={"left"}>
                  {/* {day} {time} */}
                  {el?.createdAt}
                </Text>
              </Box>

              {/* -------------------- (Comment Part) --------- */}
              <SimpleGrid
                bg={"#ffffff"}
                width="40%"
                ml="0px"
                mt={4}
                pt="3"
                pb="5"
                borderRadius="10"
              >
                {/* ------------------- (Input) --------------------- */}
                <Text></Text>
              </SimpleGrid>
            </Grid>
          </Box>

          {/* ==========Commwnt================== */}

          <Grid ml="6" display={"flex"} alignItems="center">
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
                textAlign={"left"}
                onChange={(e) => Commentonfeed(e, el)}
                ml="6"
                mt="0"
                w={"90%"}
                fontSize={"17"}
                color="#4d545b"
                placeholder="Add Comment ..."
                borderColor={"grey"}
                borderRadius="30"
              />
            </SimpleGrid>

            <Button onClick={commentmassage} colorScheme={"messenger"}>
              Comment
            </Button>
          </Grid>
        </Box>
      ))}
    </>
  );
};

export default FeedsPost;
