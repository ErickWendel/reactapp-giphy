import Axios from 'axios'
const URL = 'https://api.giphy.com/v1/gifs/search?api_key=eK4fyyLR9LppRCzO8VAw778zaB38Cb1O&limit=6'

export class GiphySvc {
  _mapResponse({ data }) {
    if (!data) return [];

    return data.map(item => {
      return {
        title: item.title,
        imageUrl: item.images.preview_webp.url,
        // imageUrl: item.images.fixed_width_still.url,
        slug: item.slug,
        id: item.id,
        source: item.url,
      };
    });
  }
  
  async _makeRequest(term='lol') {
    const {data} = await Axios.get(`${URL}&q=${term}`)
    return this._mapResponse(data)
  }
  search(term) {
    return this._makeRequest(term);
  }

  
}
