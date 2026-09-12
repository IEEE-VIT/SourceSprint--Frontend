import React, { useState, useEffect } from "react";
import axios from "axios";
import RepoCard from "./RepoCard";
import { SearchBox } from "../SearchBox/SearchBox";
import PLACEHOLDER_REPOS from "./placeholderRepos";
import "./repos.css";

const REPOS_LINK = `${process.env.REACT_APP_BACKEND_URL || "http://localhost:5000"}/repos`;

const RepoList = () => {
  // Start with placeholder data so the page never looks empty; replace it with
  // the live list from GET /repos as soon as it arrives (same graceful-fallback
  // pattern as the leaderboard).
  const [repos, setRepos] = useState(PLACEHOLDER_REPOS);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    axios
      .get(REPOS_LINK)
      .then((response) => {
        if (Array.isArray(response.data) && response.data.length > 0) {
          setRepos(response.data);
        }
      })
      .catch((error) => {
        console.warn("Failed to fetch live repos, using local data", error);
      });
  }, []);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredRepos = repos.filter((repo) =>
    `${repo.name} ${repo.owner}`.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="repos-container" id="repos">
      <div className="repos-header-section">
        <h1 className="repos-title">REPOSITORIES</h1>
        <p className="repos-subtitle">
          Pick a repo, open its <strong>SourceSprint '26</strong> issues, and submit
          a PR that closes one (e.g. <code>Closes #12</code>) to earn points.
        </p>
      </div>

      <div className="repos-controls">
        <div className="repos-search">
          <SearchBox
            placeholder="Search repositories..."
            handleChange={handleChange}
          />
        </div>
        <div className="repos-stats">
          <span className="stats-label">Total Repos:</span>
          <span className="stats-value">{repos.length}</span>
        </div>
      </div>

      <div className="repos-grid">
        {filteredRepos.length > 0 ? (
          filteredRepos.map((repo) => (
            <RepoCard key={`${repo.owner}/${repo.name}`} repo={repo} />
          ))
        ) : (
          <div className="repos-no-results">
            No repositories found
            {searchField && <> matching "{searchField}"</>}
          </div>
        )}
      </div>
    </div>
  );
};

export default RepoList;
