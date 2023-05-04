import axios from 'axios';
const API_URL = process.env.NEXT_PUBLIC_BACKEND || 'http://localhost:3002';

class Query {
  public static async GET(url: string, token: string) {
    const response = await axios.get(`${API_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });
    console.log(`🚀 GET ${url}: response`, response);
    return response.data;
  }

  public static async POST(url: string, body: any, token: string) {
    const response = await axios.post(`${API_URL}${url}`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });
    console.log(`🚀 GET ${url}: response`, response);
    return response.data;
  }
}

export default Query;
