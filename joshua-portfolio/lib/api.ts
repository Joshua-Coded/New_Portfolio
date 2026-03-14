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

interface GitHubRepoResponse {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  homepage: string | null
}

export async function getGitHubRepos(username: string, maxRepos: number = 6): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=${maxRepos}`,
      { next: { revalidate: 3600 } }
    )
    const repos: GitHubRepoResponse[] = await response.json()
    return Array.isArray(repos) ? repos.map((repo) => ({
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
