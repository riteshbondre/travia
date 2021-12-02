import React, { useState } from 'react';
import './App.css';





function App() {
  const [question, setQuestion] = useState(null);
  const [all, setAll] = useState()
  const [userAnswer, setUserAnswer] = useState("")
  const [answer, setAnswer] = useState("")
  const [result, setResult] = useState("")
  const fetchData = async () => {
    const endpoint = `https://jservice.io/api/random`;
    const data = await (await fetch(endpoint)).json();
    console.log(data)
    setAll(data)
    setQuestion(data[0].question)
    setAnswer(data[0].answer)
    // return data.map((question: Question) => ({
    //   ...question,
    //   answer: question?.answer

    // }))


  };
  const getAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setUserAnswer(event.target.value)
  }
  console.log(answer)

  const checkAnswer = () => {
    if (userAnswer === answer) {
      setResult("true")
    } else {
      setResult("false")
    }

  }
  return (
    <div className="App">
      <h1>Trivia</h1>
      <button onClick={fetchData}>get</button>
      <div>{question}</div>
      <label>write your answer</label>
      <input name="answer" onChange={getAnswer}></input>
      <button onClick={checkAnswer}>check</button>
      <h3>Result :{result}</h3>
      {/* {all && (<div>
        {all.map((quest, index) => (
          <div key={index}>{quest}</div>
        ))}
      </div>
      )

      } */}

    </div>
  );
}

export default App;
