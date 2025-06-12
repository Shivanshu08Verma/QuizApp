import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="main-page">
      <div className="main-content"></div>
      <Link className="faltu" to="/topic">
        <button className="start">Let's Start</button>
      </Link>
    </div>
  );
}
