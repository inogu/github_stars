import styled from "styled-components";
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
  return (
    <Section>
      <Sentence>Preencha o nome ou apelido do usuário</Sentence>
      <SearchField />
      <Button onClick={() => {}}>Pesquisar</Button>
    </Section>
  );
}
