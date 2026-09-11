// Placeholder data for the Repos page.
// The backend team will replace this with live data fetched from the API
// (see LeaderBoard.jsx for the existing fetch + graceful-fallback pattern).

const PLACEHOLDER_REPOS = [
  {
    id: "repo-1",
    name: "sourcesprint-core",
    owner: "sourcesprint-org",
    url: "https://github.com/sourcesprint-org/sourcesprint-core",
    description: "The core engine powering SourceSprint's event scoring and issue tracking.",
    difficulty: "Medium",
    issueCounts: { easy: 4, medium: 6, hard: 2 },
  },
  {
    id: "repo-2",
    name: "git-cheatsheet-cli",
    owner: "sourcesprint-org",
    url: "https://github.com/sourcesprint-org/git-cheatsheet-cli",
    description: "A command-line reference tool for learning essential Git workflows.",
    difficulty: "Easy",
    issueCounts: { easy: 8, medium: 3, hard: 0 },
  },
  {
    id: "repo-3",
    name: "galaxy-render-engine",
    owner: "sourcesprint-org",
    url: "https://github.com/sourcesprint-org/galaxy-render-engine",
    description: "Three.js-based particle rendering engine used across SourceSprint visuals.",
    difficulty: "Hard",
    issueCounts: { easy: 1, medium: 4, hard: 5 },
  },
  {
    id: "repo-4",
    name: "contributor-dashboard",
    owner: "sourcesprint-org",
    url: "https://github.com/sourcesprint-org/contributor-dashboard",
    description: "Dashboard for participants to track their merged PRs and points.",
    difficulty: "Medium",
    issueCounts: { easy: 3, medium: 5, hard: 1 },
  },
];

export default PLACEHOLDER_REPOS;
