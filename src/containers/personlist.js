import React , { Component } from 'react';
import * as actionTypes from '../store/actions/actionTypes';
import { connect } from 'react-redux';

class Personlist extends Component {
    render(){
        return (
            <div>
                <button onClick={this.props.clickHandler}> Add Random Person </button>
                
                <h2>PersonList : </h2>
                {(this.props.personList.length > 0) && this.props.personList.map((item, index) => {
                    return (
                        <div key={index} style={{display: 'inline-block', border: '1px solid grey', backgroundColor:'lightseagreen', padding:'5px', margin: '10px'}}>
                        <p>{item.name}</p>
                        </div>
                    )
                })}
                {this.props.personList.length === 0 && <p>No person in the list!!</p>  }
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        personList :  state.PersonReducer.personList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clickHandler : () => dispatch({type : actionTypes.ADD_PERSON_LOADING})
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(Personlist)
