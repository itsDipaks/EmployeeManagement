import { Box, Button, useColorMode } from "@chakra-ui/react"

const Topbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
    return (
    <>
 <Box border="1px" height="50px">

 <Button onClick={toggleColorMode}>
         {colorMode === 'light' ?"Dark": "light"}
      </Button>
 </Box>
    </>
  )
}

export default Topbar





