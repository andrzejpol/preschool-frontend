import { Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation";
import Categories from "./components/Categories";
import Attendance from "./components/Attendance";
import Students from "./components/Students";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Categories />}/>
        <Route path="dashboard" element={<p>Dashboard</p>}/>
        <Route path="students" element={<Students/>}/>
        <Route path="classes" element={<p>Classes</p>}/>
        <Route path="teachers" element={<p>Teachers</p>}/>
        <Route path="parents" element={<p>Parents</p>}/>
        <Route path="attendance" element={<Attendance/>}/>
      </Route>
      <Route path="/settings" element={<p>Settings</p>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/logout" element={<p>Logout page</p>}/>
    </Routes>
  )
}

export default App
