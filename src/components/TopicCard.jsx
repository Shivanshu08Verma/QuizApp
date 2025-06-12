import React from "react";
import { Link } from "react-router-dom";

export default function ({ id, title }) {
  return (
    <div className="topic-card">
      <Link to={`/question/${id}/${encodeURIComponent(title)}`} state={{ id }}>
        <button className="topic-card-button">{title}</button>
      </Link>
    </div>
  );
}
