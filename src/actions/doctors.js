import axios from 'axios';

const SCHEDULE = 'https://frontendchallenge2019.azurewebsites.net/api/Schedule/';
const PROVIDER = 'https://frontendchallenge2019.azurewebsites.net/api/Provider/';

export const setDoctorsData = (list) => ({
  type: 'SET_DOCTORS_DATA',
  list
});

export const setDoctorProfile = (profile) => ({
  type: 'SET_DOCTOR_PROFILE',
  profile
});

export const fetchDoctorsData = (date) => {
  return (dispatch) => {
    return axios.get(SCHEDULE + date).then((res) => {
      dispatch(setDoctorsData(
        JSON.parse(res.data)
      ));
    });
  };
};

export const fetchDoctorProfile = (date) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(PROVIDER + date);
      dispatch(setDoctorProfile(
        JSON.parse(res.data)
      ));

    } catch (e) {
      console.log(e);
    }
  };
};
