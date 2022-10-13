import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Notes, Create } from './Pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Notes />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
