import { faker } from "@faker-js/faker";
import axios from "axios";

import { useState, useEffect } from "react";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import Product from "../Subcomponents/Products/Product";

import CaffeinatedProduct from "../Subcomponents/Products/CaffinatedProduct";

import Style from "./RightSection.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RightSection = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };


    // const AdminPermission = () => {
    //     let payload = {
    //         requestStatus: "true"
    //     }

    //     Axios.patch('/api/adminreqauth/:id' + activeUser, payload)
    //         .then((res) => {
    //             if (res) {
    //                 console.log("User Updated");
    //             }
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }


  // Caffeinated 
  // ==========================================================================

  // useEffect(() => {

  //   axios.get('/api/getuserinput/', (res, req) => {
  //     const data = res.data;
  //     console.log(data);
  // })

  // }, []);

   // ==========================================================================


  return (
    <div className={Style.Section}>
      <br></br>
      <h1 className={Style.Heading}>Your Devices</h1>
      <br></br>
      <br></br>
      <div className={Style.break}>
        <Product
          icon={"http://www.mypicx.com/uploadimg/1312875436_05012011_2.png"}
          title={"Biggest Fan"}
          data={"20"}
          dataType={"Degrees Celsius"}
          variable={""}
        />
        <Product
          icon={"http://www.mypicx.com/uploadimg/1312875436_05012011_2.png"}
          title={"HandyStandy"}
          data={"30"}
          dataType={"Notifications Today"}
          variable={""}
        />
        <Product
          icon={"http://www.mypicx.com/uploadimg/1312875436_05012011_2.png"}
          title={"BrightLite"}
          data={"20"}
          dataType={""}
          variable={""}
        />
        <Product
          icon={"http://www.mypicx.com/uploadimg/1312875436_05012011_2.png"}
          title={"Biggest Fan"}
          data={"20"}
          dataType={"Degrees Celsius"}
          variable={""}
        />
        <CaffeinatedProduct
          icon={"http://www.mypicx.com/uploadimg/1312875436_05012011_2.png"}
          title={"Caffinated"}
          data={"20"}
          dataType={"Degrees Celsius"}
          variable={""}
        />
      </div>
      <br></br>
      <h1 className={Style.Heading}>Your Data Today</h1>
      <br></br>
      <br></br>
      <div className={Style.breakTwo}>
        <Line options={options} data={data} />
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default RightSection;
