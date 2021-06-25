import { randomNumber } from 'helpers/randomNumber';
import { questions } from 'mocks/data/questions';
import { rest } from 'msw';

export const gameHandlers = [
  rest.get('/questions', (req, res, ctx) => {
    const randomQuestionsNumber = randomNumber(questions.length);
    const randomQuestions = questions[randomQuestionsNumber];
    return res(ctx.status(200), ctx.json(randomQuestions));
  }),
];
