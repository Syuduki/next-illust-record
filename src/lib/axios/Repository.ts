import axios from 'axios';

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Content-Typezzz': 'application/json',
    'Access-Control-Allow-Methods': 'POST,GET',
  },
  responseType: 'json',
});
