import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import StyledLink, { Container, Header } from './layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>

      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Container>
  );
};

export default Layout;
