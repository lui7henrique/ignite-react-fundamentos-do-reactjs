export function RepositoryItem(props){
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description ?? "Sem descrição"}</p>
      {/* <p>{props.repository.description ?? "Sem descrição"}</p> */}
      <a href={props.repository.html_url}>acess repository</a>
    </li>
  )
}