import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import Mun from "./pages/Mun"
import Zhs from "./pages/Zhs"
import Registration from "./pages/Registration"
import Team from "./pages/Team"
import PreprationGuide from "./pages/PreprationGuide"
import Sponsers from "./pages/Sponsers.jsx"
import Faqs from "./pages/Faqs.jsx"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/aboutmun" element={<Mun />} />
          <Route path="/aboutzhs" element={<Zhs />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/team" element={<Team />} />
          <Route path="/prepguide" element={<PreprationGuide />} />
          <Route path="/sponsers" element={<Sponsers />} />  
          <Route path="/faqs" element={<Faqs />} />    
        </Routes>
      </BrowserRouter>
  )
}

export default App;
