import React from "react";
import { connect } from "react-redux";
import { toogleModal } from "../../redux/product/products.action";

const Button = ({ text, closeModal, toogle }) => {
  return (
    <button
      onClick={closeModal && toogle}
      className="bg-black text-white p-2 rounded-lg"
    >
      {text}
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toogle: () => dispatch(toogleModal()),
});

export default connect(null, mapDispatchToProps)(Button);
