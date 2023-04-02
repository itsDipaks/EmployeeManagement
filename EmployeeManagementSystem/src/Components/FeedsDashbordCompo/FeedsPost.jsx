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
import {
  CommentonFeed,
  Deletefeed,
  GetAllFeeds,
} from "../../Redux/Feeds/Feeds.action";
import {CiCircleRemove, CiSquareRemove} from "react-icons/ci";
import {BiDislike, BiLike} from "react-icons/bi";
import {AiTwotoneDislike, AiTwotoneLike} from "react-icons/ai";
import styles from "../../Pages/EmployeePages/Styles/Feed.module.css";
const FeedsPost = () => {
  const [input, setInput] = useState(false);
  const [follow, setFollow] = useState(false);
  const [like, setLike] = useState(false);
  const [value, setValue] = useState("");
  let [FeedId, SetFeedId] = useState("");

  const [CommentMsg, SetCommentMsg] = useState([]);
  const [commentlike, setcommentlike] = useState(false);
  const [showcommentbox, setshowcommentbox] = useState(false);
  const [commentdislike, setcommentdislike] = useState(true);
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
    dispatch(CommentonFeed(CommentMsg, FeedId, name, email));
  };

  let deletefeed = (el) => {
    dispatch(Deletefeed(el._id));
  };

  return (
    <>
      {FeedsData?.map((el) => (
        <Box
          data-aos="fade-right"
          m="auto"
          w={"75%"}
          bg="#E6E6FA"
          mt="4"
          p={4}
          borderRadius={24}
          boxShadow="xl"
        >
          {/* ==========Intro============ */}
          <Box
            display={"flex"}
            alignItems="center"
            justifyContent={"space-between"}
            pr={4}
          >
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
                  {el?.feedAuthor}
                  {isadmin ? (
                    <span style={{color: "grey"}}>{">"} To all employees</span>
                  ) : (
                    <span style={{color: "grey", fontSize: "0.81rem"}}>
                      {" >"} Admin
                    </span>
                  )}
                </Text>
                <Text color={"grey"} fontSize={13} textAlign={"left"}>
                  {/* {day} {time} */}
                  {el?.createdAt}
                </Text>
              </Box>
            </Box>

            {/* <Button>Delete</Button> */}
            {isadmin ? (
              <CiSquareRemove
                className={styles.removefeedbtn}
                onClick={() => deletefeed(el)}
              />
            ) : (
              ""
            )}
            {/* <CiCircleRemove w={"44rem"} p="1rem" cursor={"pointer"} border={"1px"} h={"17rem"}/> */}
          </Box>

          {/* ===========Feed Details========== */}

          {/* <Box w={"90%"}>
      //   <Image
      //     w={"60%"}
      //     // h="50vh"
      //     src="https://bitrix24in.netlify.app/static/media/section_on_premise.jpg.62d1c746871007a2f080.webp"
      //     alt="feedimage"
      //   />
      // </Box> */}

          <Text w={"90%"} m="auto" mt="4" fontSize={20} textAlign={"start"}>
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
              <Text
                _hover={{
                  color: "blue",
                }}
              >
                Like
              </Text>
            </Box>
            <Text
              _hover={{
                color: "blue",
              }}
              onClick={() => setshowcommentbox(true)}
            >
              Comment
            </Text>
            <Text color="grey">1</Text>
          </Box>

          {/* ================ Show Comments=================== */}
          {el?.comments?.map((val) => (
            <Box
              borderBottom={"1px"}
              borderColor={"gray.200"}
              w={"50%"}
              p={1}
              ml={"14"}
            >
              <Grid display={"flex"} alignItems="center" gap={4}>
                <Box
                  fontSize={"23px"}
                  borderRadius="50px"
                  w="40px"
                  ml="5"
                  mt="2"
                >
                  <Image
                    w="35px"
                    borderRadius={"50px"}
                    src={
                      "data:image/jpeg;base64,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"
                    }
                  />
                </Box>
                <Box w="70%">
                  <Text
                    fontWeight={500}
                    fontSize={14}
                    color="#246ab1"
                    textAlign={"left"}
                    cursor="pointer"
                  >
                    {val?.CommentAuthor}
                  </Text>
                  <Text color={"black"} fontSize={16} textAlign={"left"} mt={1}>
                    {/* {day} {time} */}
                    {val?.CommentMasg}
                  </Text>
                </Box>

                <SimpleGrid bg={"#ffffff"}>
                  {email === val?.AutherEmail ? (
                    <CiCircleRemove
                      style={{width: "1.4rem", height: "1.4rem"}}
                      cursor={"pointer"}
                      color="red"
                    />
                  ) : (
                    ""
                  )}
                </SimpleGrid>
              </Grid>

              <Box
                display={"flex"}
                justifyContent={"space-between"}
                textAlign={"start"}
                ml="20"
                mt={2}
                w={"10%"}
              >
                {commentlike ? (
                  <BiLike className={styles.unchecked} />
                ) : (
                  <AiTwotoneLike className={styles.checked} />
                )}
                {commentdislike ? (
                  <BiDislike className={styles.unchecked} />
                ) : (
                  <AiTwotoneDislike className={styles.checked} />
                )}
              </Box>
            </Box>
          ))}

          {/* ==========Commwnt================== */}
          {showcommentbox ? (
            <Box bg={"#E6E6FA"}     data-aos="fade-down">
              {!isadmin ? (
                <Grid
                  ml="6"
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"space-around"}
                >
                  <Box
                    fontSize={"23px"}
                    borderRadius="50px"
                    w="40px"
                    ml="5"
                    mt="2"
                  >
                    <Image
                      w="45px"
                      borderRadius={"50px"}
                      src={
                        "https://bitrix24in.netlify.app/static/media/section_on_premise.jpg.62d1c746871007a2f080.webp"
                      }
                    />
                  </Box>

                  <SimpleGrid
                    width="75%"
                    m={"auto"}
                    ml="0px"
                    mt={4}
                    pt="3"
                    pb="5"
                    borderRadius="10"
                  >
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

                  <Box
                    display={"flex"}
                    justifyContent={"space-evenly"}
                    w={"30%"}
                  >
                    <Button onClick={commentmassage} colorScheme={"messenger"}>
                      Comment
                    </Button>

                    <Button
                      onClick={() => setshowcommentbox(false)}
                      colorScheme={"red"}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Grid>
              ) : (
                ""
              )}
            </Box>
          ) : (
            ""
          )}
        </Box>
      ))}
    </>
  );
};

export default FeedsPost;
