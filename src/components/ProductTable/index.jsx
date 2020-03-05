import React, { Component } from 'react';
import ProductRow from './../ProductRow';

class ProductTable extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {products.map(product => (
                <ProductRow {...product} />
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
