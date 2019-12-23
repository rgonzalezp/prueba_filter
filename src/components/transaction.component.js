import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import API from './API.js';
import DatePicker from "react-datepicker";
import ModalLeal from "./ModalLeal";

import "react-datepicker/dist/react-datepicker.css";



import moment from "moment";

export default class Transaction extends Component {

    constructor(props) {
      super(props);
     
    this.state = { transactions:[],
    startDate:moment(),
    endDate:moment()
     }; 
    }


    componentDidMount() {
        this.setState({
            auth: this.props.auth
        })
        }

renderTransactions() { 
    var i = 1;
    return (
    <ListGroup>
        {!this.state.transactions.length? null : this.state.transactions.map(item => {
              return <ListGroup.Item key={item._id}> Transaction {i}<ModalLeal points={item.points} value={item.value} type={item.type} i={i++}/></ListGroup.Item>;})
        }
    </ListGroup>
    );
}



  handleSubmit = ( event ) => {
     const headers = {
          'Authorization': this.state.auth
        };

    const start = this.state.startDate.format('YYYY-MM-DD')
    const end = this.state.endDate.format('YYYY-MM-DD')
          axios.get(API+"user/my/transactions?startDate="+start+"&endDate="+end,{headers}).then(res => {
            console.log(res.data.data)
              const allTransactions = res.data.data;
              this.setState({transactions:allTransactions})
             
            });

  };

    render() {
        return (
      
            <Container >
            <h6 >
            Pick dates to filter your transaction history
            </h6>
            <Row className="justify-content-center">
            <p>Start Date:</p>
              <DatePicker
                className="custom-date-picker"
                selected={this.state.startDate.toDate()}
                onChange={date => {
                  this.setState({ startDate: moment(date) });
                }}
                name="startDate"
        
                dateFormat="MMMM d, yyyy"
             
              />
          
            
            </Row> 
             <Row className="justify-content-center">
            <p>End Date:</p>   
               <DatePicker
                className="custom-date-picker"
                selected={this.state.endDate.toDate()}
                onChange={date => {
                  this.setState({ endDate: moment(date) });
                }}
                name="startDate"
              
              
                dateFormat="MMMM d, yyyy"
           
              />
     
            
            </Row> 
            <button className="btn btn-primary btn-block" onClick= {this.handleSubmit}>Search</button>
            <Row className="justify-content-center">
            {this.renderTransactions()}
            </Row>
            </Container>
           
      
        );
    }





}


