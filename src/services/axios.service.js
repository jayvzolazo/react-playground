import axios from 'axios';

const AxiosService = {
  getUsers: (url) => {
    return axios.get(url);
  }
};

export default AxiosService;