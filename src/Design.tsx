import styled from "styled-components";


const StyledQuestionCard = styled.div`

&.question-card {
  margin:40px 150px 20px 150px;
  padding:25px;
  border: 1px solid;
border-radius: 15px;
text-align: center;
.question-text {
  font-size: 30px;
}
.head{
  font-size:50px;
  background: #80a6fd;
}
.answer-field{
  margin: 20px;
}
}`

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export {StyledQuestionCard, style};