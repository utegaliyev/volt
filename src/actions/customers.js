import fetch from 'isomorphic-fetch';
import {CUSTOMER_URL, REQUEST_CUSTOMERS, RECEIVE_CUSTOMERS, SELECT_CUSTOMER, OPEN_CUSTOMER_MODAL,
        CLOSE_CUSTOMER_MODAL, DELETE_CUSTOMER_MODAL_OPEN, DELETE_CUSTOMER_MODAL_CLOSE} from './index';

export function requestCustomers() {
  return {
    type: REQUEST_CUSTOMERS
  }
}

export function receiveCustomers(json) {
  return {
    type: RECEIVE_CUSTOMERS,
    customers: json
  }
}
export function fetchCustomers() {
  return dispatch => {
    dispatch(requestCustomers())
    return fetch(CUSTOMER_URL)
      .then(response => response.json())
      .then(json => dispatch(receiveCustomers(json)))
  }
}
export  function openCustomerModal(){
  return {type: OPEN_CUSTOMER_MODAL};
}
export  function closeCustomerModal(){
  return {type: CLOSE_CUSTOMER_MODAL};
}
export function submitCustomerModal(formData){
  const name = formData.target.elements.name.value;
  const address = formData.target.elements.address.value;
  const phone = formData.target.elements.phone.value;

  return (dispatch, getState) => {
      const customerID = getState().customer.selectedCustomer.id;
      if(customerID===-1){
        const data = {name, address, phone};
        fetch(CUSTOMER_URL, {method: "POST", headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)})
            .then(function(res){ return res.json(); })
            .then(function(data){ dispatch(fetchCustomers()) })
      }else if(customerID>-1){
        const data = {name, address, phone};
        fetch(CUSTOMER_URL+"/" + customerID, {method: "PUT", headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)})
            .then(function(res){ return res.json(); })
            .then(function(data){ dispatch(fetchCustomers()) })
      }
      return dispatch(closeCustomerModal());
  }
}
export function selectCustomer(customer){
  return {type: SELECT_CUSTOMER, customer};
}

export function deleteCustomerModalOpen(){
  return {type: DELETE_CUSTOMER_MODAL_OPEN};
}
export function deleteCustomerModalClose(){
  return {type: DELETE_CUSTOMER_MODAL_CLOSE};
}
export function deleteCustomerSure(){
  return (dispatch, getState) => {
    const customerID = getState().customer.selectedCustomer.id;
    if(customerID>-1){
      fetch(CUSTOMER_URL+"/" + customerID, {method: "DELETE", headers: {'Content-Type': 'application/json'}})
          .then(function(res){ return res.json(); })
          .then(function(data){dispatch(deleteCustomerModalClose()) })
          .then(function(){dispatch(fetchCustomers())});
    }
  };
}
