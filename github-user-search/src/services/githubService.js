export async function fetchGithubUser(query, location, minRepos) {
  const url = `https://api.github.com/search/users?q=${query}+location:${location}+repos:>=${minRepos}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}