import React from 'react'
import StatsDashbord from '../../DashboardCompo/StatsDashbord'
import { useDispatch, useSelector } from 'react-redux';
import { AllEmployee } from '../../Redux/Employee/Employee.action';
import { useEffect } from 'react';

const Dashboardpanel = () => {

  let dispatch = useDispatch();
  let {employeeData} = useSelector(
    (store) => store.Storedata
  );

  useEffect(() => {
    showdata();
  }, [dispatch]);
 useEffect(() => {
    showdata();
  }, [dispatch]);

  let showdata= () => {
    dispatch(AllEmployee());
  };
console.log(employeeData)
  return (
    <div>
      <StatsDashbord employeeData={employeeData}/>
    </div>
  )
}

export default Dashboardpanel