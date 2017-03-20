import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';
const ProductItem = ({product, onEditClick, onDeleteClick}) =>(
  <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td><Button bsStyle="primary" onClick={onEditClick}>Edit</Button></td>
      <td><Button bsStyle="danger" onClick={onDeleteClick}>Delete</Button></td>
  </tr>
);
ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name:  PropTypes.string.isRequired,
    price:  PropTypes.number.isRequired
  })
};

export default ProductItem;
