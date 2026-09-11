import React, { useState } from "react";
import RepoCard from "./RepoCard";
import IssuesModal from "./IssuesModal";
import { SearchBox } from "../SearchBox/SearchBox";
import PLACEHOLDER_REPOS from "./placeholderRepos";
import "./repos.css";

const DIFFICULTY_FILTERS = ["All", "Easy", "Medium", "Hard"];

const RepoList = () => {
  const [repos] = useState(PLACEHOLDER_REPOS);
  const [searchField, setSearchField] = useState("");
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [difficultyFilter, setDifficultyFilter] = useState("All");

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredRepos = repos
    .filter((repo) => repo.name.toLowerCase().includes(searchField.toLowerCase()))
    .filter((repo) => difficultyFilter === "All" || repo.difficulty === difficultyFilter);

  return (
    <div className="repos-container" id="repos">
      <div className="repos-header-section">
        <h1 className="repos-title">REPOSITORIES</h1>
        <p className="repos-subtitle">
          Pick a repo, find an issue tagged Easy, Medium, or Hard, and submit your PR.
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

      <div className="repos-difficulty-filters">
        {DIFFICULTY_FILTERS.map((level) => (
          <button
            key={level}
            className={`difficulty-filter-pill ${
              difficultyFilter === level ? "active" : ""
            } ${level !== "All" ? `pill-${level.toLowerCase()}` : ""}`}
            onClick={() => setDifficultyFilter(level)}
          >
            {level}
          </button>
        ))}
      </div>

      <div className="repos-grid">
        {filteredRepos.length > 0 ? (
          filteredRepos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} onSelect={setSelectedRepo} />
          ))
        ) : (
          <div className="repos-no-results">
            No repositories found
            {searchField && <> matching "{searchField}"</>}
            {difficultyFilter !== "All" && <> for difficulty "{difficultyFilter}"</>}
          </div>
        )}
      </div>

      {selectedRepo && (
        <IssuesModal repo={selectedRepo} onClose={() => setSelectedRepo(null)} />
      )}
    </div>
  );
};

export default RepoList;
