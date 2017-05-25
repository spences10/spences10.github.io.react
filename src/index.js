import React from 'react'
import { render } from 'react-dom'

import {
  HashRouter,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'

// import './css/style.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.min.css'

import App from './components/App'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

/*const Root = () => {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route exact path='/about' component={About} />
          <Route path='/header' component={Header} />
        </Switch>
      </div>
    </HashRouter>
  )
}

render(<Root />, document.querySelector('#main'))*/


const DefaultLayout = ({ children }) => (
  <div>
    <p>Main layout</p>
    {children}
  </div>
)

const AltLayout = ({ children }) => (
  <div>
    <p>Alternate layout</p>
    {children}
  </div>
)

const Home = () => (
  <span>Home</span>
)

const Work = () => (
  <span>Work</span>
)

const Blog = () => (
  <span>Blog</span>
)

const Root = () => {
  return (
    <HashRouter>
      <div>
        <ul>
          <li><Link to="/">Hi</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <p>The rendered route component:{' '}
          <Switch>
            <Route exact path="/" render={() => <DefaultLayout><About /></DefaultLayout>} />
            <Route exact path="/about" render={() => <DefaultLayout><About /></DefaultLayout>} />
            {/*<Route path="/portfolio" render={() => <DefaultLayout><Portfolio projectsArr={this.state.projects} /></DefaultLayout>} />*/}
            <Route path="/contact" render={() => <AltLayout><Contact /></AltLayout>} />
          </Switch>
        </p>
      </div>
    </HashRouter>
  )
}

render(<Root />, document.querySelector('#main'))
