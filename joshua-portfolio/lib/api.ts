export interface YouTubeVideo {
  id: string
  title: string
  description: string
  thumbnail: string
  url: string
}

export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  url: string
  stars: number
  forks: number
  language: string | null
  homepage: string | null
}

export async function getYouTubeVideos(channelId: string, maxResults: number = 6): Promise<YouTubeVideo[]> {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
  if (!apiKey) {
    console.warn('Add NEXT_PUBLIC_YOUTUBE_API_KEY to .env.local')
    return []
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`,
      { next: { revalidate: 3600 } }
    )
    const data = await response.json()
    return data.items?.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.medium.url,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`
    })) || []
  } catch (error) {
    console.error('Error fetching YouTube videos:', error)
    return []
  }
}

export async function getGitHubRepos(username: string, maxRepos: number = 6): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=${maxRepos}`,
      { next: { revalidate: 3600 } }
    )
    const repos = await response.json()
    return Array.isArray(repos) ? repos.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
      homepage: repo.homepage,
    })) : []
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    return []
  }
}

export const GITHUB_USERNAME = 'Joshua-Coded'
export const YOUTUBE_CHANNEL_ID = 'YOUR_CHANNEL_ID_HERE'
