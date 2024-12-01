//--> css
import "./App.css";

// src/App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import DataFetcher from './UserInterfaceComponents/FullView/DataFetcher';
import Wishlist from './UserInterfaceComponents/FullView/Wishlist';
import store from './ReduxStateManagementAndDataFetch/store';
import FullViewInterface from './UserInterfaceComponents/FullView/FullViewInterface';
import LoginAndCred from './UserInterfaceComponents/CredentialPage/LoginAndCred';

// states to thorw in redux


const App = () => {
  const [loginDis,setLoginDis]=useState(true);;
  return (
    <Provider store={store}>
      {loginDis && <LoginAndCred value={{setLoginDis}}/>}
      {!loginDis && <FullViewInterface/>}
      
     
    </Provider>
  );
};

export default App;
