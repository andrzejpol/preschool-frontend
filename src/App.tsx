import {Route, Routes} from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFoundPage from "./components/NotFoundPage";
import TeachersPage from "./components/TeachersPage";
import StudentsPage from "./components/StudentsPage";
import ParentsPage from "./components/ParentsPage";
import ClassesPage from "./components/ClassesPage";
import EventsPage from "./components/EventsPage";
import TeacherDetailPage from "./components/TeacherDetailPage";
import AttendancePage from "./components/AttendancePage";
import StudentDetailPage from "./components/StudentDetailPage";
import ParentDetailPage from "./components/ParentDetailPage";

function App() {
  const isAuthenticated = true;

  return (
    <Routes>
      <Route path="/dashboard" element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <DashboardLayout/>
        </ProtectedRoute>
      }>
        <Route index element={<Dashboard/>}/>
        <Route path="students" element={<StudentsPage/>}/>
        <Route path="students/:id" element={<StudentDetailPage/>}/>
        <Route path="classes" element={<ClassesPage/>}/>
        <Route path="teachers" element={<TeachersPage/>}/>
        <Route path="teachers/:id" element={<TeacherDetailPage/>}/>
        <Route path="parents" element={<ParentsPage/>}/>
        <Route path="parents/:id" element={<ParentDetailPage/>}/>
        <Route path="attendance" element={<AttendancePage/>}/>
        <Route path="events" element={<EventsPage/>}/>
        <Route path="messages" element={<p>Messages</p>}/>
      </Route>
      <Route path="/settings" element={<p>Settings</p>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/logout" element={<p>Logout page</p>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  )
}

export default App;
