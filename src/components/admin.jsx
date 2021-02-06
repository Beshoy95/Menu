import React, { Component } from 'react'

class Admin extends Component {
    state = {}
    render() {
        const { products, onDelete, history } = this.props
        return (<>
            <h1>Admin</h1>
            <button onClick={() => history.push("/productForm/new")}
                className="btn btn-primary my-2">Add</button>

            <table className="table">
                <thead>
                    <tr>
                        <th >Name</th>
                        <th >Price</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <i onClick={() =>
                                    history.push(`/productForm/${product.id}`)}
                                    className="fas fa-edit"></i></td>
                            <td>
                                <i onClick={() => onDelete(product)}
                                    className="fas fa-trash"></i></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>);
    }
}

export default Admin;
