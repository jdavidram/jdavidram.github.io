import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Home } from './Home/Home';
import { Courses } from './Courses/Courses';
import { CV } from './CV/CV';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={ <Home /> } />
        <Route path='/courses' element={ <Courses /> } />
        <Route path='/cv' element={ <CV /> } />
      </Routes>
    </HashRouter>
  );
}

export default App;
