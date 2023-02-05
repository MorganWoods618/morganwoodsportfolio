import { Container, Row, Button } from "react-bootstrap";
import "./landingPage.css"

const LandingPage = () => {
  return (
    <div className="mainlanding">
      <Container>
        <Row>
            <div className="buttonContainer">
              <a href="./webdevelopment">
                <Button size="lg" className="landingbutton glowing-btn">
                  Developer Portfolio
                </Button>
              </a>
            </div>
            <div className="buttonContainer">
              <a href="./artportfolio">
                <Button size="lg" className="landingbutton glowing-btn">
                  Art Portfolio
                </Button>
              </a>
            </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
