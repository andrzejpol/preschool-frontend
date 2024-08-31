import {Route, Routes} from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="students" element={<p>students</p>}/>
        <Route path="classes" element={<p>Classes</p>}/>
        <Route path="teachers" element={<p>Teachers</p>}/>
        <Route path="parents" element={<p>Parents</p>}/>
        <Route path="attendance" element={<p>Attendance</p>}/>
        <Route path="events" element={<p>Events</p>}/>
        <Route path="messages" element={<p>Messages</p>}/>
      </Route>
      <Route path="/settings" element={<p>Settings</p>}/>
      <Route path="/login" element={<p>Login</p>}/>
      <Route path="/register" element={<p>Register</p>}/>
      <Route path="/logout" element={<p>Logout page</p>}/>
    </Routes>
  )
}

export default App;
