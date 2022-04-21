import React from "react";

const LaunchCard = ({
  img,
  missionName,
  missionIds,
  launchYear,
  launch,
  landing,
}) => {
  return (
    <div className="w-full sm:w-2/5 sm:mr-5 xl:w-60 2xl:w-72 flex flex-col bg-white p-2 rounded items-center mb-2 mr-2">
      <div className="w-full bg-stone-100 rounded p-2 flex h-2/4 justify-center items-center">
        <img className="object-contain w-full" src={img} alt="Rocket" />
      </div>
      <div className="h-56 w-full flex flex-col justify-between">
        <div className="flex h-fit font-bold text-lg text-cyan-600">
          {missionName}
        </div>
        <div className="flex h-fit text-lg ">
          <p className="font-bold flex flex-col text-lg mr-2">Mission Ids :</p>
          {missionIds.length ? (
            <ul>
              {missionIds.map((data, i) => (
                <li key={i}>{data}</li>
              ))}
            </ul>
          ) : (
            <p>No Mission Id Available</p>
          )}
        </div>
        <div className="flex h-fit text-lg ">
          <p className="font-bold flex flex-col text-lg mr-2">Launch Year :</p>
          {launchYear ? <p>{launchYear}</p> : <p>Unavailable</p>}
        </div>
        <div className="flex h-fit text-lg ">
          <p className="font-bold flex flex-col text-lg mr-2">
            Successful Launch :
          </p>
          {launch ? <p>True</p> : <p>False</p>}
        </div>
        <div className="flex h-fit text-lg ">
          <p className="font-bold flex flex-col text-lg mr-2">
            Successful Landing :
          </p>
          {landing ? <p>True</p> : <p>False</p>}
        </div>
      </div>
    </div>
  );
};

export default LaunchCard;
