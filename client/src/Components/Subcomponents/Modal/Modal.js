import { faker } from "@faker-js/faker";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React, {useState} from "react";
import { Bar } from "react-chartjs-2";
import Button from "../Button/Button";
import Style from "./Modal.module.scss";
import axios from 'axios';



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Modal = (props) => {
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
        text: "Chart.js Bar Chart",
      },
    },
  };

  const ledToggle = () => {
    let state = ledState;
    let name = "Wiaan Duvenhage"

    if(state !== true){
      setLedState(true)
      
      console.log("Led true");
   }else{
      state = false
      setLedImage();
      setLedState(false)
      console.log("Led false");
   }
   console.log(ledState);
    let payload = {
      red: 0,
      green: 0,
      blue: 0
  }
    
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

const [ledValue, setLedValue] = useState("Loading...");
const [ledState, setLedState] = useState();
const [ledImage, setLedImage] = useState();

  return (
    <div className={props.open ? Style.ModalCon : "hide"}>
      <div className={Style.Modal}>
        <h1>{props.data}</h1>
        <Button onClick={() => props.setOpen(!props.open)}>Close</Button>
        <Button onClick={() => props.update()}>{props.buttonName}</Button>
        <br></br>
        <div className={Style.ChartContainer}>
          <Bar options={options} data={data} />;
        </div>
      </div>
    </div>
  );
};

export default Modal;
