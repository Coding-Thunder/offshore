import React from "react";
import { connect } from "react-redux";
import { getLaunchesBasedOnLaunchSuccess } from "../../redux/spacex/spacex.action";

const LaunchFilter = ({ fetchData }) => {
  return (
    <div className="w-full h-auto flex flex-col justify-between items-start  lg:items-center xl:items-center 2xl:items-center flex-wrap overflow-hidden">
      <p className="p-1 border-b-2 border-black cursor-pointer">
        Successfull Launch{" "}
      </p>
      <div className="flex w-full lg:justify-between  flex-wrap">
        <button
          onClick={() => fetchData("true")}
          className="bg-lime-200 hover:bg-lime-600 px-3 py-2 rounded-lg m-2"
        >
          True
        </button>
        <button
          onClick={() => fetchData("false")}
          className="bg-lime-200 hover:bg-lime-600 px-3 py-2 rounded-lg m-2"
        >
          False
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: (value) => dispatch(getLaunchesBasedOnLaunchSuccess(value)),
});

export default connect(null, mapDispatchToProps)(LaunchFilter);
