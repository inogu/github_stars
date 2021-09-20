import styled from "styled-components";
import GetUser from "../../../services";
import Button from "../../layout/button";
import SearchField from "../../layout/Field";

const Sentence = styled.h2`
  font-size: 1.5em;
  color: black;
  font-family: Roboto;
  font-weight: 400;
  margin-bottom: auto;
  padding-bottom: 1rem;
`;

const Section = styled.div`
  align-content: space-between;
`;

export default function SearchSection() {
  const pesquisarUsuario = () => {
    return <GetUser />;
  };

  return (
    <Section>
      <Sentence>Preencha o nome ou apelido do usuário</Sentence>
      <SearchField />
      <Button
        onClick={() => {
          pesquisarUsuario();
        }}
      >
        Pesquisar
      </Button>
    </Section>
  );
}
