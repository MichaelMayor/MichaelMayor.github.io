import React from 'react'
import resume from '../assets/documents/Mayor resume.pdf'
import Project from '../components/Project'
import codeQuizScreenshot from '../assets/img/code-quiz-screenshot.png'
import taskPlannerScreenshot from '../assets/img/task-planner-screenshot.png'
import WeatherDashboardScreenshot from '../assets/img/weather-dash-screenshot.png'
export default function Portfolio () {
  return <div className="container">
      <br />
      <br />

      <section className="row border gray title">
          <p className="display-1">Portfolio</p>
      </section>
      <div className="container">
          <a className="h5" href={resume} target="_blank" rel="noreferrer">Resume</a>

          <br />
      </div>

      <h1 className="display-4">Projects</h1>
      <div className="d-flex flex-wrap">
          <Project title="Weather Dashboard" description="A weather forecast webapp that uses third party api to search for a city name and display
            the upcoming weather." screenshot={WeatherDashboardScreenshot} link="https://github.com/MichaelMayor/WeatherDashboard" github="https://michaelmayor.github.io/WeatherDashboard/" />
          <Project title="Code Quiz" description="An interactive quiz program to test our knowledge of HTML, CSS, and Javascript. The
            program will then save your score on the quiz and allow you to compare it to past performances." screenshot={codeQuizScreenshot} link="https://michaelmayor.github.io/CodeQuiz/" github="https://github.com/MichaelMayor/CodeQuiz" />
          <Project title="Task Planner" description="An interactive webapp that will sort your to-do list by category and time, then displays
            the tasks on a dedicated schedule." screenshot={taskPlannerScreenshot} link="https://bravedown.github.io/task-planner/" github="https://github.com/bravedown/task-planner" />

      </div>
      <br />
      <br />
  </div>
}
