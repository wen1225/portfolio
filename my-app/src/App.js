import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectPage from './pages/Projects/ProjectPage';
import Photography from './pages/Photography';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/*" element={<NotFound />} /> {/* Optional: Render a "Not Found" component for unmatched routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
