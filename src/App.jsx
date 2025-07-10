import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: '150px' }}> {/* Space for fixed navbar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;