import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    const { name, price } = this.props;
    return (
      <div>
        <td>
          {name} {price}
        </td>
      </div>
    );
  }
}

export default ProductRow;
