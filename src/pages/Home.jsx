import { useState } from "react";
import styled from "styled-components";
import SearchField from "../components/business/SearchSection/SearchSection";
import Layout from "../components/layout/layout";
import ResultSection from "../components/business/ResultsSection/ResultsSection";
import ProfileSection from "../components/business/ProfileSection/ProfileSection";

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
  height: 25rem;
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

export default function Home() {
  const [dadosUsuario, setDadosUsuario] = useState({});
  return (
    <Layout>
      <Container>
        <SearchContainer>
          <SearchField
            handleResultado={(dataUser) => {
              setDadosUsuario(dataUser);
            }}
          />
        </SearchContainer>

        <ResultContainer>
          <ResultSection dados={dadosUsuario} />
        </ResultContainer>

        <ProfileContainer>
          <ProfileSection dados={dadosUsuario} />
        </ProfileContainer>
      </Container>
    </Layout>
  );
}
