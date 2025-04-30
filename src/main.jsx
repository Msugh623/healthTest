import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import Statecontext from './state/Statecontext'
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Statecontext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Statecontext>
  </StrictMode>
);
