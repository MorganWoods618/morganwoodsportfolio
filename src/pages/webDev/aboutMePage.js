import { Container, Row, Button } from "react-bootstrap";
import "./aboutMePage.css";
import Header from "../../components/webDevComponents/header";

const AboutMe = () => {
  return (
    <div className="main">
      <Header />
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Morgan Woods Portfolio</h1>
            </div>
            <img
              className="profilePic"
              src="https://i.imgur.com/Jn24JKy.jpeg"
            />
            <h3 className="aboutMeText">
              I recently graduated from the Full Stack Web Development Bootcamp
              from The University of Utah. Currently, I am looking for a front
              end jr. developer job while working on a few projects. I have
              loved my journey to learn how to develop websites. It's great
              watching it all come together as I learn more!
            </h3>
            <h5 className="aboutMeText">Outside of developing websites, I love to do art and play video games. </h5>
            <div className="buttonContainer">
              <a href="./contactMe">
                <Button size="lg" className="landingButton">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
