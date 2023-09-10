// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { Provider } from 'react-redux'
// // import { createRoot } from "react-dom/client";
// import store from './Store/index.jsx'
// const container = document.getElementById("root");


//   ReactDOM.createRoot(container).render(
  //     <React.StrictMode>
  //       <Main/>
  //     </React.StrictMode>,
  //   )
 
// // const root = createRoot(container); // createRoot(container!) if you use TypeScript
//     // root.render(<Main tab="home" />);

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import store from './Store/index.jsx';

function Main() {
  return (
      <Provider store={store}>
          <App />
      </Provider>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)