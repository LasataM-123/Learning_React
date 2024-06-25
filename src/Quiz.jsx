import React, { useEffect, useState } from "react";
import "./Quiz.css";
const Quiz = () => {
  const questions = [
    {
      question: "In 1768, Captain James Cook set out to explore which ocean?",
      options: [
        "Pacific Ocean",
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
    {
      question: "What is actually electricity?",
      options: [
        "A flow of water",
        "A flow of air",
        "A flow of electrons",
        "A flow of atoms",
      ],
      answer: "A flow of electrons",
    },
    {
      question: "Which of the following is not an international organisation?",
      options: ["FIFA", "NATO", "ASEAN", "FBI"],
      answer: "FBI",
    },
    {
      question: "Which of the following disorders is the fear of being alone?",
      options: ["Agoraphobia", "Aerophobia", "Acrophobia", "Arachnophobia"],
      answer: "Agoraphobia",
    },
    {
      question:
        "Which of the following is a song by the German heavy metal band “Scorpions”?",
      options: [
        "Stairway to Heaven",
        "Wind of Change",
        "Don’t Stop Me Now",
        "Hey Jude",
      ],
      answer: "Wind of Change",
    },
    {
      question: "What is the speed of sound?",
      options: ["120 km/h", "1,200 km/h", "400 km/h", "700 km/h"],
      answer: "1,200 km/h",
    },
    {
      question: "What is the main component of the sun?",
      options: ["Liquid lava", "Gas", "Molten iron", "Rock"],
      answer: "Gas",
    },
    {
      question: "What do we call a newly hatched butterfly?",
      options: ["A moth", "A butter", "A caterpillar", " A chrysalis"],
      answer: "A caterpillar",
    },
    {
      question: "In total, how many novels were written by the Bronte sisters?",
      options: ["4", "5", "6", "7"],
      answer: "7",
    },
    {
      question: "Which did Viking people use as money?",
      options: ["Rune stones", "Jewellery", "Seal skins", "Wool"],
      answer: "Jewellery",
    },
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);
  const [quizSubmit, setQuizSubmit] = useState(false);
  const [showIndex, setShowIndex] = useState(-1);
  const handleOption = (questionIndex, tickedOption) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = tickedOption;
    setAnswers(newAnswers);
  };
  useEffect(() => {
    console.log("Score: " + score);
  }, [score]);

  const handleSubmit = () => {
    let allAnswered = true;
    answers.forEach((answer) => {
      if (answer === null) {
        allAnswered = false;
      }
    });
    if (allAnswered) {
      let calculatedScore = 0;
      answers.forEach((answer, index) => {
        if (answer === questions[index].answer) {
          calculatedScore += 2;
        }
      });
      setScore(calculatedScore);
      setQuizSubmit(true);
    } else {
      alert("Please answer all the questions before submitting.");
      setQuizSubmit(false);
    }
  };
  const handleAnswerShow = (index) => {
    setShowIndex(index);
  };

  return (
    <div className="quiz">
      <h1 className="quiz-title">QUIZ (Total questions 10)</h1>
      {quizSubmit ? (
        <div className="submission">
          <u>
            <h3 className="result">Result: </h3>
          </u>
          Your score is: {score}/{questions.length * 2}
        </div>
      ) : (
        <div className="quiz-container">
          {questions.map((question, questionIndex) => (
            <div key={questionIndex}>
              <h3>
                {questionIndex + 1}. {question.question} [2 points]
              </h3>

              <ul>
                {question.options.map((option, optionIndex) => {
                  const isSelected = answers[questionIndex] === option;
                  const isCorrect = option === question.answer;
                  const hasSelectedWrong =
                    answers[questionIndex] !== null &&
                    answers[questionIndex] !== question.answer;
                  return (
                    <li
                      key={optionIndex}
                      onClick={
                        answers[questionIndex] === null
                          ? () => handleOption(questionIndex, option)
                          : null
                      }
                      style={{
                        backgroundColor: isSelected
                          ? isCorrect
                            ? "green"
                            : "red"
                          : hasSelectedWrong && isCorrect
                          ? "green"
                          : "transparent",
                        color:
                          isSelected || (hasSelectedWrong && isCorrect)
                            ? "white"
                            : "black",
                      }}
                    >
                      {option}
                    </li>
                  );
                })}
                <button
                  onClick={() => handleAnswerShow(questionIndex)}
                  className="show-button"
                >
                  Show Answer
                </button>
                {showIndex === questionIndex ? (
                  <div style={{ fontSize: "18px" }}>
                    Correct answer: {question.answer}
                  </div>
                ) : (
                  <div />
                )}
              </ul>
            </div>
          ))}
          <button onClick={handleSubmit} className="quiz-submit">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
export default Quiz;
