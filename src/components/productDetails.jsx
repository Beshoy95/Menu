import React, { Component } from 'react'

class ProductDetails extends Component {

    handleSave = () => {
        //save in backend
        this.props.history.replace('/cart')
    }
    render() {
        let { products, match } = this.props
        const product = products.filter((p) =>
            p.id === parseInt(match.params.id))[0];
        return (<>
            <h1>Details No:{match.params.id}</h1>
            <h2>{product.name}</h2>
            <h3>Count in shopping cart :{product.count}</h3>
            <button onClick={this.handleSave}
                className="btn btn-primary btn-sm">Save</button>
        </>);
    }
}

export default ProductDetails;