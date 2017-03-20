import { combineReducers } from 'redux';
import productReducer from './productReducer';
import customerReducer from './customerReducer';


const rootReducer = combineReducers({
  product: productReducer, customer: customerReducer
})

export default rootReducer
