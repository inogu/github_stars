import styled from "styled-components";
import Title from "../../layout/title";

const Dado = styled.h3`
  font-size: 1em;
  color: black;
  font-family: Roboto;
  font-weight: 200;
  margin-bottom: auto;
  padding-bottom: 1rem;
`;

export default function ProfileSection(props) {
  return (
    <div>
      <Title>Profile</Title>
      <Dado>{props.dados.avatarUrl}</Dado>
      <Dado>{props.dados.bio}</Dado>
      <Dado>{props.dados.email}</Dado>
      <Dado>{props.dados.location}</Dado>
      <Dado>{props.dados.websiteUrl}</Dado>
    </div>
  );
}
