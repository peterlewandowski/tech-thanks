import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initContract } from './components/services/near/utils'

const root = ReactDOM.createRoot(document.getElementById('root'));
window.nearInitPromise = initContract()  
.then(() => {
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
})
.catch(console.error)
