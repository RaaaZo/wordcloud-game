import { PageWrapper } from 'components/atoms/PageWrapper/PageWrapper';

const MainTemplate: React.FC = ({ children }) => {
  return (
    <main>
      <PageWrapper>{children}</PageWrapper>
    </main>
  );
};

export default MainTemplate;
