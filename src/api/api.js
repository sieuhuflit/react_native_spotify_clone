import axios from 'axios';
import { CLIENT_ID, CLIENT_SECRET } from 'react-native-dotenv';
import base64 from 'react-native-base64';

const base64Credentials = base64.encode(`${CLIENT_ID}:${CLIENT_SECRET}`);

axios.defaults.baseURL = 'https://accounts.spotify.com/';
axios.defaults.headers = {
  Authorization: `Basic ${base64Credentials}`,
  'Content-Type': 'application/x-www-form-urlencoded'
};

const setHeaderToken = token => {
  axios.defaults.baseURL = 'https://api.spotify.com/';
  axios.defaults.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Bearer ${token}`
  };
};

export { setHeaderToken };
