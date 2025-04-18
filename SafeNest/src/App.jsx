import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Unsafe from "./components/Unsafe"
import Dashboard from "./components/Dashboard"
import Landing from './components/Landing';

function App() {
  return (
    <Router>
      <div>
      
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/unsafe" element={<Unsafe />} />
        <Route path="/" element={<Landing />} />

        
      
      </Routes>
    
      </div>
    </Router>

  );
}


export default App
