import AboutUs from "./pages/AboutUs"
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Services from "./pages/Services"

export default function App() {
  return (
    <div className="w-full h-full bg-white *:text-black overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </div>
  )
}