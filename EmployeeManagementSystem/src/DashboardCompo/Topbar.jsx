import { Box, Button, useColorMode } from "@chakra-ui/react"
import SwitchTheam from "../Components/SwitchTheam"

const Topbar = ({pannel}) => {
    return (
    <>
 <Box border="1px" height="50px">
<Button onClick={()=>pannel(false)}>Home</Button>
<SwitchTheam/>
 </Box>
    </>
  )
}

export default Topbar





