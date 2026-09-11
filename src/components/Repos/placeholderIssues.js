// Placeholder issue data, keyed by repo id (see placeholderRepos.js).
// The backend team will replace this with live data fetched per-repo from the API.

const PLACEHOLDER_ISSUES = {
  "repo-1": [
    { id: "issue-1-1", title: "Fix score recalculation on repo difficulty change", difficulty: "Medium", tags: ["SourceSprint '26"], status: "open", url: "https://github.com/sourcesprint-org/sourcesprint-core/issues/1" },
    { id: "issue-1-2", title: "Add input validation to issue-tag parser", difficulty: "Easy", tags: ["SourceSprint '26"], status: "open", url: "https://github.com/sourcesprint-org/sourcesprint-core/issues/2" },
    { id: "issue-1-3", title: "Support multiple assignees per issue", difficulty: "Hard", tags: ["SourceSprint '26"], status: "claimed", url: "https://github.com/sourcesprint-org/sourcesprint-core/issues/3" },
  ],
  "repo-2": [
    { id: "issue-2-1", title: "Add `git switch` command examples", difficulty: "Easy", tags: ["SourceSprint '26", "good first issue"], status: "open", url: "https://github.com/sourcesprint-org/git-cheatsheet-cli/issues/1" },
    { id: "issue-2-2", title: "Support fuzzy search for commands", difficulty: "Medium", tags: ["SourceSprint '26"], status: "open", url: "https://github.com/sourcesprint-org/git-cheatsheet-cli/issues/2" },
    { id: "issue-2-3", title: "Add copy-to-clipboard button", difficulty: "Easy", tags: ["SourceSprint '26"], status: "closed", url: "https://github.com/sourcesprint-org/git-cheatsheet-cli/issues/3" },
  ],
  "repo-3": [
    { id: "issue-3-1", title: "Optimize particle buffer allocation", difficulty: "Hard", tags: ["SourceSprint '26"], status: "open", url: "https://github.com/sourcesprint-org/galaxy-render-engine/issues/1" },
    { id: "issue-3-2", title: "Add mobile touch controls for camera pan", difficulty: "Medium", tags: ["SourceSprint '26"], status: "open", url: "https://github.com/sourcesprint-org/galaxy-render-engine/issues/2" },
  ],
  "repo-4": [
    { id: "issue-4-1", title: "Add points breakdown chart to profile view", difficulty: "Medium", tags: ["SourceSprint '26"], status: "open", url: "https://github.com/sourcesprint-org/contributor-dashboard/issues/1" },
    { id: "issue-4-2", title: "Fix pagination on merged PR list", difficulty: "Easy", tags: ["SourceSprint '26"], status: "open", url: "https://github.com/sourcesprint-org/contributor-dashboard/issues/2" },
    { id: "issue-4-3", title: "Add repo difficulty multiplier to scoring API", difficulty: "Hard", tags: ["SourceSprint '26"], status: "claimed", url: "https://github.com/sourcesprint-org/contributor-dashboard/issues/3" },
  ],
};

export default PLACEHOLDER_ISSUES;
