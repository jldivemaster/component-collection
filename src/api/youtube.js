//=========== Access key for Youtube API ====================
import axios from 'axios';

const KEY = 'AIzaSyDl4rEgm-woJ88WMUxWkVswe_JVGkpY74U'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
