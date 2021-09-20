import styled from "styled-components";
import Title from "./title";

const Header = styled.header`
  display: block;
  justify-content: space-between;  
  padding: 1rem 10%;
  margin-right: 2rem
  height: 5rem;
  background-color: #686868	;
  background-size: cover;
  width: 100%
  align-items: center;
  font-size: calc(10px + 2vmin);
  border-bottom: solid;
`;

const MainHeader = () => {
  return (
    <Header>
      <Title>GITHUB STARS</Title>
    </Header>
  );
};

export default MainHeader;
