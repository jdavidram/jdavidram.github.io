import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Layout } from "./Layout/Layout";
import { Home } from './Home/Home';
import { useState } from 'react';

function App() {
  const [career, setCareer] = useState("environmental engineer");
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={ <Layout career={ career }><Home career={ career } setCareer={ setCareer } /></Layout> } />
        <Route path='/about' element={ <Layout career={ career }><main>About me</main></Layout> } />
        <Route path='/projects' element={ <Layout career={ career }><main>Projects</main></Layout> } />
        <Route path='/contact' element={ <Layout career={ career }><main>Contact</main></Layout> } />
      </Routes>
    </HashRouter>
  );
}

export default App;
