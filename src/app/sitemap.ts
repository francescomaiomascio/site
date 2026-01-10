import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.maiomascio.dev'

  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/about`, priority: 0.8 },
    { url: `${base}/ice`, priority: 0.9 },
    { url: `${base}/ice/projects`, priority: 0.7 },
    { url: `${base}/ice/docs`, priority: 0.7 },
    { url: `${base}/ice/status`, priority: 0.6 },
  ]
}
