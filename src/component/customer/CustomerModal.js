import React from 'react';
import {Modal, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class CustomerModal extends React.Component{

  render(){
    const {showCustomerModal, closeCustomerModal,
                          submitCustomerModal, selectedCustomer} = this.props;
      return (
            <Modal show={showCustomerModal} onHide={closeCustomerModal}>
              <form onSubmit={ e=> {
                        e.preventDefault();
                        submitCustomerModal(e);
                      } }>
              <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormGroup controlId="customerModalName">
                  <ControlLabel>Customer name</ControlLabel>
                  <FormControl name="name" defaultValue={selectedCustomer.name} type="text" placeholder="Customer name..."/>

                </FormGroup>
                <FormGroup controlId="customerModalAddress">
                  <ControlLabel>Address</ControlLabel>
                  <FormControl
                    name="address"
                    type="text" defaultValue={selectedCustomer.address}
                    placeholder="Customer address..."/>

                </FormGroup>
                <FormGroup controlId="customerModalPhone">
                  <ControlLabel>Phone</ControlLabel>
                  <FormControl
                    name="phone"
                    type="text" defaultValue={selectedCustomer.phone}
                    placeholder="Customer phone..."/>
                </FormGroup>
              </Modal.Body>
              <Modal.Footer>
              <Button type="submit">Save</Button>
              <Button onClick={closeCustomerModal}>Cancel</Button>
              </Modal.Footer>
              </form>

            </Modal>
            );
  }
}

export default CustomerModal;
