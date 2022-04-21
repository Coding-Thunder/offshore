import React from "react";

const Layout = ({ children, classes }) => {
  return (
    <div className={classes}>
      <div className="p-2 text-3xl font-bold">Space X Launch Programms</div>
      {children}
      <div className="p-12 bg-transparent" />
      <div className="flex  justify-center items-center w-full text-center p-5 fixed bottom-0 left-0  bg-white text-black">
        <p className="font-bold mr-1">Developed by: </p>{" "}
        <p> Vinay Maheshwari</p>
      </div>
    </div>
  );
};

export default Layout;
