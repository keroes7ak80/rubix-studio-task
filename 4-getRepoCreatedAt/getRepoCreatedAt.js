const fetch = require("node-fetch");

async function getRepoCreatedAt(owner, repo) {
  // TODO: Fetch repository from GitHub API and return a promise that
  // resolves to the repo's creation date in YYYY-MM-DD format
  const response = await fetch('https://api.github.com/repos/'+owner+'/'+repo);
  const data = await response.json();
  var date = data.created_at;
  return date.substring(0,10);
}

// getRepoCreatedAt("facebook", "react").then(console.log);

module.exports = getRepoCreatedAt;
