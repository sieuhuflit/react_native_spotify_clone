import axios from 'axios';

const getAlbum = id => axios.get(`/v1/albums/${id}`);

export default {
  getAlbum
};
