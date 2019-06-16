import axios from 'axios';

const SCHEDULE = 'https://frontendchallenge2019.azurewebsites.net/api/Schedule/';
const PROVIDER = 'https://frontendchallenge2019.azurewebsites.net/api/Provider/';
const PICTURE = 'https://frontendchallenge2019.azurewebsites.net/api/Picture/';

export const setDoctorsData = (doctors) => ({
  type: 'SET_DOCTORS_DATA',
  doctors
});

export const fetchDoctorsData = (date) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(SCHEDULE + date);
      dispatch(setDoctorsData(JSON.parse(res.data)));

    } catch (e) {
      console.log(e);
    }
  };
};
