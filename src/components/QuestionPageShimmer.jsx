import React from "react";

export default function QuestionPageShimmer() {
  return (
    <div className="question-shimmer-main">
      {Array.from({ length: 15 }).map((el, i) => {
        return (
          <div key={i} className="option-shimmer-main">
            <div className="opt-shim">
              <div className="optionrr"></div>
              <div className="optionrr"></div>
              <div className="optionrr"></div>
              <div className="optionrr"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
