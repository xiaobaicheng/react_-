import React, { useState } from 'react';

import route from './router/index'
import { useRoutes } from 'react-router-dom'
const App= () => {
const element = useRoutes(route)
  return (
  <div>{element}</div>
  );
};

export default App;