import { createRoot } from "react-dom/client";4
import { StrictMode } from "react";
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)