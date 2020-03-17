import React, { Component } from 'react';
import './App.css';
import Header from './components/HeaderComponent';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect} from 'react-router-dom';
import Main from './components/MainComponent';
import Favorites from './components/FavoritesComponent';
import Footer from './components/FooterComponent';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    selectedLoc: 'Tel Aviv',
    selectedKey: '215854',
    favsArr: [],
    favsUpdatedArr: [],
    };

  }

  select=(arr)=>{
    this.setState(()=>({
      favsArr: arr
    }))
}

update=(arr)=>{
  this.setState(()=>({
    favsUpdatedArr: arr
  }))
}

updateCW=(loc,key)=>{
  this.setState(()=>({
    selectedLoc: loc,
    selectedKey: key
  }))
}


  render() {
    return (
      <BrowserRouter>
      <div id="app">
        <Header />
        <Switch>
        <Route path="/main" render={() => (<Main selectedLoc={this.state.selectedLoc} selectedKey={this.state.selectedKey} favsUpdatedArr={this.state.favsUpdatedArr} select={this.select}/>)} />
          {/* <Route path="/main" component={Main} /> */}
          {/* <Route path="/favorites" component={Favorites} /> */}
          <Route path="/favorites" render={() => (<Favorites passW={this.updateCW} favsArr={this.state.favsArr} 
          selectedLoc={this.state.selectedLoc} update={this.update} />)}/>
          <Redirect to="/main" />
        </Switch>
        <Footer />
      </div>
      </BrowserRouter>


    )
  }
}

