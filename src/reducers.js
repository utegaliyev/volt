import { combineReducers } from 'redux';
import {REQUEST_PRODUCTS, RECEIVE_PRODUCTS, CLOSE_PRODUCT_MODAL, OPEN_PRODUCT_MODAL,
    SELECT_PRODUCT, DELETE_PRODUCT_MODAL_OPEN, DELETE_PRODUCT_MODAL_CLOSE} from './actions';

const emptyProduct = {id: -1, name: '', price: 0};
function product(state = {isFetching: false, items: [],
                  showProductModal: false, selectedProduct: emptyProduct,
                  showProductDeleteModal: false}, action){
      switch (action.type) {
        case REQUEST_PRODUCTS:
            return Object.assign({}, state, {isFetching: true});
        case RECEIVE_PRODUCTS:
            return Object.assign({}, state, {isFetching: false, items: action.products});
        case  OPEN_PRODUCT_MODAL:
          return Object.assign({}, state, {showProductModal: true});
        case  CLOSE_PRODUCT_MODAL:
            return Object.assign({}, state, {showProductModal: false});
        case  SELECT_PRODUCT:
                return Object.assign({}, state, {selectedProduct: action.product});
        case DELETE_PRODUCT_MODAL_OPEN:
                return Object.assign({}, state, {showProductDeleteModal: true});
        case DELETE_PRODUCT_MODAL_CLOSE:
                return Object.assign({}, state, {showProductDeleteModal: false});
        default:
          return state;
      }

}

const rootReducer = combineReducers({
  product
})

export default rootReducer
