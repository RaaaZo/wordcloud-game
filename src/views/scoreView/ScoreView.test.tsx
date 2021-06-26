import { render, screen } from 'test-utils';

import ScoreView from './ScoreView';

describe('ScoreView', () => {
  test('should renders the component without errors', () => {
    render(<ScoreView />);

    screen.getByText(/congratulations/i);
    screen.getByText(/your score/i);
  });
});
