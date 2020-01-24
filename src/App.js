import React from 'react'
import { HashRouter, Route , Switch } from 'react-router-dom'
import Home from "./page/Home.page"
import Navbar from "./component/Navbar.component"
import Footer from "./component/Footer.component"

function App() {


return (
    <HashRouter>
      <div className='App'>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer/>
      </div>
    </HashRouter>
      );
    }
export default App;