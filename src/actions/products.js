import fetch from 'isomorphic-fetch';
import {PRODUCT_URL, REQUEST_PRODUCTS, RECEIVE_PRODUCTS, CLOSE_PRODUCT_MODAL, OPEN_PRODUCT_MODAL,
    SELECT_PRODUCT, DELETE_PRODUCT_MODAL_OPEN, DELETE_PRODUCT_MODAL_CLOSE} from './index';


export function requestProducts() {
  return {
    type: REQUEST_PRODUCTS
  }
}

export function receiveProducts(json) {
  return {
    type: RECEIVE_PRODUCTS,
    products: json
  }
}


export function submitProductModal(formData){
  const name = formData.target.elements.name.value;
  const price = formData.target.elements.price.value;

  return (dispatch, getState) => {
      const productID = getState().product.selectedProduct.id;
      if(productID===-1){
        const data = {name, price};
        fetch(PRODUCT_URL, {method: "POST", headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)})
            .then(function(res){ return res.json(); })
            .then(function(data){ dispatch(fetchProducts()) })
      }else if(productID>-1){
        const data = {name, price};
        fetch(PRODUCT_URL+"/" + productID, {method: "PUT", headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)})
            .then(function(res){ return res.json(); })
            .then(function(data){dispatch(fetchProducts())})
      }
      return dispatch(closeProductModal());
  }
}

export function fetchProducts() {
  return dispatch => {
    dispatch(requestProducts());
    return fetch(PRODUCT_URL)
      .then(response => response.json())
      .then(json => dispatch(receiveProducts(json)))
  }
}


export  function openProductModal(){
  return {type: OPEN_PRODUCT_MODAL};
}
export  function closeProductModal(){
  return {type: CLOSE_PRODUCT_MODAL};
}

export function selectProduct(product){
  return {type: SELECT_PRODUCT, product}
}

export function deleteProductModalOpen(){
  return {type: DELETE_PRODUCT_MODAL_OPEN};
}
export function deleteProductModalClose(){
  return {type: DELETE_PRODUCT_MODAL_CLOSE};
}
export function deleteProductSure(){
  return (dispatch, getState) => {
    const productID = getState().product.selectedProduct.id;
    if(productID>-1){
      fetch(PRODUCT_URL+"/" + productID, {method: "DELETE", headers: {'Content-Type': 'application/json'}})
          .then(function(res){ return res.json(); })
          .then(function(data){dispatch(deleteProductModalClose()) })
          .then(function(){dispatch(fetchProducts())});
    }
  };
}
