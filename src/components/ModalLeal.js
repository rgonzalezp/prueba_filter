import Modal from 'react-bootstrap/Modal'
import React, { Component } from "react";
 
class ModalLeal extends Component {

   constructor(props) {
      super(props);
     
    this.state = { open: false
     };
    
        
    }
 
  render(){
    let openModal = () => this.setState({ open: true })
    let closeModal = () => this.setState({ open: false })
 
    let saveAndClose = () => {
   
       this.setState({ open: false })
    }
 
    return (
            <div>
      <button variant="primary" onClick={openModal}>
        More info
      </button>

      <Modal show={this.state.open} onHide={saveAndClose}>
        <Modal.Header closeButton>
          <Modal.Title> Transaction {this.props.i}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Type: {this.props.type}</Modal.Body>
        <Modal.Body>Points: {this.props.points}</Modal.Body>
        <Modal.Body>Value: {this.props.value}</Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={saveAndClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
    )
  }
}

export default ModalLeal