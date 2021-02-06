import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

import NavBar from "./navbar";
import ShoppingCart from "./shoppingCart";
import Home from "./home";
import ProductDetails from "./productDetails";
import Menu from "./menu";
import NotFound from "./notFound";
import Login from "./login";
import Admin from "./admin";
import ProductForm from "./productForm";

class App extends Component {
  state = {
    products: [],
  };

  componentDidMount = async () => {
    const { data } = await axios.get("http://localhost:3000/products/");
    this.setState({ products: data });
  };

  handleReset = () => {
    //Clone
    let products = [...this.state.products];
    //Edit
    products = products.map((p) => {
      p.count = 0;
      return p;
    });
    //Set state
    this.setState({ products });
  };

  IncrementHandler = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //Edit
    products[index].count++;
    //Set State
    this.setState({ products });
  };

  handleDelete = async (product) => {
    //optimstic update
    const oldProducts=[...this.state.products];
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    //Edit
    products.splice(index, 1);
    //Set State
    this.setState({ products });
     try {
      await axios.delete("http://localhost:3000/products/"+ product.id)
     } catch (error) {
       toast.error("Can't Delete")
       this.setState({products:oldProducts})
     }
  };

  handleInCartChange = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //Edit
    products[index].isInCart = !products[index].isInCart;
    //Set State
    this.setState({ products });
  };

  handleEdit = () => {
    console.log("edit");
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer/>
        <NavBar
          productsCount={this.state.products.filter((p) => p.isInCart).length}
        />
        <main className="container">
          <Switch>
            <Route
              path="/products/:id/:name?"
              render={(props) => (
                <ProductDetails products={this.state.products} {...props} />
              )}
            />
            <Route path="/login" component={Login} />
            <Route
              path="/cart"
              render={(props) => (
                <ShoppingCart
                  products={this.state.products.filter((p) => p.isInCart)}
                  onIncrement={this.IncrementHandler}
                  onDelete={this.handleInCartChange}
                  onReset={this.handleReset}
                  {...props}
                />
              )}
            />
            <Route path="/notfound" component={NotFound} />
            <Route
              path="/menu"
              render={(props) => (
                <Menu
                  {...props}
                  products={this.state.products}
                  onClick={this.handleInCartChange}
                />
              )}
            />
            <Route path="/productForm/:id" component={ProductForm} />
            <Route
              path="/admin"
              render={(props) => (
                <Admin
                  {...props}
                  products={this.state.products}
                  onDelete={this.handleDelete}
                  onEdit={this.handleEdit}
                />
              )}
            />
            <Route path="/home" component={Home} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/notfound" />
          </Switch>
          {/* <ShoppingCart
            products={this.state.products}
            onIncrement={this.IncrementHandler}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          /> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
