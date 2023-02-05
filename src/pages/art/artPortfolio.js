import { Container, Row, Button } from "react-bootstrap";
import "./artPortfolio.css";
import Header from "../../components/webDevComponents/header";

const ArtPortfolio = () => {
  return (
    <div className="main">
 <Header/>
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Morgan Woods Portfolio</h1>
            </div>
            <img className="profilePic" src="https://i.imgur.com/Jn24JKy.jpeg"/>
            <div className="buttonContainer">
              <a href="./contactMe">
                <Button>
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

export default ArtPortfolio;
