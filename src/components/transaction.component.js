import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import API from './API.js';

export default class Transaction extends Component {

    constructor(props) {
      super(props);
     
    this.state = { transactions:[] };
    
        
    }


    componentDidMount() {

        const headers = {
          'Authorization': this.props.auth
        };
  
          axios.get(API+"user/my/transactions", {headers}).then(res => {
            console.log(res.data.data)
              const allTransactions = res.data.data;
              this.setState({transactions:allTransactions})
             
            });
        }

renderTransactions() { 
    return (
    <ListGroup>
        {!this.state.transactions.length? null : this.state.transactions.map(item => {
              return <ListGroup.Item> Value:{item.value} Points{item.points} Type:{item.type} Created:{item.createdDate}</ListGroup.Item>;})
        }
    </ListGroup>
    );
}

    render() {
        return (
            <div>  
              {this.renderTransactions()}
            </div>
        );
    }





}


