import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 1em;
  border: none;
  border-radius: 3px;
  width: 50rem;
`;

const Section = styled.div`
  width: 53rem;
  margin: 0;
  float: left;
`;

export default function SearchField() {
  const [name, setName] = useState("");

  const searchUser = () => {};

  return (
    <Section>
      <Input value={name} onChange={searchUser} />
    </Section>
  );
}
