import React from 'react';
import { HashRouter, Route , Switch } from 'react-router-dom';
import IaunOb from './component/Objective.component';
import IaunRe from './component/Result.component';

function App() {


return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={IaunRe} />
      </Switch>
    </HashRouter>
      );
    }
export default App;