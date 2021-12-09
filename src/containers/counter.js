import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button'
import * as actionTypes from '../store/actions'

export class Counter extends Component {
    render() {
        return (
            <div>
                {this.props.ctr}
                <Button clickHandler={() => this.props.inr(10)} value={'increment by 10'}/>
                <Button clickHandler={() => this.props.drm(10)} value={'decrement by 10'}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      ctr : state.CounterReducer.counter
    }
  }
  

const mapDispatchToProps = (dispatch) => {
    return {
        inr : (x) => dispatch({type : actionTypes.INCREMENT, payload : x}),
        drm : (x) => dispatch({type : actionTypes.DECREMENT, payload : x})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
