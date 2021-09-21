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

const StyledImage = styled.img`
  width: 20%;
  float: left;
  margin-right: 10px;
`;

export default function ProfileSection(props) {
  return (
    <div>
      <Title>Profile</Title>

      <StyledImage src={props.dados.avatarUrl} />
      <Dado>{props.dados.bio}</Dado>
      <Dado>{props.dados.email}</Dado>
      <Dado>{props.dados.location}</Dado>
      <Dado>{props.dados.websiteUrl}</Dado>
    </div>
  );
}
