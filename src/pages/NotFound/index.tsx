import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  color: #18216d;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #555;
  margin: 1rem 0 2rem;
`;

const HomeLink = styled(Link)`
  color: #18216d;
  font-weight: bold;
  text-decoration: underline;

  &:hover {
    color: rgb(255, 130, 92);
  }
`;

const NotFound = () => (
  <Wrapper>
    <Title>404</Title>
    <Subtitle>Page not found.</Subtitle>
    <HomeLink to="/">Go back home</HomeLink>
  </Wrapper>
);

export default NotFound;
