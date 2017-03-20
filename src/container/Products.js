// modules/Repos.js
import React from 'react';
import { connect } from 'react-redux';
import {fetchProducts, openProductModal, closeProductModal, submitProductModal, selectProduct,
    deleteProductModalOpen, deleteProductModalClose, deleteProductSure} from '../actions/products';
import ProductItem from '../component/product/ProductItem';
import ProductModal from '../component/product/ProductModal';
import ProductDeleteModal  from '../component/product/ProductDeleteModal';
import {Button} from 'react-bootstrap';

class Products extends React.Component {
  componentDidMount(){
    this.props.fetchProducts();
  }
  render(){
    const {products, showProductModal, closeProductModal,
        openProductModal, submitProductModal, editProduct, selectedProduct,
      closeProductDeleteModal, openProductDeleteModal, showProductDeleteModal, deleteProductSure }
       = this.props;
    return (
    <div>
      <h2>Product List</h2>  <Button onClick={openProductModal}>Create</Button>
      <ProductModal showProductModal={showProductModal} closeProductModal={closeProductModal}
          submitProductModal={submitProductModal} selectedProduct={selectedProduct}/>

      <ProductDeleteModal product={selectedProduct}
        closeProductDeleteModal={closeProductDeleteModal}
        deleteProductSure={deleteProductSure} showProductDeleteModal={showProductDeleteModal}/>

      <table className="table ">
        <thead>
          <tr key="0">
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
          </tr>
          </thead>
          <tbody>
            {products.map(product=>
              <ProductItem key={product.id} product={product}
                onEditClick={ () => editProduct(product)}
                onDeleteClick={() => openProductDeleteModal(product)} />
            )}
          </tbody>
      </table>
    </div>
  );
  }
}


function mapStateToProps(state, ownProps) {
  return {products: state.product.items, showProductModal: state.product.showProductModal,
          selectedProduct:  state.product.selectedProduct, showProductDeleteModal:  state.product.showProductDeleteModal}
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: ()=>{
        dispatch(fetchProducts());
    },
    closeProductModal: ()=> {
      dispatch(closeProductModal());
    },
    openProductModal: ()=> {
        dispatch(selectProduct({id:-1, name: '', price: 0}));
        dispatch(openProductModal());
    },
    editProduct: (product)=>{
      dispatch(selectProduct(product));
      dispatch(openProductModal());
    },
    openProductDeleteModal: (product)=>{
      dispatch(selectProduct(product));
      dispatch(deleteProductModalOpen());
    },
    closeProductDeleteModal: ()=>{
      dispatch(deleteProductModalClose());
    },
    deleteProductSure: ()=>{
      dispatch(deleteProductSure());
    },
    submitProductModal: (e)=>{
      dispatch(submitProductModal(e));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)
