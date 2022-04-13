import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestion] = useState([]);

  useEffect(() => {
    async function fetchQuestion() {
      // database related works
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoID + "/questions");
      const quizQuery = query(
        quizRef,
        orderByKey(),
        startAt("" + 1),
        limitToFirst(8)
      );

      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(quizQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuestion((prevQuestions) => {
            return [...prevQuestions, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchQuestion();
  }, [videoID]);

  return {
    loading,
    error,
    questions,
  };
}
