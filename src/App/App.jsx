import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Home } from './Home/Home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={ <Home /> } />
      </Routes>
    </HashRouter>
  );
}

export default App;
