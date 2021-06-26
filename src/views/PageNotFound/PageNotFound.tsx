import { CenteringWrapper } from 'components/atoms/CenteringWrapper/CenteringWrapper';
import { Header } from 'components/atoms/Header/Header';

import { StyledLink } from './PageNotFound.styles';

const PageNotFound = () => {
  return (
    <CenteringWrapper>
      <Header>Page not found</Header>
      <StyledLink to='/'>Home Page</StyledLink>
    </CenteringWrapper>
  );
};

export default PageNotFound;
