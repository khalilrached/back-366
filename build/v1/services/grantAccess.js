import axios from 'axios';
import qs from 'qs';
const data = qs.stringify({
  grant_type: 'client_credentials'
});
const config = {
  method: 'post',
  url: 'https://idpdecathlon.oxylane.com/as/token.oauth2',
  headers: {
    Authorization: 'Basic QzBlZjlkNjAxZjkwMWZmMDdkNWUzYzg3YjVkMmM1YmIyOWMzMzk1MGU6U2lhaGZnRkE0NDFSMzliaEJkSEFJZUpOV3Y4MFNBMVpia21pRXV6ZkYya2RIb1ZHYnRuZWR0Qkl3NU9yaTVySQ==',
    'Content-Type': 'application/x-www-form-urlencoded',
    Cookie: 'PF=yFOUYeFvTXlGlXEScIP76v'
  },
  data
};
async function grantAccess() {
  return axios(config).then(function (response) {
    return response.data;
  }).catch(function (error) {
    return error;
  });
}
export default grantAccess;