import { handlers } from 'mocks/handlers';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from 'test-utils';

import GameView from './GameView';

const server = setupServer(...handlers);

describe('GameView', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('should renders the component without errors', async () => {
    render(<GameView />);

    screen.getByText(/loading/i);
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
    screen.getByText(/check/i);
  });
});
