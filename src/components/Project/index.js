
export default function Project(props) {
    
    return <div class="card" style={{width : "18rem"}}>
    <img src={props.screenshot} class="card-img-top" alt={props.title} />
    <div class="card-body">
      <h5 class="card-title">{props.title}</h5>
      <p class="card-text">{props.description}</p>
    </div>
    <div class="card-footer">
      <a href={props.link} class="btn btn-dark" rel ="noreferrer" target="_blank">Deployed
        Site</a>
      <a href={props.github} class="btn btn-secondary" rel ="noreferrer"target="_blank">Github
        Page</a>
    </div>
    </div>
      }