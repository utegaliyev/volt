import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const ProductDeleteModal =({product, closeProductDeleteModal, deleteProductSure, showProductDeleteModal}) =>(
  <Modal show={showProductDeleteModal} onHide={closeProductDeleteModal}>
    <Modal.Header closeButton>
      <Modal.Title>Are you sure to delete {product.name} ?</Modal.Title>
    </Modal.Header>
    <Modal.Footer>
    <Button onClick={deleteProductSure}>Save</Button>
    <Button onClick={closeProductDeleteModal}>Cancel</Button>
    </Modal.Footer>

  </Modal>);


export default ProductDeleteModal;
