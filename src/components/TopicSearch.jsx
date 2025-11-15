import React, { useState } from "react";

const TopicSearch = () => {
  const [search, setSearch] = useState("");

  const topics = [
    { id: 1, name: "Quantum Mechanics", category: "Physics" },
    { id: 2, name: "Human Physiology", category: "Biology" },
    { id: 3, name: "Number Theory", category: "Mathematics" },
    { id: 4, name: "Indian Polity", category: "Civics" },
    { id: 5, name: "Organic Chemistry", category: "Chemistry" },
  ];

  const gradientCards = [
    "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    "linear-gradient(135deg, #a18cd1, #fbc2eb)",
    "linear-gradient(135deg, #fcb69f, #ffecd2)",
    "linear-gradient(135deg, #84fab0, #8fd3f4)",
    "linear-gradient(135deg, #ffdde1, #ee9ca7)",
  ];

  const filteredTopics = topics.filter((topic) =>
    topic.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ width: "80%", margin: "40px auto", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Browse Topics
      </h1>

      <input
        type="text"
        placeholder="Search by topic name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "15px",
          fontSize: "18px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
          marginBottom: "25px",
        }}
      />

      {filteredTopics.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "18px" }}>
          No topics found
        </p>
      ) : (
        filteredTopics.map((topic, index) => (
          <div
            key={topic.id}
            style={{
              width: "70%",
              margin: "0 auto 20px auto",
              padding: "20px",
              borderRadius: "16px",
              background: gradientCards[index % gradientCards.length],
              boxShadow: "0px 5px 15px rgba(0,0,0,0.12)",
              color: "#000",
            }}
          >
            <h2 style={{ marginBottom: "5px" }}>{topic.name}</h2>
            <p style={{ opacity: 0.8 }}>{topic.category}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default TopicSearch;
