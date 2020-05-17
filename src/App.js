import React from 'react';
import Home from './components/home';
import Tutors from './components/tutors';
import Navbar from './components/navbar';
import Subjects from './components/subjects';
import NotFound from './components/not-found';
import LoginForm from './components/loginForm';
import Register from './components/registerForm';
import AboutUs from './components/aboutUs';
import TutorForm from './components/tutorForm';
import Java from './components/subjects/java';
import Python from './components/subjects/python';
import SimpleSlider from './components/simpleSlider';
import VideoPlayer from './components/subjects/videoPlayer';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
  <React.Fragment>
    <main className="container-fluid">
    <Navbar />
    </main>
    <div className="container-fluid">
    <Switch>
    <Route path="/home" component={Home} />
    <Route path="/tutors/:id" component={TutorForm} /> 
    <Route path="/tutors" component={Tutors} />
    <Route path="/subjects" component={Subjects}/>
    <Route path="/loginForm" component={LoginForm} />
    <Route path="/aboutUs" component={AboutUs} />
    <Route path="/registerForm" component={Register} />
    <Route path="/java" component={Java} />
    <Route path="/python" component={Python} />
    <Route path="/simpleSlider" component={SimpleSlider} />
    <Route path="/videoPlayer" component={VideoPlayer} />
    <Route path="/not-found"  component={NotFound} />
    <Redirect from="/" exact to="/home" />
    <Redirect to="/not-found"  />
    </Switch>
    </div>
    
    </React.Fragment>
  );
}

export default App;
