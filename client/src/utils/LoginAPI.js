import axios from 'axios';

export default {


 

  logout: function () {
    return axios.get('/api/user/logout');
  },
};