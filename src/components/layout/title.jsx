import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: 1.5em;
  color: black;
  font-family: Roboto;
  font-weight: 400;
  margin-bottom: auto;
  text-align: center;
  padding: 0.5rem;
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
