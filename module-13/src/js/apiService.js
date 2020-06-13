const apiKey = '16958496-eed71f695e795e31d6c8ecae3';

export default {
  page: 1,
  keyWord: '',

  fetchPhotos() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`;

    return fetch(url)
      .then(res => res.json())
      .then(data => {
        this.page += 1;
        return data.hits;
      })
      .catch(error => console.log(error));
  },

  resetPage() {
    this.page = 1;
  },

  get query() {
    return this.keyWord;
  },

  set query(value) {
    this.keyWord = value;
  },
};
