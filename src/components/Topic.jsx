import React, { useEffect, useState } from "react";
import TopicCard from "./TopicCard";
import TopicShimmer from "./TopicShimmer";

export default function Topic() {
  const [topic, setTopic] = useState([]);
  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((data) => {
        setTopic(data.trivia_categories);
      });
  }, []);
  if (topic.length === 0) {
    return <TopicShimmer />
  }
  //   console.log(topic)
  return (
    <div className="topic-page">
      <button className="back-button" onClick={() => history.back()}>
        <img className="back-img" src="/back-arrow.png" alt="back-arrow" />
        Back
      </button>
      <h1 className="select-topic">Select a Topic</h1>
      {topic.map((subject,index) => {
        return <TopicCard key={index} id={subject.id} title={subject.name} />;
      })}
    </div>
  );
}
