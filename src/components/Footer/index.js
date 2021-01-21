import React from 'react'
import { Nav } from 'react-bootstrap'
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'
export default function Footer () {
  return <nav className="navbar fixed-bottom navbar-light bg-light justify-content-center">

      <Nav.Item>
          <Nav.Link href="https://github.com/MichaelMayor"><AiFillGithub /></Nav.Link>
      </Nav.Item>
      <Nav.Item>
          <Nav.Link href="mailto:michael.davidge.mayor@gmail.com"><AiOutlineMail /></Nav.Link>
      </Nav.Item>
      <Nav.Item>
          <Nav.Link href="https://www.linkedin.com/in/michael-mayor-84707a6a"> <AiFillLinkedin /></Nav.Link>
      </Nav.Item>

  </nav>
}
