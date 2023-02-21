import { Container, Row, Button } from "react-bootstrap";
import "./artPortfolio.css";
import Header from "../../components/webDevComponents/header";

const ArtPortfolio = () => {
  return (
    <div className="mainArt">
      <Header />
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Morgan Woods Portfolio</h1>
            </div>
            <div className="header">
            <img
              className="profilePicArt"
              src="https://i.imgur.com/pdHKfee.jpeg"
            />
            <div>
            <h3 className="aboutMeText">
              I recently graduated from the Full Stack Web Development Bootcamp
              from The University of Utah. Currently, I am looking for a front
              end jr. developer job while working on a few projects. I have
              loved my journey to learn how to develop websites. It's great
              watching it all come together as I learn more!
            </h3>
            <h5 className="aboutMeText">
              Outside of developing websites, I love to do art and play video
              games.{" "}
            </h5>
                        
            </div>
            
            </div>
            <div className="buttonContainer">
              <a href="#experienceDiv">
                <Button size="lg" className="landingButton aboutMe">
                  Experience
                </Button>
              </a>
              <a href="#resumeDiv">
                <Button size="lg" className="landingButton aboutMe">
                  Resume
                </Button>
              </a>
              <a href="/contactme">
                <Button size="lg" className="landingButton aboutMe">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
      <div className>
                  <img
            className="badge"
            src="https://images.credly.com/size/220x220/images/c4beedf3-af4c-405d-8671-4a1ebd70fe24/badge-coding-bootcamp-trilogy.png"
          />
        <div className="title" id="experienceDiv">
          Experience
        </div>
        <div className="experienceAboutMe">
          <div className="cardAboutMe">
            <img src="https://images.unsplash.com/photo-1599813391721-ed8c5fe98166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1839&q=80"></img>
            <div className="container">
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1599813391721-ed8c5fe98166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1839&q=80"></img>
            <div className="container">
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
        </div>
        <div className="title" id="resumeDiv">Resume</div>
        <img className="resume" src="https://i.imgur.com/sKwpgdO.jpeg"/>
      </div>
    </div>
  );
};

export default ArtPortfolio;
