import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Home } from './Pages/Home/Home';
import { Courses } from './Pages/Courses/Courses';
import { Projects } from './Pages/Projects/Projects';
import { Error } from './Pages/Error/Error';
import { CV } from './CV/CV';

function App() {
  // console.log(navigator.language);
  return (
    <HashRouter>
      <Routes>
        <Route index element={ <Home /> } />
        <Route path="/courses" element={ <Courses /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/cv" element={ <CV /> } />
        <Route path="/*" element={ <Error /> } />
      </Routes>
    </HashRouter>
  );
}

export default App;
