import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/webDev/aboutMePage";
import ContactForm from "./pages/webDev/contactPage";
import ExperiencePage from "./pages/webDev/experiencePage";
import LandingPage from "./pages/landingPage/landingPage";
import ResumePage from "./pages/webDev/resumePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/webdevelopment" element={<AboutMe />} />
        <Route path="contactme" element={<ContactForm />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="resume" element={<ResumePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
