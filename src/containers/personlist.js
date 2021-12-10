import React , { Component } from 'react';
import * as actionTypes from '../store/actions';
import { connect } from 'react-redux';
class Personlist extends Component {

    onClickHandler = () => {
        console.log('clicked for API');
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => {
            return data.json();
        }).then(post => {
            console.log(post)
            this.props.clickHandler(post)
        })
       
    }

    render(){
        return (
            <div>
                <button onClick={this.onClickHandler}> Add Random Person </button>
                
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
        clickHandler : (x) => dispatch({type : actionTypes.ADD_PERSON, payload : x})
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(Personlist)
