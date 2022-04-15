import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Analysis from "../Analysis";
import useAnswers from "../Hooks/useAnswers";
import Summary from "../Summary";

export default function Result() {
  const { id } = useParams();
  const { location } = useHistory();
  const { state } = location;
  const { qna } = state;
  const { loading, error, answers } = useAnswers(id);
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error!</div>}
      {answers && answers.length > 0 && (
        <>
          <Summary />
          <Analysis />
        </>
      )}
    </>
  );
}
