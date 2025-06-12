import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export default function Result() {
  const location = useLocation();
  const { questions, userOption } = location.state || {};
  const [correct, setCorrect] = useState(0);

  useEffect(() => {
    let count = 0;
    userOption.forEach((userAns) => {
      if (userAns.optsel === userAns.corr) {
        count++;
      }
    });
    setCorrect(count);
  }, [userOption]);

  const getUserAnswer = (qn) => {
    return userOption.find((u) => u.qn === decodeHTML(qn));
  };

  return (
    <div className="main-head-page2">
      <Link className="faltu" to='/'><button className="Home-page">Home Page</button></Link>

      <div className="diff-card">
        <h3>No. of Attempted Questions: {userOption?.length || 0}</h3>
        <h3>No. of Unattempted Questions: {15 - (userOption?.length || 0)}</h3>
        <h3>No. of Correct Answers: {correct}</h3>
        <h3>No. of Incorrect Answers: {(userOption?.length || 0) - correct}</h3>
      </div>

      {questions.map((question, index) => {
        const decodedQn = decodeHTML(question.question);
        const userAns = getUserAnswer(question.question);
        const userSelected = userAns?.optsel;
        const correctAnswer = decodeHTML(question.answer);

        return (
          <div className="main-pageques2" key={index}>
            <h3 className="heading-topic2">
              {`Q${index + 1}. `}
              {decodedQn}
            </h3>

            {question.options.map((option, ind) => {
              const decodedOpt = decodeHTML(option);
              const isCorrect = decodedOpt === correctAnswer;
              const isSelected = decodedOpt === userSelected;

              let className = "option-page2";
              let status = "";

              if (userSelected) {
                if (isSelected && isCorrect) {
                  className += " correct";
                  status = "  ✅ You are correct";
                } else if (isSelected && !isCorrect) {
                  className += " incorrect";
                  status = "  ❌ Your answer";
                } else if (isCorrect) {
                  className += " correct";
                  status = "  ✅ Correct answer";
                }
              } else {
                // Unattempted
                if (isCorrect) {
                  className += " correct";
                  status = "  ✅ Correct answer";
                }
              }

              return (
                <div className="main-option2" key={ind}>
                  <label className={className}>
                    <input
                      className="marking-page2"
                      type="radio"
                      name={`question-${index}`}
                      value={decodedOpt}
                      checked={isSelected}
                      readOnly
                    />
                    {decodedOpt}
                    <span>{status}</span>
                  </label>
                </div>
              );
            })}

            {!userSelected && (
              <p style={{ color: "orange", marginLeft: "10px" }}>
                ⚠️ You did not attempt this question.
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
