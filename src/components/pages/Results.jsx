import React, { useEffect, useState } from 'react'
import './results.css';
import axios from "axios";

function Results() {
    const [roots, setRoots] = useState("");

    useEffect(() => {
        fetch('http://localhost:5000/api/items/')
        .then((response) => response.json())
        .then(response =>{
            // console.log(response);
            setRoots(response)
        })
        .catch(error =>{
            console.log(error);
        })
    }, [])
        const data = roots;
    return (
        <div>
            {console.log(data)}
            <div>.</div>
            <div className="title">Results</div>
                <table>
                <tr>
                    <th>Type of Calculation</th>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Date</th>
                </tr>
                {typeof data != "undefined"?
            ([...data].map(info => (
                    <tr key={info._id}>
                        <td>{info.name}</td>
                        <td>{info.question}</td>
                        <td>{info.answer}</td>
                        <td>{info.date}</td>
                        </tr>
                ))):"Undefined"
            }
               
                </table>
            {/* {typeof data != "undefined"?
            ([...data].map(info => (
                    <div key={info._id}>
                        <p>{info.name}</p>
                        <p>{info.question}</p>
                        <p>{info.answer}</p>
                        <p>{info.date}</p>

                        </div>
                ))):"Undefined"
            
            } */}
            {/* {[data].map(info => (
                    <p key={info._id}>
                        {info.name}
                    </p>
                ))} */}
        </div>
    )
}

export default Results;
