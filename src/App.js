import React,{Component,Fragment} from 'react'
import {HashRouter as Router,Route} from "react-router-dom"
import HKLaout from './components/HKLaout'
import Home from './pages/home'
import List from './pages/list'
import Profile from './pages/profile'
import Info from './pages/info'

export default class App extends Component{
  render(){
    return(
     <Fragment>
        <Router>
        <Route path='/' exact render={()=><HKLaout><Home ></Home></HKLaout>}></Route>
        <Route path='/list' exact render={()=><HKLaout><List ></List></HKLaout>}></Route>
        <Route path='/profile' exact render={()=><HKLaout><Profile ></Profile></HKLaout>}></Route>
        <Route path='/info' exact render={()=><HKLaout><Info /></HKLaout>}></Route>
      </Router>
     </Fragment>
    )
  }

}