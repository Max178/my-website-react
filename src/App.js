import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="header-block">
            <Link to="/">Home</Link>
          </div>
          <div className="header-block">
            <Link to="/blog">Blog</Link>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;