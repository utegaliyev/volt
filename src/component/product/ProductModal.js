import React from 'react';
import {Modal, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class ProductModal extends React.Component{

  render(){
    const {showProductModal, closeProductModal,
                          submitProductModal, selectedProduct} = this.props;
      return (
            <Modal show={showProductModal} onHide={closeProductModal}>
              <form onSubmit={ e=> {
                        e.preventDefault();
                        debugger;
                        submitProductModal(e);
                      } }>
              <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormGroup controlId="productModalName">
                  <ControlLabel>Product name</ControlLabel>
                  <FormControl
                  name="name" defaultValue={selectedProduct.name} type="text" placeholder="Product name..."/>

                </FormGroup>
                <FormGroup controlId="productModalPrice">
                  <ControlLabel>Price</ControlLabel>
                  <FormControl
                  name="price"
                  type="number" defaultValue={selectedProduct.price}
                  placeholder="Product price..."/>

                </FormGroup>
              </Modal.Body>
              <Modal.Footer>
              <Button type="submit">Save</Button>
              <Button onClick={closeProductModal}>Cancel</Button>
              </Modal.Footer>
              </form>

            </Modal>
            );
  }
}

export default ProductModal;
