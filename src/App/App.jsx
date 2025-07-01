import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.scss';
import { Layout } from "./Layout/Layout";
import { Home } from './Home/Home';
import { About } from './About/About';
import { Projects } from './Projects/Projects';
import { Error } from './Error/Error';

function App() {
  const [career, setCareer] = useState("environmental engineer");
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={ <Layout career={ career }><Home career={ career } setCareer={ setCareer } /></Layout> } />
        <Route path='/about' element={ <Layout career={ career }><About career={ career } /></Layout> } />
        <Route path='/projects' element={ <Layout career={ career }><Projects career={ career } /></Layout> } />
        <Route path='*' element={ <Layout career={ career }><Error career={ career } /></Layout> } />
      </Routes>
    </HashRouter>
  );
}

export default App;
