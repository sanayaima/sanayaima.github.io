import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = 'RK Sanayaima Singh'
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This site is under construction. <br /> Personal webpage of <b>RK Sanayaima Singh</b> coming soon.
        </p>
      </header>
    </div>
  );
}

export default App;
