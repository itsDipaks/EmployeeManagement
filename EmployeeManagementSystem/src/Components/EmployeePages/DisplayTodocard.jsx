import React from "react";
import {Badge, Box, Flex, Spacer, Tag, Text, VStack} from "@chakra-ui/react";
import {TiDelete} from "react-icons/ti";
import {Draggable} from "react-beautiful-dnd";

const DisplayTodocard = ({Todo, el, time, DueDate, Priority, index}) => {




    



    return (
    <>
      <Draggable draggableId={`${el._id}`} key={el._id} index={index}>
        {(provided, snapshot) => (
          <Box
            border={"1px"}
            width={"28vw"}
            // m={"auto"}
            m={4}
            p={4}
            rounded={"10px"}
            data-aos="fade-up"
            bg={"primaryblue.20"}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <Flex
              w={"100%"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text fontSize={"1.2rem"} fontWeight={"semibold"}>
                {Todo}
              </Text>
              <TiDelete
                onClick={() => RemoveTodo(el)}
                cursor={"pointer"}
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  color: "lightblue",
                }}
              />
            </Flex>
            <Flex
              justifyContent={"space-between"}
              w={"100%"}
              alignItems={"center"}
            >
              <Flex fontSize={"0.7rem"} gap={4} alignItems={"center"}>
                <Text fontSize={"0.7rem"} color={"gray"}>
                  {" "}
                  Time : {time}
                </Text>
                <Text fontSize={"0.7rem"} color={"gray"}>
                  {" "}
                  Date : {DueDate}
                </Text>
              </Flex>
              <Box>
                <Badge
                  variant="outline"
                  bg={
                    Priority == "1"
                      ? "red"
                      : Priority == "2"
                      ? "primaryblue.100"
                      : "green"
                  }
                  color={"white"}
                  pl={2}
                  pr={2}
                >
                  {Priority == "1" ? "High" : Priority == "2" ? "Mid" : "Low"}
                </Badge>
              </Box>
            </Flex>
            {provided.placeholder}
          </Box>
        )}
      </Draggable>
    </>
  );
};

export default DisplayTodocard;
