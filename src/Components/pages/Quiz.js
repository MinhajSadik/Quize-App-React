import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import useQuestions from "../../Hooks/useQuestions";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.payload.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.payload;
    case "answer":
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
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const history = useHistory();

  //dispatch({ type: "QUESTION", payload: question });
  useEffect(() => {
    dispatch({
      type: "questions",
      payload: questions,
    });
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      payload: e.target.checked,
    });
  }

  //handle when user clicks the next button
  function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  }

  //handle when user clicks the previous button to get back the previous question
  function prevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  }

  //calculate the score of the quiz
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  // submit quiz
  async function submitQuiz() {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);
    await set(resultRef, {
      [id]: qna,
    });
    history.push({
      pathname: `/result/${id}`,
      state: {
        qna,
      },
    });
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            next={nextQuestion}
            prev={prevQuestion}
            progress={percentage}
            submit={submitQuiz}
          />
          <MiniPlayer />
        </>
      )}
    </>
  );
}
