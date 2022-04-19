import React from "react";
import { connect } from "react-redux";
import CartModal from "../Components/CartModal/CartModal";
import { toogleCart } from "../redux/cart/cart.action";

const Layout = ({ children, toogle }) => {
  return (
    <>
      <CartModal />
      <div className="App">
        <div className="bg-black flex justify-between text-white p-5 mb-5">
          <p>Header</p>
          <p onClick={toogle} role={"button"}>
            Click to see Cart
          </p>
        </div>
        {children}
        <div className="bg-black text-white p-5 mt-5">Footer</div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toogle: () => dispatch(toogleCart()),
});
export default connect(null, mapDispatchToProps)(Layout);
