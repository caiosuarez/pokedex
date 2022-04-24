import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

// components
import Navbar from './components/Navbar';
import Pokedex from './components/Pokedex';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Pokedex />
            <GlobalStyles />
        </div>
    );
}

export default App;
