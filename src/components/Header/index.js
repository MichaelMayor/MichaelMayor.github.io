
export default function Header(props){

return <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">

<a className="navbar-brand h1" href="./index.html">Michael Mayor</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<span className="navbar-text d-none d-lg-block">{props.page}</span>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <a className="nav-link" href="/">About </a>
    </li>

    <li className="nav-item">
      <a className="nav-link" href="/#/portfolio">Portfolio</a>
    </li>
  </ul>
</div>
</nav>
  }