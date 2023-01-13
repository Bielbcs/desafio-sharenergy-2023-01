import { Route, Routes } from 'react-router-dom';
import CatPage from './pages/CatPage';
import ClientPage from './pages/ClientsPage';
import DogPage from './pages/DogPage';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Modal from 'react-modal';
import './App.css';

Modal.setAppElement('#root');

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/cat" element={<CatPage />} />
      <Route path="/dog" element={<DogPage />} />
      <Route path="/clients" element={<ClientPage />} />
    </Routes>
  )
}

export default App
