import axios from 'axios';

const getRecommendation = () =>
  axios.get(
    'v1/recommendations?limit=10&market=ES&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA'
  );

export default {
  getRecommendation
};
