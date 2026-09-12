// Fallback data for the Repos page, shown only if the backend can't be reached.
// Shape MUST match what the backend's GET /repos returns: { owner, name, url, description }.
// Repo difficulty and issue counts are intentionally NOT here — the backend keeps
// repo difficulty hidden from participants and does not serve issue lists.
// The live list comes from GET /repos (see RepoList.jsx); edit data/repos.json
// on the backend to change the real event repos.

const PLACEHOLDER_REPOS = [
  {
    owner: "sourcesprint-org",
    name: "sourcesprint-core",
    url: "https://github.com/sourcesprint-org/sourcesprint-core",
    description:
      "The core engine powering SourceSprint's event scoring and issue tracking.",
  },
  {
    owner: "sourcesprint-org",
    name: "git-cheatsheet-cli",
    url: "https://github.com/sourcesprint-org/git-cheatsheet-cli",
    description:
      "A command-line reference tool for learning essential Git workflows.",
  },
  {
    owner: "sourcesprint-org",
    name: "galaxy-render-engine",
    url: "https://github.com/sourcesprint-org/galaxy-render-engine",
    description:
      "Three.js-based particle rendering engine used across SourceSprint visuals.",
  },
  {
    owner: "sourcesprint-org",
    name: "contributor-dashboard",
    url: "https://github.com/sourcesprint-org/contributor-dashboard",
    description:
      "Dashboard for participants to track their merged PRs and points.",
  },
];

export default PLACEHOLDER_REPOS;
