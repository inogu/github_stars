import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1em;
  border: 2px solid black;
  border-radius: 6px;
  width: 8rem;
  height: 2.8rem;
`;

const Button = ({ onClick, children, ...otherProps }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
