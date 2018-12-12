import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import PrivateRouter from './PrivateRouter';

function App(props) {
  return (
    <BrowserRouter>
      <PrivateRouter {...props} />
    </BrowserRouter>
  );
}

export default App;
