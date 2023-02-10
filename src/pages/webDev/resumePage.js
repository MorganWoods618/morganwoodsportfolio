import Header from "../../components/webDevComponents/header";


const ResumePage = () => {
    return (
      <div>
        <Header/>
        <div className="title">
          Resume
          <img className='badge' src='https://images.credly.com/size/220x220/images/c4beedf3-af4c-405d-8671-4a1ebd70fe24/badge-coding-bootcamp-trilogy.png'/>
        </div>
        <div className="center">
          <div className="card">
            <img src="https://i.imgur.com/sKwpgdO.jpeg"/>
          </div>
        </div>
      </div>
    );
  };
  
  export default ResumePage;
  