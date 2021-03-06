export interface UsernameContextInterface {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  username: string;
}

export interface QuestionInterface {
  question: string;
  all_words: string[];
  good_words: string[];
}

export interface ScoreContextInterface {
  score: number;
  handleScore: (wrongAnswers: number, goodAnswers: number) => void;
}

export interface UseFetchInterface {
  data: QuestionInterface | null;
  isLoading: boolean;
  error: string | null;
  fetchData: (url: string) => Promise<void>;
}
