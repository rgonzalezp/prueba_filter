import React, { Component } from "react";
import { Redirect } from "react-router"
import Modal from 'react-bootstrap/Modal'
import axios from 'axios';
import API from './API.js';


const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
  }

class Login extends Component {

constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }


  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = ( event ) => {
    const { email, password } = this.state;
    this.setState({open:false})
    axios.post(API+"user/login" , {
           email: this.state.email,
           password: this.state.password
         })
                .then(res => {
                    const bearer = 'Bearer ' + res.data.token
                   this.props.handler(bearer)
                 this.setState({
                   redirect:true
                 })
                }).catch(err => {
            this.setState({ open: true });
          });

  };



    render() {
        if(this.state.redirect){
          return <Redirect to='/transactions'/>;
        }
    
         let saveAndClose = () => {
    
           this.setState({ open: false })
        }

    

        return (
            <div>
            <Modal show={this.state.open} onHide={saveAndClose}>
               <Modal.Header closeButton>
                 <Modal.Title> Error </Modal.Title>
               </Modal.Header>
               <Modal.Body>Incorrect Password or inexistent account</Modal.Body>
               <Modal.Footer>
                 <button variant="secondary" onClick={saveAndClose}>
                   Close
                 </button>
               </Modal.Footer>
             </Modal>
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email"
                  
                                onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                        name="password"
                        onChange={this.onChange}/>
                </div>

                <div className="form-group">
                   
                </div>

             
            </form>
            <button className="btn btn-primary btn-block" onClick= {this.handleSubmit}>Login</button>
            </div>
        );
    }
}

export default Login;
