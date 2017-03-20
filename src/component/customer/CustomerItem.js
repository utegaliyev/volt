import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';
const CustomerItem = ({customer, onEditClick, onDeleteClick}) =>(
  <tr>
      <td>{customer.id}</td>
      <td>{customer.name}</td>
      <td>{customer.address}</td>
      <td>{customer.phone}</td>
      <td><Button bsStyle="primary" onClick={onEditClick}>Edit</Button></td>
      <td><Button bsStyle="danger" onClick={onDeleteClick}>Delete</Button></td>
  </tr>
);
CustomerItem.propTypes = {
  customer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name:  PropTypes.string.isRequired,
    address:  PropTypes.string.isRequired,
    phone:  PropTypes.string.isRequired
  })
};

export default CustomerItem;
