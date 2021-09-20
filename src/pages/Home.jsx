import styled from "styled-components";
import SearchField from "../components/business/SearchSection/SearchSection";
import Layout from "../components/layout/layout";

const Container = styled.section`
  height: 40rem;
  background-color: #686868;
  width: 100%;
  margin: auto;
`;

const SearchContainer = styled.div`
  height: 10rem;
  margin: 0;
  padding: 1rem;
  font-family: Roboto;
`;

const ResultContainer = styled.div`
  width: 40%;
  height: 20rem;
  float: left;
  padding: 1rem;
  font-family: Roboto;
`;

const ProfileContainer = styled.div`
  border-left: solid;
  margin-left: 50%;
  width: 40%;
  height: 20rem;
  padding: 1rem;
  font-family: Roboto;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: black;
  font-family: Roboto;
  font-weight: 400;
  margin-bottom: auto;
  text-align: center;
  padding: 0.5rem;
`;

export default function Home() {
  return (
    <Layout>
      <Container>
        <SearchContainer>
          <SearchField />
        </SearchContainer>

        <ResultContainer>
          <Title>RESULTADOS</Title>
        </ResultContainer>

        <ProfileContainer>
          <Title>PROFILE</Title>
        </ProfileContainer>
      </Container>
    </Layout>
  );
}
