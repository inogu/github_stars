import { useState } from 'react';
import styled from 'styled-components';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import Button from '../../ui/button';
import ErrorAlert from '../../ui/messageError';

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
  const [userName, setUserName] = useState('');
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
    if (!userName) {
      setMessageError('Informe o nome do usuário!');
      setAlertErrorVisible(true);
    } else {
      try {
        const res = await refetch();
        props.handleResultado(res.data.user);
        setAlertErrorVisible(false);
      } catch (error) {
        setMessageError(error.message);
        setAlertErrorVisible(true);
      }
    }
  };

  const [alertErrorVisible, setAlertErrorVisible] = useState(false);
  const [messageError, setMessageError] = useState('');

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
      <ErrorAlert message={messageError} visible={alertErrorVisible} />
    </Section>
  );
}
