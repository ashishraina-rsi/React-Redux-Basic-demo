import './App.css';
import React , { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component{
  render(){
    return (
      <div className="App">
        <p>Redux Basics</p>
        {this.props.ctr}
        <div><button onClick={() => this.props.inr(5)}>increment by 5</button></div>
        <div><button onClick={() => this.props.inr(10)}>increment by 10</button></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr : state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inr : (x) => dispatch({type : 'INCREMENT', payload : x})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



