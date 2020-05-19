import React, {Component} from 'react';
import'bootstrap/dist/css/bootstrap.css';
import'bootstrap/dist/css/bootstrap-theme.css';

import GoogleLogin from './components/GoogleLogin';
import InputsControl from './components/InputControl/InputsControl';
import FormPage from './components/InputControl/FormPage';


function App() {
    return (
      <div className="App">
          {/* <div className="container"> */}
          {/* <GoogleLogin /> */}
            {/* <FormPage /> */}
          <InputsControl/>
          {/* </div> */}
      </div>
        );
    }

export default App;