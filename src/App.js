import {Route, Switch, BrowserRouter} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import NotFound from './components/NotFound'

import TeamMatches from './components/TeamMatches'

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team-matches/:id" component={TeamMatches} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
