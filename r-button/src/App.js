import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 4px 8px;
`;

class App extends Component {
  addToBag = (ele) => {
    const sku = ele.getAttribute('data-sku');
    const qty = ele.getAttribute('data-qty');
    console.log('react', sku, qty);
  };

  render() {
    const displayable = true;

    if (!displayable) {
      return;
    }

    return (
      <Button
        className="product__add-to-bag"
        data-sku="sku111"
        data-qty="1"
        onClick={(e) => { this.addToBag(e.target) }}>
          Learn React
      </Button>
    );
  }
}

export default App;
