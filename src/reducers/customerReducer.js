import {REQUEST_CUSTOMERS, RECEIVE_CUSTOMERS, OPEN_CUSTOMER_MODAL, CLOSE_CUSTOMER_MODAL,
      SELECT_CUSTOMER} from '../actions/index';

export default function customer(state = {isFetching: false, items: [],
                          selectedCustomer: {id: -1, name: '', address:'', phone: ''}}, action){
      switch (action.type) {
        case REQUEST_CUSTOMERS:
            return Object.assign({}, state, {isFetching: true});
        case RECEIVE_CUSTOMERS:
            return Object.assign({}, state, {isFetching: false, items: action.customers});
        case  OPEN_CUSTOMER_MODAL:
             return Object.assign({}, state, {showCustomerModal: true});
        case  CLOSE_CUSTOMER_MODAL:
               return Object.assign({}, state, {showCustomerModal: false});
        case  SELECT_CUSTOMER:
                   return Object.assign({}, state, {selectedCustomer: action.customer});
        default:
          return state;
      }

};
