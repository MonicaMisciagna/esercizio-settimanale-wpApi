import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyFooter from './components/MyFooter';
import MyNavBar from './components/MyNavBar';
import Details from './pages/Details';
import AuthorPage from './pages/AuthorPage';

function App() {
  const urlAPI = 'http://localhost/ifoa/esercizio-wp/wordpress/index.php/wp-json/wp/v2/';

  return (
    <Router>
      <MyNavBar />
      <Routes>
        <Route path="/" element={<HomePage urlAPI={urlAPI} />} />
        <Route path="/post/:id" element={<Details urlAPI={urlAPI} />} />
        <Route path="/users" element={<AuthorPage urlAPI={urlAPI} />} />
      </Routes>
      <MyFooter />
    </Router>
  );
}

export default App;
