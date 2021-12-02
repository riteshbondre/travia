
export type Question = {
    answer: string;
    question: string;
  };
  
 

export const fetchQuizQuestions = async () => {
    const endpoint = `https://jservice.io/api/random`;
    const data = await (await fetch(endpoint)).json();
    console.log(data)
    return data.map((question: Question) => ({
      ...question,
      answers: question.answer
      
    }))
    console.log(data[0].question)
    
  };
