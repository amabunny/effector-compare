import axios from 'axios'

const sitePrefix = process.env.REACT_APP_SITE_PREFIX || '/'

export const selfApi = axios.create({
  baseURL: sitePrefix
})
