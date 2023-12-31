import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from '../src/UserContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
   <UserProvider>
        <App />
      </UserProvider>
    <Toaster/>              {/*this is used coz we have kept taost in package.json me loc 11*/}
  </BrowserRouter>
    

);
