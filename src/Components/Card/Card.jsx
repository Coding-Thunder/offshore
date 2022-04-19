import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.action";

const Card = ({ id, name, price, addItemToCart, cartData }) => {
  const handleDispatch = () => {
    if (Object.keys(cartData).includes(id)) {
      let newObj = cartData;
      newObj[id].quantity++;
      newObj[id].price = newObj[id].quantity * parseInt(newObj[id].basePrice);
      addItemToCart({ ...newObj });
    } else {
      addItemToCart({
        ...cartData,
        [id]: {
          id: id,
          name: name,
          price: price,
          quantity: 1,
          promocode: "",
          finalAmount: "",
          basePrice: price,
        },
      });
    }
  };
  return (
    <div
      key={id}
      className="relative  w-64 h-64 flex flex-col justify-evenly items-center shadow-xl rounded-xl cursor-pointer"
    >
      <p className="text-center">{name}</p>
      <div className="color-crimson p-6 w-full  rounded-xl flex justify-center items-center">
        <p className="text-white">${price}</p>
      </div>
      <div className="flex w-full h-auto justify-center items-center p-1">
        <button
          onClick={handleDispatch}
          className="bg-black text-white p-2 rounded-lg"
        >
          Add to Cart
        </button>
        {/* <Button closeModal text="Apply Coupon" /> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartData: state.cart.data,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
