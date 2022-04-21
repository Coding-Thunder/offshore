import axios from "axios";
import spaceXTypes from "./spacex.types";

export const getAllLaunches = () => async (dispatch) => {
  dispatch({
    type: spaceXTypes.SET_LOADING,
    payload: true,
  });
  try {
    const response = await axios.get(
      "https://api.spacexdata.com/v3/launches?limit=100"
    );
    if (response.data) {
      dispatch({
        type: spaceXTypes.FETCH_LAUNCHES,
        payload: response.data,
      });
    }
    dispatch({
      type: spaceXTypes.SET_LOADING,
      payload: true,
    });
  } catch (error) {}
};

export const getLaunchesBasedOnYear = (year) => async (dispatch) => {
  dispatch({
    type: spaceXTypes.SET_LOADING,
    payload: true,
  });
  const url = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${year}`;
  try {
    const response = await axios.get(url);
    if (response.data) {
      dispatch({
        type: spaceXTypes.FETCH_LAUNCHES,
        payload: response.data,
      });
    }

    dispatch({
      type: spaceXTypes.SET_LOADING,
      payload: true,
    });
  } catch (error) {}
};

export const getLaunchesBasedOnLaunchSuccess = (value) => async (dispatch) => {
  dispatch({
    type: spaceXTypes.SET_LOADING,
    payload: true,
  });
  const url = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${value}`;
  try {
    const response = await axios.get(url);
    if (response.data) {
      dispatch({
        type: spaceXTypes.FETCH_LAUNCHES,
        payload: response.data,
      });
    }

    dispatch({
      type: spaceXTypes.SET_LOADING,
      payload: true,
    });
  } catch (error) {}
};

export const getLaunchesBasedOnLaunchAndLandSuccess = (value) => async (
  dispatch
) => {
  dispatch({
    type: spaceXTypes.SET_LOADING,
    payload: true,
  });
  const url = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=${value}`;
  try {
    const response = await axios.get(url);
    if (response.data) {
      dispatch({
        type: spaceXTypes.FETCH_LAUNCHES,
        payload: response.data,
      });
    }

    dispatch({
      type: spaceXTypes.SET_LOADING,
      payload: true,
    });
  } catch (error) {}
};
