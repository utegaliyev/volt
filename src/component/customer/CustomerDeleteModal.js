import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const CustomerDeleteModal =({customer, closeCustomerDeleteModal, deleteCustomerSure, showCustomerDeleteModal}) =>(
  <Modal show={showCustomerDeleteModal} onHide={closeCustomerDeleteModal}>
    <Modal.Header closeButton>
      <Modal.Title>Are you sure to delete {customer.name} ?</Modal.Title>
    </Modal.Header>
    <Modal.Footer>
    <Button onClick={deleteCustomerSure}>Save</Button>
    <Button onClick={closeCustomerDeleteModal}>Cancel</Button>
    </Modal.Footer>

  </Modal>);


export default CustomerDeleteModal;
