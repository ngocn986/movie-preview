import axios from 'axios';
const access_token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGMxZjAyNmI1ZDBlYzJiODY3YWIyOTlhODU5MzBkOCIsInN1YiI6IjY0MDk5Y2M0MzJjYzJiMDA4NDEwNGEwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eoWptJcADTV2Z5Cz8S_UithD9CsOFCrgV_DeN-EP1zs';
class LoginService {
  async login(accountId) {
    try {
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/account/${accountId}`,
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      };
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default LoginService;
