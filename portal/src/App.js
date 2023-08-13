import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import  Student  from './pages/student';
import  Teacher  from './pages/teacher';
import Parent from './pages/parent';
import Home from './pages/home';
import Navbar from './pages/navbar';
import Footer from './pages/footer';
import Events from './pages/events';
import Ann from './pages/ann';
import Subject from './pages/subject';
import Notes from './pages/notes';
import Contact from './pages/contact';
import About from './pages/about';
import Pdf from './pages/pdf';
import Hod from './pages/hod';
import Feedback from './pages/feedback';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/login" Component={Login} />
      <Route path="/signup" Component={Signup} />
      <Route path="/student" Component={Student} />
      <Route path="/teacher" Component={Teacher} />
      <Route path="/parent" Component={Parent} />
      <Route path="/" Component={Home} />
      <Route path="/events" Component={Events} />
      <Route path="/ann" Component={Ann} />
      <Route path="/subject" Component={Subject} />
      <Route path="/notes/:id" Component={Notes} />
      <Route path="/contact" Component={Contact} />
      <Route path="/about" Component={About} />
      <Route path="/pdf" Component={Pdf} />
      <Route path="/hod" Component={Hod} />
      <Route path="/feedback" Component={Feedback} />
    </Routes>
    <Footer/>

      </>
   
  );
}

export default App;
