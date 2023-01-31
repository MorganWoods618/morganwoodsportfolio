import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from "./components/header";
import HomePage from './pages/homePage';

function App() {
  return (
    <BrowserRouter>
      {/* <Header/> */}
        <Routes>
      <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
