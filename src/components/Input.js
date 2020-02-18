import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {reciveInputData} from "../actions";
const mapStateToProps = state => {
    console.log('STATES', state);
  return { artdata:state.art};
};

const mapDispatchToProps = dispatch => bindActionCreators({reciveInputData}, dispatch);
 class Input extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              Amount:''
         }
         
     }
     ChangeHandler=(event)=>{
         this.setState({[event.target.name]:event.target.value})
     }
     Changebutton=(event)=>{
         event.preventDefault();
         const data={
            Amount:this.state.Amount
        }
        this.props.reciveInputData(data)
        console.log('//////////////////////////',data)
         if(this.state.Amount>0){
            alert('Amount is SucseesFully Aded')
        }
        else{
            alert('Please Enter A Valid Amount')
        }
     }
    render() {
        return (
            <div>
                 <input onChange={this.ChangeHandler} name='Amount' type='number'></input>
                 <br/>  <br/>
                 <button onClick={this.Changebutton}>Enter Amount</button>
                 <h1>{this.props.artdata.Amount}</h1>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Input)