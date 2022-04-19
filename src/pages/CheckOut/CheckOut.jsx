import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../../Components/Card/Card.jsx";
import { addToCart } from "../../redux/cart/cart.action.js";
import { getAllProducts } from "../../redux/product/products.action.js";

export class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductList: [],
    };
  }
  componentDidMount() {
    //  fecth, set products in redux and state
    this.fetchProductsAndSetState();
  }

  fetchProductsAndSetState = () => {
    this.props.getProductList(); // dispatch
    setTimeout(() => {
      this.setState({ ProductList: this.props.productList.data }); // set in state
    }, 1500);
  };

  render() {
    return (
      <div className="h-screen flex justify-evenly">
        {this.state.ProductList.map((data) => (
          <Card id={data.id} name={data.name} price={data.price} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  productList: state.product.data,
  cartData: state.cart.data,
});

const mapDispatchToProps = (dispatch) => ({
  getProductList: () => dispatch(getAllProducts()),
  addItemToCart: () => dispatch(addToCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
