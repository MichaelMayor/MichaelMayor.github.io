import React from 'react'
import resume from '../assets/documents/Mayor resume.pdf'
import Project from '../components/Project'
import kittenHelperScreenshot from '../assets/img/foster-kitten-helper.png'
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
            the upcoming weather." screenshot={WeatherDashboardScreenshot} link="https://michaelmayor.github.io/WeatherDashboard/" github="https://github.com/MichaelMayor/WeatherDashboard" />
          <Project title="Foster Kitten Helper" description="Kitten helper is designed to help people fostering kittens keep track of feeding times. It uses Nodemailer and node-cron on the back end to send emails in the web browser at scheduled times. This helps humans keep track of the frequent feeding times and helps cats not be hungry!" 
            screenshot={kittenHelperScreenshot} link="https://foster-kitten-helper.herokuapp.com/" github="https://github.com/swimmaison/Kitten-Helper" />
          <Project title="Task Planner" description="An interactive webapp that will sort your to-do list by category and time, then displays
            the tasks on a dedicated schedule." screenshot={taskPlannerScreenshot} link="https://bravedown.github.io/task-planner/" github="https://github.com/bravedown/task-planner" />

      </div>
      <br />
      <br />
  </div>
}
