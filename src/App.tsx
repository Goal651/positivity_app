import AboutUs from "./pages/about/AboutUs"
import Home from "./pages/home/Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className="w-full h-full bg-white *:text-black overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  )
}