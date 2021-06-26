import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from 'test-utils';

import userEvent from '@testing-library/user-event';

import PageNotFound from './PageNotFound';

describe('PageNotFound', () => {
  test('should renders the component without errors and after clicking button should go / url', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <PageNotFound />
      </Router>
    );

    history.push('/not-found-page');

    screen.getByText(/not found/i);
    const link = screen.getByText(/home/i);
    userEvent.click(link);
    expect(history.location.pathname).toBe('/');
  });
});
