import styled from "styled-components";
import SearchField from "../../layout/Field";

const Sentence = styled.h2`
  font-size: 1.5em;
  color: black;
  font-family: Roboto;
  font-weight: 400;
  margin-bottom: auto;
  padding-bottom: 1rem;
`;

export default function SearchSection() {
  return (
    <div>
      <Sentence>Preencha o nome ou apelido do usuário</Sentence>
      <SearchField />
    </div>
  );
}
