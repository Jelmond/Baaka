import React from 'react'
import {useRoutes} from './routes.js'
import 'materialize-css'

function App() {
  const routes = useRoutes(false)
  return (
      <div className = 'container'>
        {routes}
      </div>
  );
}

export default App;
