import AboutUs from "./pages/AboutUs"
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Services from "./pages/Services"
import Projects from "./pages/Projects"

export default function App() {
  return (
    <div className="w-full h-full bg-white *:text-black overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </Router>
    </div>
  )
}