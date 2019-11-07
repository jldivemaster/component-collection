import axios from 'axios';

// const KEY = '143963699739725'

export default axios.create({
  baseURL: 'http://res.cloudinary.com/jldivemaster/image/list'
});

// export default axios.create({
//   baseURL: 'https://api.cloudinary.com/v1_1/jldivemaster',
//   params: {
//     key: KEY
//   }
// })
