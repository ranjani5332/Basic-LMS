import React, { useState } from "react";

function App() {
  // Course Details
  const course = {
    title: "React LMS Course",
    description: "Learn React from basics to advanced concepts.",
    duration: "5 Hours",
  };

  // Static Lesson Data
  const lessons = [
    {
      id: 1,
      title: "Introduction",
      description: "What is React and why we use it.",
      duration: "30 mins",
    },
    {
      id: 2,
      title: "Basics",
      description: "JSX, Components, and Props.",
      duration: "1 Hour",
    },
    {
      id: 3,
      title: "Advanced",
      description: "State, Hooks, and Events.",
      duration: "2 Hours",
    },
    {
      id: 4,
      title: "Summary",
      description: "Quick recap of the course.",
      duration: "1.5 Hours",
    },
  ];

  // State
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);

  // Event Handlers
  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
  };

  const markAsCompleted = () => {
    if (
      selectedLesson &&
      !completedLessons.includes(selectedLesson.id)
    ) {
      setCompletedLessons([...completedLessons, selectedLesson.id]);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Course Info */}
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p><strong>Duration:</strong> {course.duration}</p>

      <hr />

      {/* Lesson List */}
      <h2>Lessons</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            onClick={() => handleLessonClick(lesson)}
            style={{
              padding: "10px",
              marginBottom: "5px",
              cursor: "pointer",
              backgroundColor:
                selectedLesson?.id === lesson.id ? "#cfe2ff" : "#f8f9fa",
              border: "1px solid #ccc",
            }}
          >
            {lesson.title}
            {completedLessons.includes(lesson.id) && " ✅"}
          </li>
        ))}
      </ul>

      {/* Conditional Rendering */}
      {selectedLesson && (
        <div style={{ marginTop: "20px" }}>
          <h3>{selectedLesson.title}</h3>
          <p>{selectedLesson.description}</p>
          <p><strong>Duration:</strong> {selectedLesson.duration}</p>

          <button onClick={markAsCompleted}>
            Mark as Completed
          </button>
        </div>
      )}

      <hr />

      {/* Lesson Count */}
      <p>
        <strong>Total Lessons:</strong> {lessons.length}
      </p>
      <p>
        <strong>Completed Lessons:</strong> {completedLessons.length}
      </p>
    </div>
  );
}

export default App;