import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./style/style.scss"
import MainPage from "./components/pages/MainPage";
import AutorizationPage from "./components/pages/AutorizationPage";
import ContactsPage from "./components/pages/ContactsPage";
import DubPage from "./components/pages/DubPage";
import RedubPage from "./components/pages/RedubPage";
function App() {
  return (
    <>
    
      <BrowserRouter>
      <Routes>
        
      <Route path="/" element={<MainPage/>} />
      <Route path="/autorization" element={<AutorizationPage/>} />
      <Route path="/contacts" element={<ContactsPage/>} />
      <Route path="/dub" element={<DubPage/>} />
      <Route path="/redub" element={<RedubPage/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
