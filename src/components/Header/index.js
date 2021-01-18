import {Nav, Button, Navbar, NavbarBrand} from "react-bootstrap"
export default function Header(){

return <Navbar fixed ="top" expand="lg" variant="dark" bg="dark" className="navbar">
    <NavbarBrand className="navbar-brand h1" href="/">Michael Mayor</NavbarBrand>
    <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <Navbar.Toggle class="navbar-toggler-icon" />
    </Button>
    <Navbar.Text clasName="navbar-text d-none d-lg-block">About Me</Navbar.Text>
    <Navbar.Collapse class="collapse navbar-collapse" id="navbarSupportedContent">
      <Nav class="navbar-nav ml-auto">
        <Nav.Link  class="nav-item active" href="/">
        About
        </Nav.Link>

        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>}