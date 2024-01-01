import App from 'components/App';
import './index.css';
import React from 'react';

import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/sport-carrier">
      {/* <Provider store={store}>
        <PersistGate persistor={persistor}> */}
      <App />
      {/*  </PersistGate>
      </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);
