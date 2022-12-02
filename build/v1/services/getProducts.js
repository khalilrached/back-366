import axios from 'axios';
async function getProducts(token, data) {
  const config = {
    method: 'post',
    url: 'https://api.decathlon.net/sport_vision_api/v1/productretrieval/predict/?language=en',
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
    return response.data?.data;
  }).catch(function (error) {
    return error;
  });
}
export default getProducts;