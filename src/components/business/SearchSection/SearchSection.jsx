import { useState } from "react";
import styled from "styled-components";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import Button from "../../layout/button";

const Sentence = styled.h2`
  font-size: 1.5em;
  color: black;
  font-family: Roboto;
  font-weight: 400;
  margin-bottom: auto;
  padding-bottom: 1rem;
`;

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

export default function SearchField(props) {
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
              url
            }
          }
        }
      }
    }
  `;

  const { refetch } = useQuery(GET_USER, {
    variables: {
      login: userName,
    },
  });

  const handleSearch = async () => {
    const res = await refetch();
    props.handleResultado(res.data.user);
  };

  return (
    <Section>
      <Sentence>Preencha o nome ou apelido do usuário</Sentence>
      <Input value={userName} onChange={(e) => setUserName(e.target.value)} />
      <Button
        onClick={() => {
          handleSearch();
        }}
      >
        Pesquisar
      </Button>
    </Section>
  );
}
