import React from 'react'
import headshot from '../assets/img/headshot.jpg'
import '../assets/style.css'
export default function Bio () {
  return <div className="container">
      <br />
      <br />

      <section className="row border gray title">
          <p className="display-1">About Me</p>
      </section>

      <div className="row">

          <figure className="col">
              <img src={headshot} alt="Michael Mayor" />
          </figure>

          <div className="col-10 col-md-8">
              <p>My name is Michael Mayor. I am a Biomedical Engineer and Web Developer currently located in Vernon, CT. I am
                  proficient in Matlab, Javascript, HTML, and CSS.
                  I graduated from the University of Rochester in 2015 with a BS in Biomedical Engineering with a focus in
                  Biosystems and Signals. I am currently employed as a Surgical Technician by surgical supply company OR
                  Specialties.
                  If you would like to learn more than is present in this page, please visit the contact page to ask me any
                  questions you might have!</p>
          </div>
      </div>
      <ul className="list-unstyled">
          <li><strong>Github:</strong> <a href="https://github.com/MichaelMayor"
              target="_blank" rel="noreferrer">Github.com/MichaelMayor</a></li>
          <li><strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/michael-mayor-84707a6a"
              target="_blank" rel="noreferrer">Michael Mayor</a></li>
          <li><strong>Email:</strong> <a href="mailto:michael.davidge.mayor@gmail.com"
              target="_blank" rel="noreferrer">Michael.Davidge.Mayor@gmail.com</a></li>
          <li><strong>Phone Number:</strong> (203) 200-9817</li>
      </ul>
      <br />
      <br />
  </div>
}
