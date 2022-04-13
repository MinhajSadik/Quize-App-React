import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import useQuestions from "../../Hooks/useQuestions";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "QUESTION":
      action.payload.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.payload;
    case "ANSWER":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.payload;
      return questions;
    default:
      return state;
  }
};

export default function Quiz() {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { question, loading, error } = useQuestions(id);

  const [qna, dispatch] = useReducer(reducer, initialState);

  //dispatch({ type: "QUESTION", payload: question });
  useEffect(() => {
    dispatch({
      type: "QUESTION",
      payload: question,
    });
  }, [question]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "ANSWER",
      questionID: currentQuestion,
      optionIndex: index,
      payload: e.target.checked,
    });
  }

  return (
    <>
      <h1>{qna[currentQuestion].title}</h1>
      <h4>Question can have multiple answers</h4>
      <Answers
        options={qna[currentQuestion].options}
        handleChange={handleAnswerChange}
      />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
}
