import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

//runalbandishti.us.auth0.com
//oY5dB1LsNwIFTC17Kdf3MCXnsKsehemp
ReactDOM.render(
  <React.StrictMode>
      <Auth0Provider
        domain="runalbandishti.us.auth0.com"
        clientId="oY5dB1LsNwIFTC17Kdf3MCXnsKsehemp"
        redirectUri={window.location.origin}
        cacheLocation='localstorage'
      >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

