import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '30715503-b05874fb24d95ac5a3c3e4a16';

export async function fetchImages(input, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: KEY,
      q: input,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: page,
    },
  });

  return response.data;
}

// componentDidMount() {
//   fetch('https://pixabay.com/api/?q=cat&page=1&key=30715503-b05874fb24d95ac5a3c3e4a16&image_type=photo&orientation=horizontal&per_page=12')
//     .then(res => res.json())
//     .then(console.log);
// }
