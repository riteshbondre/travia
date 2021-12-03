import React, { useState } from "react";
import "../Design.tsx";
import {StyledQuestionCard,style} from "../Design";
import { fetchData } from "../API";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


function QuestionCard() {
  const [all, setAll] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  
  const handleClose = () => {
    setOpen(false)
    window.location.reload();
  }
  

  React.useEffect(() => {
    fetchData().then((data) => {
      setAll(data);
      setAnswer(data[0].answer);
    });
  }, []);

  const getAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUserAnswer(event.target.value);
  };
  

  const checkAnswer = () => {
    setOpen(true)
    if (userAnswer !== "" && userAnswer === answer ) {
      setResult("Correct");
    } else {
      setResult("Incorrect");
    }
  };
  return (
    <StyledQuestionCard className="question-card ">
    <div >
      <h1 className="head">Trivia</h1>

      <div className="question-text">
        {all && (
          <div>
            {all.map((quest: any, id) => (
              <div  key ={id}>{quest?.question}</div>
            ))}
          </div>
        )}
      </div>
      <div className="answer-field">
      <label>write your answer :</label>
      <br></br>
      <input onChange={getAnswer} ></input>
      <br></br>
      </div>
    </div>
    <Button variant="contained"  onClick={checkAnswer}>check</Button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography align= "center" id="modal-modal-title" variant="h6" component="h3">
            Result : {result}
          </Typography>     
        </Box>
      </Modal>
    </StyledQuestionCard>
  );
}

export default QuestionCard;
