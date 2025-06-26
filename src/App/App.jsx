import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Layout } from "./Layout/Layout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={ <Layout>Hello World!!</Layout> } />
        <Route path='/about' element={ <Layout>About me</Layout> } />
        <Route path='/projects' element={ <Layout>Projects</Layout> } />
        <Route path='/contact' element={ <Layout>Contact</Layout> } />
      </Routes>
    </HashRouter>
  );
}

export default App;
