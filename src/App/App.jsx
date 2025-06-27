import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Layout } from "./Layout/Layout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={ <Layout><main>Home</main></Layout> } />
        <Route path='/about' element={ <Layout><main>About me</main></Layout> } />
        <Route path='/projects' element={ <Layout><main>Projects</main></Layout> } />
        <Route path='/contact' element={ <Layout><main>Contact</main></Layout> } />
      </Routes>
    </HashRouter>
  );
}

export default App;
