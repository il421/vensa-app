import axios from 'axios';

const SCHEDULE = 'https://frontendchallenge2019.azurewebsites.net/api/Schedule/';
const PROVIDER = 'https://frontendchallenge2019.azurewebsites.net/api/Provider/';
const PICTURE = 'https://frontendchallenge2019.azurewebsites.net/api/Picture/';

export class DoctorService {
  static getSchedule(date) {

    return axios.get(SCHEDULE + date).then((res) => {
      return () => res.data;
    }).catch((e) => console.log(e));

  }

  static async getProvider(id) {
    try {
      return await axios.get(PROVIDER + id);
    } catch (e) {
      console.log(e);
    }
  }

  static async getPictureUrl(id) {
    try {
      return await axios.get(PICTURE + id);
    } catch (e) {
      console.log(e);
    }
  }
}
