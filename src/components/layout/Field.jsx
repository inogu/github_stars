import { useState } from "react";
import styled from "styled-components";
import { gql, useLazyQuery } from "@apollo/client";
import Button from "../layout/button";

const Input = styled.input`
  padding: 1em;
  border: none;
  border-radius: 3px;
  width: 10rem;
  margin-right: 1rem;
`;

const Section = styled.div`
  width: 100%;
  margin: 0;
  float: left;
`;

export default function SearchField() {
  const [userName, setUserName] = useState("");
  const GET_USER = gql`
    query GET_USER($login: String!) {
      user(login: $login) {
        avatarUrl
        bio
        name
        email
        location
        websiteUrl
        starredRepositories {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
  `;

  const [pesquisarUsuario, { loading, data }] = useLazyQuery(GET_USER, {
    variables: {
      login: userName,
    },
  });

  if (data) {
    console.log(data);
  }

  return (
    <Section>
      <Input value={userName} onChange={(e) => setUserName(e.target.value)} />
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
