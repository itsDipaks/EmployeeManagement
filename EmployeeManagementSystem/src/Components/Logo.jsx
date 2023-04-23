import React from 'react'
import { Avatar, Box, Flex, keyframes } from '@chakra-ui/react';
import logo from "../assets/Weblogo.png"
const Logo = () => {
    const size = '40px';
    const color = 'black';
  
    const pulseRing = keyframes`
      0% {
      transform: scale(0.33);
    }
    40%,
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
      `;
  return (
    <div>
        
        <Flex
      justifyContent="center"
      alignItems="center"
      h="full"
      w="full"
      p={2}
      overflow="hidden">
        
      {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
      <Box
        as="div"
        position="relative"
        w={size}
        h={size}
        _before={{
          content: "''",
          position: 'relative',
          display: 'block',
          width: '300%',
          height: '300%',
          boxSizing: 'border-box',
          marginLeft: '-100%',
          marginTop: '-100%',
          borderRadius: '50%',
          bgColor: color,
          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}>
        <Avatar
          src={logo}
          size="50%"
          position="absolute"
          top={0}
          left={0}
          border={"1px"}
          bg={"white"}
        />
      </Box>
    </Flex>
    </div>
  )
}

export default Logo