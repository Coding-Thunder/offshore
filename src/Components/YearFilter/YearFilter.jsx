import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getLaunchesBasedOnYear } from "../../redux/spacex/spacex.action";
import { getYears } from "./YearFilter.utils";

const YearFilter = ({ fetchLaunch }) => {
  const [state, setState] = useState({
    Years: null,
  });

  useEffect(async () => {
    const arr = await getYears(2006);
    setState({ ...state, Years: arr });
  }, []);
  return (
    <div className="w-full h-auto flex flex-col justify-between items-start lg:items-center xl:items-center 2xl:items-center flex-wrap overflow-hidden">
      <p className="p-1 border-b-2 border-black cursor-pointer">Launch Year</p>
      <div className="flex lg:justify-between flex-wrap">
        {state.Years &&
          state.Years.map((year, i) => (
            <button
              key={i}
              onClick={() => fetchLaunch(year)}
              className="bg-lime-200 hover:bg-lime-600 px-3 py-2 rounded-lg m-2"
            >
              {year}
            </button>
          ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchLaunch: (year) => dispatch(getLaunchesBasedOnYear(year)),
});

export default connect(null, mapDispatchToProps)(YearFilter);
