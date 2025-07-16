import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Layout } from "./Layout/Layout";
import { Home } from './Home/Home';
import { About } from './About/About';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={ <Layout><Home /></Layout> } />
        <Route path='/about' element={ <Layout><About /></Layout> } />
      </Routes>
    </HashRouter>
  );
}

export default App;
