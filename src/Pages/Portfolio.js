import resume from "../assets/documents/Mayor resume.pdf"
import Project from "../components/Project"
export default function Portfolio(){
    return <div class="container">
<br />
<br />

    <section class="row border gray title">
      <p class="display-1">Portfolio</p>
    </section>
    <div class="container">
      <a class="h5" href={resume} target="_blank" rel="noreferrer">Resume</a>

      <br />
    </div>


    <h1 class="display-4">Projects</h1>
    <div class="d-flex flex-wrap">
    <Project />
    </div>
  </div>

}