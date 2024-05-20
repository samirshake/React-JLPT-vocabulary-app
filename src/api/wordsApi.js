import axios from 'axios';

export  const fetchWords = async (level) => {
  let response = await axios.get(`https://jlpt-vocab-api.vercel.app/api/words?level=${level}`);
  response = await axios.get(`https://jlpt-vocab-api.vercel.app/api/words?level=${level}&limit=${response.data.total}`)
  return response.data;
};