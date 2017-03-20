// modules/Repos.js
import React from 'react';
import { connect } from 'react-redux';
import {fetchCustomers, openCustomerModal, closeCustomerModal, submitCustomerModal,
        selectCustomer, deleteCustomerModalOpen, deleteCustomerModalClose, deleteCustomerSure} from '../actions/customers';
import CustomerItem from '../component/customer/CustomerItem';
import CustomerModal from '../component/customer/CustomerModal';
import CustomerDeleteModal from '../component/customer/CustomerDeleteModal';
import {Button} from 'react-bootstrap';

class Customers extends React.Component {
  componentDidMount(){
    this.props.fetchCustomers();
  }

  render(){
    const {customers, showCustomerModal, closeCustomerModal, openCustomerModal,
                          submitCustomerModal, selectedCustomer,
                        closeCustomerDeleteModal, showCustomerDeleteModal, editCustomer,
                         openCustomerDeleteModal, deleteCustomerSure}  = this.props;
    return (
      <div>
        <h2>Customer List</h2>
        <Button onClick={openCustomerModal}>Create</Button>
        <CustomerModal showCustomerModal={showCustomerModal} closeCustomerModal={closeCustomerModal}
            submitCustomerModal={submitCustomerModal} selectedCustomer={selectedCustomer}/>
          <CustomerDeleteModal customer={selectCustomer} closeCustomerDeleteModal={closeCustomerDeleteModal}
              deleteCustomerSure={deleteCustomerSure} showCustomerDeleteModal={showCustomerDeleteModal}/>
        <table className="table ">
          <thead>
            <tr key="0">
                <th>#</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
              {customers.map(customer=>
                <CustomerItem key={customer.id} customer={customer} onEditClick={ () => editCustomer(customer)}
                onDeleteClick={() => openCustomerDeleteModal(customer)} />
              )}
            </tbody>
        </table>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCustomers: ()=>{
        dispatch(fetchCustomers());
    },
    closeCustomerModal: ()=>{
        dispatch(closeCustomerModal());
    },
    editCustomer: (customer)=>{
      dispatch(selectCustomer(customer));
      dispatch(openCustomerModal());
    },
    openCustomerModal: ()=> {
       dispatch(selectCustomer({id:-1, name: '', address: '', phone: ''}));
       dispatch(openCustomerModal());
     },
     submitCustomerModal: (e)=>{
      dispatch(submitCustomerModal(e));
    },
    openCustomerDeleteModal: (customer)=>{
      dispatch(selectCustomer(customer));
      dispatch(deleteCustomerModalOpen());
    },
    closeCustomerDeleteModal: ()=>{
      dispatch(deleteCustomerModalClose());
    },
    deleteProductSure: ()=>{
      dispatch(deleteCustomerSure());
    },
  }
}
/*
                      submitCustomerModal
*/

function mapStateToProps(state, ownProps) {
  return {customers: state.customer.items, showCustomerModal: state.customer.showCustomerModal,
      selectedCustomer: state.customer.selectedCustomer, showCustomerDeleteModal: state.customer.showCustomerDeleteModal}
}
export default connect(mapStateToProps, mapDispatchToProps)(Customers)
