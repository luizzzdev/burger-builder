import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://burgerbuilder-1f570.firebaseio.com/',
});
