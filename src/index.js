import React from "react";
import ReactDom from "react-dom";
import Main from "./App";
import "./index.css";
import { Auth0Provider } from '@auth0/auth0-react';
// import '../public/style.css';

ReactDom.render(
    <Auth0Provider
    domain="dev-e42l55i1jjau2q6a.us.auth0.com"
    clientId="4zRtOP2k2NFZwgssj2zJaTnki5isOV5m"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <Main />
  </Auth0Provider>



    
    ,document.getElementById('root'));