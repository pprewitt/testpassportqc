import axios from 'axios';

export default {


  isLoggedIn: function () {
    return axios.get('/api/user/profile');
  },

  logout: function () {
    return axios.get('/api/user/logout');
  },
};