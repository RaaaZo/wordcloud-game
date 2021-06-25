import { useFetchQuestions } from 'hooks/useFetchQuestions';
import React, { useState } from 'react';
import { ScoreContextInterface } from 'types';

export const ScoreContext = React.createContext<ScoreContextInterface>({
  score: 0,
  handleScore: (wrongAnswers: number, goodAnswers: number) => {},
});

export const ScoreProvider: React.FC = ({ children }) => {
  const [score, setScore] = useState<number>(0);
  const { data } = useFetchQuestions();

  const handleScore = (wrongAnswers: number, goodAnswers: number) => {
    const plusScore = goodAnswers * 2;
    const minusScore = wrongAnswers + data!.good_words.length - goodAnswers;

    const score = plusScore - minusScore;
    setScore(score);
  };

  return (
    <ScoreContext.Provider value={{ score, handleScore }}>
      {children}
    </ScoreContext.Provider>
  );
};
