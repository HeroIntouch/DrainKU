import React from 'react'
import { HashRouter, Route , Switch } from 'react-router-dom'
import GraphVariant from "./component/GraphVariant.component"
import Navbar from "./component/Navbar.component"
import Footer from "./component/Footer.component"
import Problem from "./component/Problem.component"

function App() {


return (
    <HashRouter>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Problem} />
        </Switch>
        <GraphVariant/>
        <Footer/>
      </div>
    </HashRouter>
      );
    }
export default App;