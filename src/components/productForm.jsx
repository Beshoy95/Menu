import React, { Component } from 'react'
import axios from 'axios';

class ProductForm extends Component {
    state = { id: "", name: "", price: "" }

    async componentDidMount() {
        const id = this.props.match.params.id;
        if (id !== "new") {
            const { data } = await axios.get("http://localhost:3000/products/" + id)
            const state = { ...this.state }
            state.name = data.name
            state.price = data.price
            state.id = data.id
            this.setState(state)
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        //Add
        if (this.props.match.params.id === "new") {
            const obj = { ...this.state, count: 0, isInCart: false }
            await axios.post("http://localhost:3000/products/", obj)
        } else {
            //Edit
            const obj = { ...this.state, count: 0, isInCart: false }
            //delete id
            delete obj.id;

            await axios.put("http://localhost:3000/products/" + this.state.id, obj)
        }

        this.props.history.replace('/admin')
    }

    handleChange = (e) => {
        let state = { ...this.state };
        //Edit
        state[e.currentTarget.name] = e.currentTarget.value;
        //Set state
        this.setState(state);
    }

    render() {
        return (
            <>
                <h1>
                    {this.props.match.params.id === "new"
                        ? "Add Product"
                        : "Edit Product"}
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            type="text"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                            id="price"
                            name="price"
                            value={this.state.price}
                            onChange={this.handleChange}
                            type="text"
                            className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        {this.props.match.params.id === "new"
                            ? "Add "
                            : "Edit "}
                    </button>
                </form>
            </>
        );
    }
}

export default ProductForm;