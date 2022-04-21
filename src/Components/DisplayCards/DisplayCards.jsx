import React from "react";
import { connect } from "react-redux";
import LaunchCard from "../LaunchCard/LaunchCard";

const DisplayCards = ({ LaunchData }) => {
  return (
    <div className="h-auto flex flex-col sm:flex-row flex-wrap justify-evenly items-center mt-3 w-full">
      {LaunchData.length ? (
        LaunchData.map((data, i) => (
          <LaunchCard
            key={i}
            img={data.links.mission_patch_small}
            missionName={`${data.mission_name} #${data.flight_number}`}
            missionIds={data.mission_id}
            launchYear={data.launch_year}
            launch={data.launch_success}
            landing={data.rocket.first_stage.cores[0].land_success}
          />
        ))
      ) : (
        <p>Fetching... </p>
      )}
    </div>
  );
};

const mapStateToProps = ({ spacex }) => ({
  LaunchData: spacex.data,
});
export default connect(mapStateToProps)(DisplayCards);
