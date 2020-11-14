const axios = require('axios').default;

const instance = axios.create({
    baseURL: 'https://react-my-burger-9f698.firebaseio.com/'
  });

export default instance;