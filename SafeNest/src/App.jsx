import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing"
import Home from "./components/Home"

function App() {
  return (
    <Router>
      <div>
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        

      </Routes>
    
      </div>
    </Router>

  );
}


export default App
