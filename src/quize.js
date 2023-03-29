import React, { useState } from "react";

const questionsData = [
    {
      question: 'What is the capital of India?',
      options: ['Delhi', 'Mumbai', 'Chennai', 'Kolkata'],
      correctAnswer: 'Delhi'
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
      correctAnswer: 'Jupiter'
    },
    {
      question: 'What is the largest country in the world by area?',
      options: ['Russia', 'China', 'United States', 'India'],
      correctAnswer: 'Russia'
    },
    {
      question: 'What is the smallest continent in the world?',
      options: ['Australia', 'Africa', 'Asia', 'Europe'],
      correctAnswer: 'Australia'
    },
    {
      question: 'What is the highest mountain in the world?',
      options: ['K2', 'Kangchenjunga', 'Mount Everest', 'Lhotse'],
      correctAnswer: 'Mount Everest'
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Cu', 'Fe'],
      correctAnswer: 'Au'
    },
    {
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
      correctAnswer: 'Canberra'
    },
    {
      question: 'What is the largest ocean in the world?',
      options: ['Pacific', 'Atlantic', 'Indian', 'Arctic'],
      correctAnswer: 'Pacific'
    },
    {
      question: 'What is the smallest country in the world?',
      options: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'],
      correctAnswer: 'Vatican City'
    },
    {
      question: 'What is the fastest land animal in the world?',
      options: ['Lion', 'Cheetah', 'Leopard', 'Tiger'],
      correctAnswer: 'Cheetah'
    }
  ];
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questionsData.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestion] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNextClick = () => {
    if (currentQuestion === questionsData.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleRestartClick = () => {
    setSelectedOptions(Array(questionsData.length).fill(null));
    setCurrentQuestion(0);
    setShowResult(false);
  };

  const score = selectedOptions.reduce(
    (acc, optionIndex, i) =>
      acc + (optionIndex === questionsData[i].options.indexOf(questionsData[i].correctAnswer) ? 2 : 0),
    0
  );

  const isPassing = score >= 12;

  if (showResult) {
    return (
      <div  >
          <p className='show-score'>Your score: {score}/20</p>
        {isPassing ? (
          <h1>Congratulations, you passed the test!</h1>
          ) : (
              <button  id="next-button" onClick={handleRestartClick}>Restart Test</button>
              )}
      </div>
    );
  }

  return (
    <div  className="container">
      <h1 className="question">Question {currentQuestion + 1}</h1>
      <p >{questionsData[currentQuestion].question}</p>
      {questionsData[currentQuestion].options.map((option, i) => (
        <div className="option-container" style={{display:"flex"}}>
        <label key={i}>
          <input
            type="radio"
            value={i}
            checked={selectedOptions[currentQuestion] === i}
            onChange={() => handleOptionSelect(i)}
            
          />
          {option}
        </label>
        </div>
      ))}
      <button onClick={handleNextClick}>
        {currentQuestion === questionsData.length - 1 ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default Quiz;