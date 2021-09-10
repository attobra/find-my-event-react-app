import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Events from './Events'
import DisplayEvents from './DisplayEvents'
import { Button } from 'react-bootstrap'

export default function LandingPage() {
  return (
    <div>
      <h1>Welcome to our Events planning App</h1>
      <Router>

          <h3> Click here for our list of events:</h3>
            <Button variant="light">
              <Link to='/DisplayEvents'>Lists of Events</Link>
            </Button>
            <Button variant="dark">
              <Link to='/Events'>Add an Event here</Link>
            </Button>

        <Switch>
          <Route path='/DisplayEvents' component={DisplayEvents} />
          <Route path='/Events' component={Events} />
        </Switch>
      </Router>
    </div>
  )
}
