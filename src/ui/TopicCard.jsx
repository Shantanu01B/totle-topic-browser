import React from "react";
import "../styles/topic.css";

const TopicCard = ({ name, category }) => {
  return (
    <div className="topic-card">
      <h3>{name}</h3>
      <span className="topic-category">{category}</span>
    </div>
  );
};

export default TopicCard;
