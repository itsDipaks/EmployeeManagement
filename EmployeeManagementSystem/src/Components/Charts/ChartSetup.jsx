import React from 'react'
import { useState } from 'react';
import { UserData } from './Data';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const ChartSetup = ({data}) => {
    const [userData, setUserData] = useState({
        labels:["Pending ","Completed "],
        datasets: [
          {
            label: "Task ",
            data:data,
            backgroundColor: [
              "red",
              "#32CD32",
            ],
            borderColor: "white",
            borderWidth: 1,
          },
        ],
      });


  return (
    <div>
        

        <Pie data={userData} />
    </div>
  )
}

export default ChartSetup