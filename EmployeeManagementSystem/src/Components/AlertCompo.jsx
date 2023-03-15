// import React from 'react'
// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     useDisclosure,
//     Button,
//   } from '@chakra-ui/react'
// import { useDispatch } from 'react-redux';
// import { userLogout } from '../Redux/Auth/Auth.action';
// import { useNavigate } from 'react-router-dom';
// const AlertCompo = ({onOpen,isOpen,onClose}) => {
//  let navigate=useNavigate()
//     let dispatch = useDispatch();
// let yeslogout=()=>{
//     dispatch(userLogout());
//     navigate("/login");
// }
//   return (
//     <div>
        
//         <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Logout</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//            Are U Sure ?
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme='blue' mr={3} onClick={onClose}>
//             No
//             </Button>
//             <Button variant='ghost' onClick={yeslogout} >Yes Logout</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </div>
//   )
// }

// export default AlertCompo

let MyAlert=()=>{


    return(
        <div>


        </div>
    )
}
export default MyAlert