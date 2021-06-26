import { randomCategories } from 'helpers/randomCategories';
import { questions } from 'mocks/data/questions';
import { rest } from 'msw';

export const gameHandlers = [
  rest.get('/questions', (req, res, ctx) => {
    const randomQuestionsNumber = randomCategories(questions.length);
    const randomQuestions = questions[randomQuestionsNumber];
    return res(ctx.status(200), ctx.json(randomQuestions));
  }),
];
