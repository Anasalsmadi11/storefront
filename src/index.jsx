import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import store from './Store/index.jsx';
import { BrowserRouter } from 'react-router-dom';
function Main() {
  return (
      <Provider store={store}>
          <App />
      </Provider>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Main />
    </BrowserRouter>
  </React.StrictMode>,
)