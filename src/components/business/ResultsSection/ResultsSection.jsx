import { useMemo, useState } from "react";
import Title from "../../layout/title";
import { DataGrid } from "@material-ui/data-grid";
import styled from "styled-components";

const GridContainer = styled.div`
  background-color: #aaa;
  height: 80%;
  margin: auto;
  width: 80%;
`;

export default function ResultsSection(props) {
  const data =
    props.dados && props.dados.starredRepositories
      ? props.dados.starredRepositories.edges.map((r) => ({
          id: r.node.id,
          name: r.node.name,
          url: r.node.url,
        }))
      : [];

  const columns = [
    { field: "name", headerName: "Nome", width: 200 },
    { field: "url", headerName: "URL", width: 400 },
  ];

  return (
    <div>
      <Title>Repositórios estrelados</Title>
      <br />
      <GridContainer>
        <DataGrid rows={data} columns={columns} pageSize={5} />
      </GridContainer>{" "}
    </div>
  );
}
