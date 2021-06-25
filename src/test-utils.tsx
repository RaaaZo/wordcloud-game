import { render, RenderOptions } from '@testing-library/react';
import AllProviders from 'providers/AllProviders';
import { ReactElement } from 'react';

const AllTheProviders: React.FC = ({ children }) => {
  return <AllProviders>{children}</AllProviders>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
