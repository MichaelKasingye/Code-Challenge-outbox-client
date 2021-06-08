import React, { useEffect, useState } from 'react'
import './squareroot.css';
import axios from "axios";
function Squareroot() {
    const [name, setName] = useState("");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    
const data = {
    name: name,
    question: question,
    answer: answer
}
const calculationType = "Square Root";


useEffect(() => {
    
    setName(calculationType);
    var squareRoot =()=> Math.sqrt(question);
    setAnswer(squareRoot);

    
}, [question])

    function submitHandler (e) {
        e.preventDefault();

        // squareRoot();
        console.log(data);
         axios.post('http://localhost:5000/api/items/', data)
        .then(response =>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error);
        })
        setQuestion("");
    }


    return (
        <div>
            <div className="Squareroot">.</div>
            <div className="title">Team</div>

            <form onSubmit={submitHandler}>
            <input 
            type="number"
            placeholder="number to calculate"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            />
            <button type="submit">Reset</button>
            </form>

            <div className="page-results">
                <p><span>Calculation Type:</span><span>{name}</span></p>
                <p><span>Asked number:</span><span>{question}</span></p>
                <p><span>Answer:</span><span>{answer}</span></p>
            </div>

        </div>
    )
}

export default Squareroot
