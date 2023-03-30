import React from 'react'
import { useSelector } from 'react-redux';
import AdminMassage from '../Components/FeedsDashbordCompo/AdminMassage'
import FeedsPost from '../Components/FeedsDashbordCompo/FeedsPost'

const FeedsHome = () => {


  let {token , isadmin} = useSelector((store) => store.Auth);

  return (
    <div>
        {isadmin && token ?   <AdminMassage/>:""}
    


        {/* =========Feeds============ */}
    
    <FeedsPost/>
    </div>
  )
}

export default FeedsHome