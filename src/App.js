import React from 'react';
import { HashRouter, Route , Switch } from 'react-router-dom';
import Iaun from './component/Objective.component';

function App() {


return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Iaun} />
      </Switch>
    </HashRouter>
      );
    }
export default App;