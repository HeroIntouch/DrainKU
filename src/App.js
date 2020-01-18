import React from 'react'
import { HashRouter, Route , Switch } from 'react-router-dom'


function App() {


return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </HashRouter>
      );
    }
export default App;