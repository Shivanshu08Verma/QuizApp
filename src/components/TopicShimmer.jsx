import React from "react";

export default function TopicShimmer() {
  return (
    <div className="shimmertopic">
      <div className="buton"></div>
      {Array.from({length:20}).map((el,i) =>{
        return(
            <div key={i} className="Shimmertopic">
                <div className="maintoshim"></div>
            </div>
        )
      })}
    </div>
  );
}
