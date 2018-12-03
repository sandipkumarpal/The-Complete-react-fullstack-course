import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import PrivateRouter from './PrivateRouter';

function App() {
  return (
    <BrowserRouter>
      <PrivateRouter/>
    </BrowserRouter>
  );
}

export default App;
