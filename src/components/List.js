import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {requestApiData} from "../actions";

const mapStateToProps = state => {
    console.log('STATES', state);
  return { articles: state.lists};
};

const mapDispatchToProps = dispatch => bindActionCreators({ requestApiData }, dispatch);
  
class ConnectedList extends Component {
    constructor(props) {
      super(props);
    }

    fetchData() {
        this.props.requestApiData();
    }
    componentDidMount() {
        this.fetchData();
    }
    render(){
        console.log('lists', this.props);
        return (
            <div>
                 <ul>
                      {this.props.articles.map(el => (
                      <li key={el.id}>{el.title}</li>
                       ))}
                 </ul>
               
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

