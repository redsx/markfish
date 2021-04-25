import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Editor from './pages/editor';
import TensileDiv from './components/TensileDiv';

import './App.less';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-menu">
          i 
        </div>
        <TensileDiv defaultWidth={200}>
          <div style={{ height: 500 }}>
          test 
          </div>
        </TensileDiv>
        <div className="App-content">
          <Switch>
            <Route path="/">
              <Editor />
            </Route>
          </Switch>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
