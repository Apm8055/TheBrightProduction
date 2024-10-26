
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/Login/LoginPage';
import DashboardPage from './Pages/Dashboard/DashboardPage';
import Baby from './Pages/Baby/Baby';
import Birthday from './Pages/Birthday/Birthday';
import PreWedding from './Pages/PreWedding/PreWedding';
import Wedding from './Pages/Wedding/Wedding';
import EngagementGallery from './Pages/Engagement/EngagementGallery';
import VideoPage from './Pages/Video/VideoPage';
import { useState } from 'react';
import './App.css';
import GalleryPage from './Pages/GalleryPage/GalleryPage';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage setToken={setToken} />} />
        <Route path="/dashboard" element={<DashboardPage token={token} />} />
        <Route path="/" element={<Home />} />
        <Route path="/baby" element={<Baby />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/prewedding" element={<PreWedding />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/engagement" element={<EngagementGallery />} />
        <Route path="/videos" element={<VideoPage/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
