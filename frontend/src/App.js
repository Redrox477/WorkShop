import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllCases from './Components/AllCases';
import AddCase from './Components/AddCase';
import DelCase from './Components/DelCase';
import UpdateCase from './Components/UpdateCase';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getcases" element={<AllCases />} />
          <Route path="/addcase" element={<AddCase />} />
          <Route path="/updatecase" element={<UpdateCase />} />
          <Route path="/delcase" element={<DelCase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
