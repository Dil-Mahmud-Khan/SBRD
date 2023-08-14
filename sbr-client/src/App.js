import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from './Component/Home';
import StudentsView from './Component/student/StudentsView';
import NavBar from './Component/common/NavBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddStudent from './Component/student/AddStudent';
import EditStudent from './Component/student/EditStudent';
import StudentPofile from './Component/student/StudentProfile';

function App() {
  return (
    <main className="container mt-5">


      <Router>
        <NavBar></NavBar>


        <Routes>
          <Route exact
            path="/"
            element={<Home></Home>}>
          </Route>
          <Route
            exact
            path="/view-students"
            element={<StudentsView></StudentsView>}>
          </Route>
          <Route
            exact
            path="/add-students"
            element={<AddStudent></AddStudent>}>
          </Route>
          <Route
            exact
            path="/edit-student/:id"
            element={<EditStudent></EditStudent>}>
          </Route>
          <Route
            exact
            path="/student-profile/:id"
            element={<StudentPofile></StudentPofile>}>
          </Route>
        </Routes>
      </Router>

    </main>
  );
}

export default App;
