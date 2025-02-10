import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../src/pages/home/home.jsx';
import About from './pages/about/about.jsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home/user/:id" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;