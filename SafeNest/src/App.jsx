import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing"

function App() {
  return (
    <Router>
      <div>
         
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        

      </Routes>
    
      </div>
    </Router>

  );
}


export default App
