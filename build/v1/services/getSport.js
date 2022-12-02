import axios from 'axios';
async function getSport(token, data) {
  const config = {
    method: 'post',
    url: 'https://api.decathlon.net/sport_vision_api/v1/sportclassifier/predict/',
    headers: {
      'x-api-key': 'b161265e-774e-4c16-ae29-024078274571',
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + token,
      ...data.getHeaders()
    },
    data
  };
  return axios(config).then(function (response) {
    console.log('🚀 ~ file: getSport.js:18 ~ response', response.data);
    return response?.data?.data?.sport ? response?.data?.data?.sport[0] : null;
  }).catch(function (error) {
    return error;
  });
}
export default getSport;