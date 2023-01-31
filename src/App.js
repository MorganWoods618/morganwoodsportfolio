import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LandingPage from './pages/landingPage';
import Header from './components/header'
import ContactForm from './pages/contactPage';
import ExperiencePage from './pages/experiencePage';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="contactme" element={<ContactForm/>} />
      <Route path="experience" element={<ExperiencePage/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
