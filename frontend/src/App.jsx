import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import Login from "./pages/Login";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/register" element={<RegisterPage/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>

      {/* toastify */}
      <ToastContainer />
    </>
  )
}

export default App
