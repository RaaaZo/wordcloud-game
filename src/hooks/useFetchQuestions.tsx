import axios from 'axios';
import React, { useCallback, useContext, useState } from 'react';
import { QuestionInterface, UseFetchInterface } from 'types';

export const QuestionsContext = React.createContext<UseFetchInterface>({
  data: null,
  isLoading: false,
  error: null,
  fetchData: async () => {},
});

export const QuestionsProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<QuestionInterface | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (url: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
      setIsLoading(false);
    } catch (e) {
      setError('Could not load data. Try again!');
      setIsLoading(false);
    }
  }, []);

  return (
    <QuestionsContext.Provider value={{ data, isLoading, error, fetchData }}>
      {children}
    </QuestionsContext.Provider>
  );
};

export const useFetchQuestions = () => {
  const questionsContext = useContext(QuestionsContext);

  if (!questionsContext) {
    throw Error('useFetchQuestions needs to be used inside QuestionsContext');
  }

  return questionsContext;
};
