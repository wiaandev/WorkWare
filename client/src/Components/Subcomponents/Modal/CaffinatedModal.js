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
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import Button from "../Button/Button";
import Style from "./Modal.module.scss";
import axios from 'axios';

import '../Caffinated.css';

import { useEffect } from "react";



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const CaffinatedModal = (props) => {
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


    const [inputId, setInputId] = useState()

    const [cupData, setCupData] = useState()

  // Caffeinated 
  // ==========================================================================

//   Get Cup Ammount 

useEffect(() => {

    axios.get('http://localhost:80/api/getcups')
        .then(res => {
            const data = res.data[0]._id;
            setInputId(data);
            setCupData(res.data.cupsDrunk)
        })

  }, []);

//   Get User Input Val 

  useEffect(() => {

    axios.get('http://localhost:80/api/getuserinput')
        .then(res => {
            const data = res.data[0]._id;
            setInputId(data);

            console.log("This is the User Input Get: " + inputId);

        })

  }, []);

   // ==========================================================================


    const GetVal = (e) => {
        let userInput = e.target.value

        let payload = {
            userInput: userInput 
          }

        console.log(userInput)

        axios.patch('http://localhost:80/api/updateuserinput/' + inputId, payload)
            .then((res) => {
                    console.log("Updated Input Val");
            })
            .catch(function (error) {
                console.log(error);
            });

    
    }

    return (
        <div className={props.open ? Style.ModalCon : "hide"}>
            <div className={Style.Modal}>
                <h1>{props.data}</h1>
                <Button onClick={() => props.setOpen(!props.open)}>Close</Button>
                <input type='number' className='input' placeholder='Enter Coffee Ammount' onBlur={GetVal}></input>
                <br></br>
                <div className={Style.ChartContainer}>
                    <Bar options={options} data={data} />;
                </div>
            </div>
        </div>
    );
};

export default CaffinatedModal;
