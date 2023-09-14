import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import { Card, Col } from "react-bootstrap";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <h3 className="display-6 pb-5 text-center">Personal Projects</h3>
          <Row>
            <Col lg="6">
              <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
                <Card.Body>
                  <Card.Title as="h5">3D Printed Quadcopter</Card.Title>
                  <Card.Img className="rounded mx-auto d-block" src={require("../../assets/img/projects/quadcopter.png")} resizeImage='contain' style={{ maxHeight: '35vh', width: 'auto', maxWidth: '100%' }} />
                  <br></br>
                  <Card.Text>
                      <ul>
                        <li>Designed and built a quadcopter from scratch</li>
                        <li>Used CAD to design the frame (450 mm across) and 3D printed it</li>
                        <li>Custom-made flight controller made using Arduino programmed in C/C++</li>
                        <li>Recycled existing controller and repurposed it with custom transceive and receiver</li>
                        <li>Tuned PID feedback loops based on input from an IMU to ensure stable flights</li>
                      </ul>
                  </Card.Text>
                  <p className="lead text-center">
                    <a
                      className="lead text-center btn btn-outline-dark btn-lg"
                      href="https://drive.google.com/file/d/1-GiYaabQrA09tqiAAeo9hTZEQMCLHcFP/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer noopener"
                      role="button"
                      aria-label="Report"
                    >
                      Learn More
                    </a>
                  </p>
                  <div className="d-grid gap-2 d-md-block"></div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
                <Card.Body>
                  <Card.Title as="h5">Robotic Arm Restoration (Scorbot ER-III)</Card.Title>
                  <Card.Img className="rounded mx-auto d-block" src={require("../../assets/img/projects/scorbot.png")} resizeImage='contain' style={{ maxHeight: '35vh', width: 'auto', maxWidth: '100%' }} />
                  <br></br>
                  <Card.Text>
                      <ul>
                        <li>Restored a $20,000 robotic arm from the 1990s</li>
                        <li>Figured out how to control the arm using software and its control box</li>
                        <li>Got the robot to run an autonomous sequence using built-in limit switches and position sensors</li>
                        <li>Replaced broken limit switches</li>
                        <li>Documented all findings for future users including tips, how to get started, and how it works</li>
                      </ul>
                  </Card.Text>
                  <p className="lead text-center">
                    <a
                      className="btn btn-outline-dark btn-lg"
                      href="https://drive.google.com/file/d/1dG9DYNn99fANQIbrrpWIgA24rOs6lcqz/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer noopener"
                      role="button"
                      aria-label="Report"
                    >
                      Learn More
                    </a>
                  </p>
                  <div className="d-grid gap-2 d-md-block"></div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        <h3 className="display-6 pb-5 text-center">Hackathon Projects</h3>
        <Row>
          <Col lg="4">
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
              <Card.Body>
                <Card.Title as="h5">Happy RecycleMore (Deltahacks IX)</Card.Title>
                <Card.Img className="rounded mx-auto d-block" src={require("../../assets/img/projects/happyrecyclemore.png")} resizeImage='contain' style={{ maxHeight: '35vh', width: 'auto', maxWidth: '100%' }} />
                <br></br>
                <Card.Text>
                    <ul>
                      <li>Won 2nd overall out of 120 teams and 400+ participants</li>
                      <li>Developed a recycling lid that used ML to classify items as garbage or recycling and sorts them accordingly</li>
                      <li>Utilized a Tensorflow model and OpenCV to determine the material and then send a signal to a servo to sort the material accordingly</li>
                      <li>Computer and microcontroller (Arduino) communicate through USB</li>
                    </ul>
                </Card.Text>
                <p className="lead text-center">
                  <a
                    className="lead text-center btn btn-outline-dark btn-lg"
                    href="https://devpost.com/software/happy-recyclemore"
                    target="_blank"
                    rel="noreferrer noopener"
                    role="button"
                    aria-label="Report"
                  >
                    Learn More
                  </a>
                </p>
                <div className="d-grid gap-2 d-md-block"></div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
              <Card.Body>
                <Card.Title as="h5">FoodSnaps (Hack Western 9)</Card.Title>
                <Card.Img className="rounded mx-auto d-block" src={require("../../assets/img/projects/foodsnaps.png")} resizeImage='contain' style={{ maxHeight: '35vh', width: 'auto', maxWidth: '100%' }} />
                <br></br>
                <Card.Text>
                    <ul>
                      <li>Developed a mobile app using React Native to enable users to get recipe recommendations based on the ingredients they take a picture of</li>
                      <li>Leveraged the Spoonacular API to accurately classify food ingredients from images and provide recipe recommendations</li>
                    </ul>
                </Card.Text>
                <p className="lead text-center">
                  <a
                    className="btn btn-outline-dark btn-lg"
                    href="https://devpost.com/software/foodsnaps"
                    target="_blank"
                    rel="noreferrer noopener"
                    role="button"
                    aria-label="Report"
                  >
                    Learn More
                  </a>
                </p>
                <div className="d-grid gap-2 d-md-block"></div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
              <Card.Body>
                <Card.Title as="h5">EYEs.py (Hack the North 2022)</Card.Title>
                <Card.Img className="rounded mx-auto d-block" src={require("../../assets/img/projects/eyespy.png")} resizeImage='contain' style={{ maxHeight: '35vh', width: 'auto', maxWidth: '100%' }} />
                <br></br>
                <Card.Text>
                    <ul>
                      <li>Developed an eye tracking system to record eye positioning and map it to a 2D matrix to monitor where a user focus the most on a webpage or ad</li>
                      <li>Utilized Adhawk's Mindlink eye tracking glasses for hardware integration and leveraged Adhawk's Python SDK for seamless data acquisition</li>
                      <li>Implemented data visualization techniques using Matplotlib to generate heatmaps based on the collected eye tracking data</li>
                    </ul>
                </Card.Text>
                <p className="lead text-center">
                  <a
                    className="btn btn-outline-dark btn-lg"
                    href="https://devpost.com/software/eyes-py"
                    target="_blank"
                    rel="noreferrer noopener"
                    role="button"
                    aria-label="Report"
                  >
                    Learn More
                  </a>
                </p>
                <div className="d-grid gap-2 d-md-block"></div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h3 className="display-6 pb-5 text-center">Github Projects</h3>
        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={project}
              />
            ))
            : dummyProjectsArr.map((project, index) => (
              <ProjectCard
                key={`dummy-${index}`}
                id={`dummy-${index}`}
                value={project}
              />
            ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
