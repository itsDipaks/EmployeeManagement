import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp} from "react-icons/io5";
import {AiOutlineFundProjectionScreen} from "react-icons/ai";
import {RiAdminFill} from "react-icons/ri";
import {FaTasks} from "react-icons/fa";
import {SiTodoist} from "react-icons/si";
import {BsPostcard} from "react-icons/bs";
import {ReactElement} from "react";

const Feature = ({text, icon, iconBg}) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function DisplayInfo() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{base: 1, md: 2}} spacing={10}>
        <Stack spacing={4}>
          <Heading>About Product</Heading>
          <Text align={"start"} color={"gray.500"} fontSize={"lg"}>
            In this app we provide a sevral fetures which you can used to
            increase the productivity and performance of employee and managers in the 
            organization.
            <br/>
            Here are some of the feature,
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={BsPostcard} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Feeds "}
            />
            <Feature
              icon={
                <Icon as={RiAdminFill} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Admin Dashboard"}
            />
            <Feature
              icon={<Icon as={AiOutlineFundProjectionScreen} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Project Management Dashboard"}
            />
            <Feature
              icon={
                <Icon as={FaTasks} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Project Task Managment"}
            />
            <Feature
              icon={
                <Icon as={SiTodoist} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Todo Managment"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
