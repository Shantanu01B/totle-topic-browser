# 📚 TOTLE – Topic Browser (Frontend Developer Intern Round 1)

A clean, fast, and user-friendly React component that allows browsing and searching academic topics.  
This was built as part of the **TOTLE Frontend Developer Intern – Round 1 Coding Submission**.

---

## 🚀 Project Overview

This project implements a **Topic Search Component** where users can:

- View a list of topics
- Search topics by name (**case-insensitive**)
- See results update instantly as they type
- View beautifully styled **gradient topic cards**
- Get a “No topics found” message when there are no matches

The UI is purposely kept **simple, modern, and responsive**, representing a clean browsing experience similar to TOTLE’s Catalogue Management System.

---

## ✨ Features

### 🔍 **Real-time Search**
Filters topics instantly as the user types — fully case-insensitive.

### 🎨 **Colorful Gradient Topic Cards**
Each topic card has a unique soft gradient, giving a premium modern UI feel.

### ⚡ **Fast & Lightweight**
Pure React, no external libraries required.

### 📦 **In-Memory Data**
Topics are stored locally in an array (as required).

### ❌ **Graceful Empty State**
Shows a friendly message when no results are found.

---

## 🗂 Folder Structure

totle-topic-browser/
│
├── src/
│ ├── components/
│ │ └── TopicSearch.jsx
│ ├── App.jsx
│ ├── index.js
│
├── public/
│
├── package.json
│
├── README.md
└── demo-video.mp4

## 🛠️ How to Run the Project Locally

1. **Clone the repository**
git clone https://github.com/Shantanu01B/totle-topic-browser.git


2. **Navigate into the project**
cd totle-topic-browser
3. **Install dependencies**
npm install

4. **Start the development server**
npm start

Your app will be live at:

👉 **http://localhost:3000**

---

## 🔎 Code Flow Explanation (Short & Clear)

### `App.jsx`
- Imports and renders the `TopicSearch` component.

### `TopicSearch.jsx`
- Stores search input using `useState`
- Contains a predefined topics array (Physics, Biology, Maths, etc.)
- Filters topics dynamically as the user types
- Maps through filtered topics and renders **gradient cards**
- Displays “No topics found” when the search has zero matches

---

## 🎥 Demo Video (Explanation)

I have included a **2-minute explanation video** inside this repository as required.

You can also view it here:  
👉 https://drive.google.com/file/d/1zXrygDzwRrpGZDzp04ka4SDMSiXNupb-/view?usp=sharing
---

## 🔗 GitHub Repository Link

👉 **https://github.com/Shantanu01B/totle-topic-browser**

---

## 👨‍💻 Developed By  
**Shantanu Barge**  
Frontend Developer • MERN Stack

---


