import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Certifications from "./pages/Certifications"
import TrainCertify from "./pages/TrainCertify"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/traincertify" element={<TrainCertify />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App