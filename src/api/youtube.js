export default class Youtube {
    constructor(apiClient) {
      this.apiClient = apiClient;
    }
  
    async search(keyword) {
      return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    }
  
    async #searchByKeyword(keyword) {
      // https://github.com/axios/axios
      return this.apiClient
        .search({
          params: {
            part: 'snippet',
            type: 'video',
            maxResults: 25,
            q: keyword,
          },
        })
        .then((res) => res.data.items) // handle success
        // creates a new array containing the newly reformatted objects.
        .then((items) => items.map((item) => ({...item, id: item.id.videoId})))
        .catch(function (error) { // handle error
          console.log(error);
        })
    }
  
    async #mostPopular() {
      return this.apiClient.videos(
        {
          params: {
            part: 'snippet',
            chart: 'mostPopular',
            maxResults: 25,
          }
        } 
      )
      .then((res) => res.data.items)
      .catch(function (error) {
        console.log(error);
      })
    }
    
    async detail(videoId) {
      return this.apiClient.detail(
        {
          params: {
            part: 'snippet',
            id: videoId,
          }
        } 
      )
      .then((res) => res.data.items[0])
      .catch(function (error) {
        console.log(error);
      });
    }
  
    async channelImageURL(id) {
      return this.apiClient.detail(
        {
          params: {
            part: 'snippet',
            id,
          }
        } 
      )
      .then((res) => res.data.items[0].snippet.thumbnails.default.url)
      .catch(function (error) {
        console.log(error);
      });
    }
    async channels(channelId) {
      return this.apiClient.channels({
        params: {
          part: 'snippet',
          channelId,
          order: 'date',
          maxResults: 25,
          type: 'video',
        }
      })
      .then((res) => res.data.items)
      .catch(function (error) {
        console.log(error);
      });
    }
    
  }