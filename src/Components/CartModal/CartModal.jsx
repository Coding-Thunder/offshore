import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { connect } from "react-redux";
import { addToCart, toogleCart } from "../../redux/cart/cart.action";

const CouponModal = ({ open, toogle, cartItems, addItemToCart }) => {
  const [coupons, setCoupon] = useState({
    CouponData: [
      { code: "RRD4D32", percentage: 10, limit: 5000, applied: false },
      { code: "44F4T11", percentage: 15, limit: 10000, applied: false },
    ],
  });
  const handleApplyCoupon = (id, coupon) => {
    let newObj = cartItems;
    newObj[id].price = (newObj[id].price * (100 - coupon.percentage)) / 100;
    newObj[id].coupon = coupon;
    addItemToCart({ ...newObj });
    coupon.applied = true;
    setCoupon({ CouponData: [...coupons.CouponData, coupon] });
  };

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={toogle}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 mb-4 text-gray-900"
                >
                  {Object.values(cartItems).length > 0
                    ? "Proceed with the items"
                    : "Your cart is empty"}
                </Dialog.Title>

                <div className="w-full">
                  {Object.values(cartItems).length > 0 &&
                    Object.values(cartItems).map((data) => (
                      <div className="w-full p-5 shadow rounded  mb-4">
                        <p>{data.name}</p>
                        <p>{data.id}</p>
                        <p>{data.quantity}</p>
                        <p>{data.price}</p>
                        {data.coupon && <p>{data.coupon.code}</p>}
                        <div className="w-full p-2">
                          {coupons.CouponData.filter(
                            (coupon) => parseInt(data.price) >= coupon.limit
                          ).map((couponData) => (
                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                onClick={() =>
                                  handleApplyCoupon(data.id, couponData)
                                }
                              >
                                {couponData.code}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toogle: () => dispatch(toogleCart()),
  addItemToCart: (data) => dispatch(addToCart(data)),
});
const mapStateToProps = (state) => ({
  open: state.cart.modal,
  cartItems: state.cart.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(CouponModal);
