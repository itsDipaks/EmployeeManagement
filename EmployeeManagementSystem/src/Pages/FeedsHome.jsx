import React from 'react'
import { useSelector } from 'react-redux';
import AdminMassage from '../Components/FeedsDashbordCompo/AdminMassage'
import FeedsPost from '../Components/FeedsDashbordCompo/FeedsPost'
import styles from "./EmployeePages/Styles/Feed.module.css"
import { Box } from '@chakra-ui/react';
const FeedsHome = () => {


  let {token ,loading, isadmin} = useSelector((store) => store.Auth);

  
  return (
    <>
      <Box className={styles.Feedpagediv}>
        {isadmin && token ?   <AdminMassage />:""}
        {/* =========Feeds============ */}
    <FeedsPost/>
    </Box>
    </>
  )
}

export default FeedsHome