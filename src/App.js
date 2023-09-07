import './App.css';
import Aos from "aos";
import { useEffect } from "react";

// import routes
import { Routes, Route } from "react-router-dom";

// import components
import Login from "./components/Login Page/Login";
import Register from "./components/Register Page/Register"

function App() {
  useEffect(() => {
    Aos.init();
  }, []);


  return (
    <>
      <div className="max-w-[1080px] mx-auto">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Register' element={<Register />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
