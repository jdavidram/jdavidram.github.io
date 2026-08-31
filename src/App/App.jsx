import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Home } from './Home/Home';
import { Courses } from './Courses/Courses';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={ <Home /> } />
        <Route path='/courses' element={ <Courses /> } />
      </Routes>
    </HashRouter>
  );
}

export default App;
