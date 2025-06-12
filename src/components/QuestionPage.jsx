import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import QuestionPageShimmer from "./QuestionPageShimmer";

export default function QuestionPage() {
  const { id, title } = useParams();
  const [questions, setQuestions] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [userOption, setUserOption] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    condition ? setValue("New Value") : null;
  };

  const handleSubmitClick = () => {
    setShowConfirm(true);
  };

  const handleConfirmYes = () => {
    setShowConfirm(false);
    navigate("/result", {
      state: {
        questions: questions,
        userOption: userOption,
      },
    });
  };

  const handleConfirmNo = () => {
    setShowConfirm(false);
  };
  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=15&category=${id}&type=multiple`)
      .then((res) => res.json())
      .then((data) => {
        const temp = data.results.map((ques) => ({
          question: ques.question,
          options: shuffle([ques.correct_answer, ...ques.incorrect_answers]),
          answer: ques.correct_answer,
        }));
        setQuestions(temp);
      });
  }, [id]);

  function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }

  if (questions.length === 0) {
    return <QuestionPageShimmer />;
  }
  function decodeHTML(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  return (
    <div>
      <div className={`main-head-page ${showConfirm ? "no-interaction" : " "}`}>
        <h1 className="topic-question">{decodeHTML(title)}</h1>
        {questions.map((question, index) => (
          <div className="main-pageques" key={index}>
            <h3 className="heading-topic">
              {`Q${index + 1}. `}
              {decodeHTML(question.question)}
            </h3>
            {question.options.map((option, ind) => (
              <div className="main-option" key={ind}>
                <label className="option-page">
                  <input
                    className="marking-page"
                    type="radio"
                    name={`question-${index}`}
                    value={decodeHTML(option)}
                    onClick={() => {
                      const selectedOption = decodeHTML(option);
                      const correctAnswer = decodeHTML(question.answer);
                      setUserOption((prev) => {
                        const filtered = prev.filter(
                          (item) => item.qn !== question.question
                        );
                        return [
                          ...filtered,
                          {
                            qn: decodeHTML(question.question),
                            optsel: decodeHTML(option),
                            corr: decodeHTML(question.answer),
                          },
                        ];
                      });
                    }}
                  />
                  {decodeHTML(option)}
                </label>
              </div>
            ))}
          </div>
        ))}
        <button className="submit-button" onClick={handleSubmitClick}>
          Submit
        </button>
      </div>
      {showConfirm && (
        <div className="confirmation-box">
          <h3 className="text-quit">Are you sure you want to submit?</h3>
          <div className="confirm-buttons">
            <button className="yes-button" onClick={handleConfirmYes}>
              Yes
            </button>
            <button className="no-button" onClick={handleConfirmNo}>
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
