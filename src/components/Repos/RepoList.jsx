import React, { useState, useEffect } from "react";
import axios from "axios";
import RepoCard from "./RepoCard";
import { SearchBox } from "../SearchBox/SearchBox";
import "./repos.css";

const REPOS_LINK = `${process.env.REACT_APP_BACKEND_URL || "http://localhost:5000"}/repos`;

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchRepos = () => {
    setLoading(true);
    setError(false);
    axios
      .get(REPOS_LINK)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setRepos(response.data);
        }
      })
      .catch((err) => {
        console.warn("Failed to fetch repos", err);
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchRepos();
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

      {loading ? (
        <div className="ss-state-panel">
          <span className="ss-spinner" aria-hidden="true"></span>
          <p className="ss-state-text">Loading repositories…</p>
        </div>
      ) : error ? (
        <div className="ss-state-panel">
          <div className="ss-state-icon">⚠</div>
          <p className="ss-state-text">
            Couldn’t reach the server. Please refresh the page in a minute.
          </p>
          <button className="ss-retry-btn" onClick={fetchRepos}>
            Retry
          </button>
        </div>
      ) : repos.length === 0 ? (
        <div className="ss-state-panel">
          <p className="ss-state-text">No repositories to show yet.</p>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default RepoList;
