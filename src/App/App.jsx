import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Layout } from './Layout/Layout';
import { Home } from './Home/Home';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route index element={ <Home /> } />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
