import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getLeagues } from './redux/pages/homeReducer';
import Home from './components/Home';
import Footer from './components/Footer';
import Leaderboard from './components/Leaderboard';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeagues());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard/:id" element={<Leaderboard />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;