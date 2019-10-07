import axios from 'axios';

// ============URL and Access Key to make calls to Unsplash API =====================
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 1263c8890e8cdb2333b113c633d52f51dc089803dd15ddd65bac0a13227dbc6c'
  }
})
