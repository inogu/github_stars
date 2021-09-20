import Title from "../../layout/title";

export default function ResultsSection(props) {
  return (
    <div>
      <Title>Resultados</Title>
      {props.dados && props.dados.starredRepositories ? (
        <ul>
          {props.dados.starredRepositories.edges.map((r) => (
            <li key={r.node.id}> {r.node.name}</li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}
