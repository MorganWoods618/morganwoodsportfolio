import "./experiencePage.css";
import Header from "../../components/webDevComponents/header";

const ExperiencePage = () => {
  return (
    <div>
      <Header/>
      <div className="title">
        Experience
        <img className='badge' src='https://images.credly.com/size/220x220/images/c4beedf3-af4c-405d-8671-4a1ebd70fe24/badge-coding-bootcamp-trilogy.png'/>
      </div>
      <div className="center">
        <div className="card">
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
      <div>hello</div>
    </div>
  );
};

export default ExperiencePage;
