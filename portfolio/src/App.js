import './styles/global.css';
import React from 'react';
import { NavComponent } from './components/navigation/navbar.js';
import { ScrollComponent } from './components/scroll-top/scroll-top.js';

function App() {
  return (
    <div className="App">
      <header>
        <NavComponent/>
      </header>
      <main>
        
      </main>
        <ScrollComponent/>
      <footer>     
      </footer>
    </div>
  );
}



export default App;
