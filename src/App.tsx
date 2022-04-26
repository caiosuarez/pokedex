import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

// components
import Navbar from './components/Navbar';

// pages
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <GlobalStyles />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pokedex" element={<Home />} />
                    <Route path="favorites" element={<Favorites />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
