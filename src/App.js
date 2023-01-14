import React from 'react'
import './index.css'
import { Switch, Route } from 'react-router-dom'

import ProjectMain from './components/Projects/ProjectMain'
import SEC from './components/SEC/SEC'
import StockApi from './components/StockData/StockApi'
import Middle from './Middle'

import './index.css'

const App = () => {
  return(
    
      
      <Switch>
        <Route exact path="/" component={Middle}/>
        <Route exact path="/project/" component={ProjectMain}/>
        <Route exact path="/SEC/" component={SEC}/>
        <Route path="/StockApi/" component={StockApi}/>
      </Switch>
      
    )
}

export default App
