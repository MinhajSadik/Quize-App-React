import _ from "lodash";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useAnswers from "../../Hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result() {
  const { id } = useParams();
  const { location } = useHistory();
  const { state } = location;
  const { qna } = state;
  const { loading, error, answers } = useAnswers(id);
  function calculate() {
    let score = 0;
    answers.forEach((question, index1) => {
      let correctIndexes = [];
      let chekcedIndexes = [];
      question.options.forEach((option, index2) => {
        if (option.correct) {
          correctIndexes.push(index2);
        }
        if (qna[index1].options[index2].checked) {
          chekcedIndexes.push(index2);
          option.checked = true;
        }
      });
      if (_.isEqual(correctIndexes, chekcedIndexes)) {
        score += 5;
      }
    });
    return score;
  }

  const userScore = calculate();
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error!</div>}
      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
}
