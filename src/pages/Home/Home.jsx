import React, { useEffect } from "react";
import { connect } from "react-redux";
import DisplayCards from "../../Components/DisplayCards/DisplayCards";
import Filter from "../../Components/Filter/Filter";
import { getAllLaunches } from "../../redux/spacex/spacex.action";

const Home = ({ getLaunchesWithOutFilters }) => {
  useEffect(() => {
    getLaunchesWithOutFilters();
  }, [getLaunchesWithOutFilters]);
  return (
    <div className="lg:items-start  p-3 min-h-screen max-h-fit flex flex-col lg:flex-row  xl:flex-row items-center">
      <Filter />
      <DisplayCards />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getLaunchesWithOutFilters: () => dispatch(getAllLaunches()),
});

export default connect(null, mapDispatchToProps)(Home);
