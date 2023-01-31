import { Container, Row, Button } from "react-bootstrap";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Morgan Woods Portfolio</h1>
              <p className="subTitle">"Waiting for something to happen?"</p>
            </div>
            <div className="buttonContainer">
              <a href="./development">
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

export default LandingPage;
