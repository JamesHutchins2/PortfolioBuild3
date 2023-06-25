import React from 'react'
import './index.css'
import { Switch, Route } from 'react-router-dom'

import ProjectMain from './components/Projects/ProjectMain'
import Experience from './components/experience/Experience'
import Cont from './components/about/Cont'
import Middle from './Middle'

import './index.css'

const App = () => {
  return(
    
      
      <Switch>
        <Route exact path="/" component={Middle}/>
        <Route exact path="/workExperience/" component={Cont}/>
        
        <Route path="/projects/" component={Experience}/>
      </Switch>
      
    )
}

export default App
