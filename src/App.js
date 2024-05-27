import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import { Component } from 'react';
import RestaurantContext from './Context/restaurantContext';

class App extends Component {
  state = {orderCount: 0}

  changeOrder = count => {
    this.setState({orderCount: count})
  }

  render(){
    const {orderCount} = this.state

    return (
      <RestaurantContext.Provider value={{orderCount: orderCount, setOrderCount:this.changeOrder}} >
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </BrowserRouter>
      </RestaurantContext.Provider>
    )
  }
}

export default App;
