import React, { Component } from 'react'
import Product from './product';

class ShoppingCart extends Component {

    render() {
        let { onIncrement, onDelete, onReset } = this.props
        return (
            <>
                <h1 className="text-center">Shopping Cart</h1>
                <button
                    onClick={onReset}
                    className="btn btn-secondary btn-sm m-2">
                    Reset
               </button>

                {this.props.products.map((product) => <Product
                    key={product.id}
                    product={product}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                />)}
            </>
        );
    }
}

export default ShoppingCart;