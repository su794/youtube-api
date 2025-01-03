import axios from 'axios';

export default class FakeYoutubeClient {

  async search() {
    return axios.get('/mockData/search.json');
  }

  async videos() {
    return axios.get('/mockData/popular.json');
  }

  async detail() {
    return axios.get('/mockData/detail.json');
  }

  async channels() {
    return axios.get('/mockData/channels.json');
  }
}