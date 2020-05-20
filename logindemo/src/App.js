import React, {Component} from 'react';
import'bootstrap/dist/css/bootstrap.css';
import'bootstrap/dist/css/bootstrap-theme.css';

import GoogleLogin from './components/GoogleLogin';
import InputsControl from './components/InputControl/InputsControl';
import FormPage from './components/InputControl/FormPage';
import InputsControlFunctional from './components/InputControl/InputsControlFunctional';


function App() {
    return (
      <div className="App">
          
          {/* <GoogleLogin /> */}
            {/* <FormPage /> */}
          {/* <InputsControl/> */}
          
          <InputsControlFunctional />
      </div>
        );
    }

export default App;