import React, { useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import useQuestions from "../../Hooks/useQuestions";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "QUESTION":
      return action.payload.forEach((question) => {
        return question;
      });
  }
};

export default function Quiz() {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { question, loading, error } = useQuestions(id);

  const [qna, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Pick three of your favorite start wars films</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
}
