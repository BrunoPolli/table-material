import React, { useState, useEffect } from "react";
import { getAllQuestions } from "../services/questions-http.service";
import { QuestionsTable } from "./QuestionTable.component";

const QuestionsList = () => {
  const [ rows, setRows ] = useState([]);
  
  useEffect(() => {
    getAllQuestions().then(res => {
      setRows(res.data)
      console.log("data> ", res.data)
    });
  }, []);

  return(
    <QuestionsTable rows={rows} />
  );
}

export default QuestionsList;