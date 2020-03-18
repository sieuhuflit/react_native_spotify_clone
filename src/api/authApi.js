import axios from 'axios';
import querystring from 'querystring';

const getToken = () =>
  axios.post(
    'api/token',
    querystring.stringify({ grant_type: 'client_credentials' })
  );

export default {
  getToken
};
