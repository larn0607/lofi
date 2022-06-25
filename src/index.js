import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux'

import { AudioProvider } from './context/AudioProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
          <AudioProvider>
      <App />
      </AudioProvider>
    </Provider>
  // </React.StrictMode>
);