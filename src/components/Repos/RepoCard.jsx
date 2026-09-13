import React from "react";

// The common label every event issue carries. Change here if the label changes.
const EVENT_LABEL = "SourceSprint '26";

// Deep-link into a repo's open issues filtered by the event label, so a
// participant lands directly on the issues they can pick up.
const issuesLink = (repoUrl) =>
  `${repoUrl}/issues?q=` +
  encodeURIComponent(`is:issue is:open label:"${EVENT_LABEL}"`);

// A short monogram derived from the repo name. All event repos share one owner
// (IEEE-VIT), so an org avatar wouldn't distinguish them — the monogram gives
// each card its own recognisable, on-theme mark instead.
const monogram = (name = "") => {
  const parts = name.replace(/[^a-zA-Z0-9]+/g, " ").trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
};

const RepoCard = ({ repo }) => {
  const { name, owner, url, description } = repo;

  return (
    <div className="repo-card">
      <div className="repo-card-top">
        <div className="repo-monogram" aria-hidden="true">
          {monogram(name)}
        </div>
        <div className="repo-card-heading">
          <h3 className="repo-card-name">{name}</h3>
          <p className="repo-card-owner">
            <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            {owner}
          </p>
        </div>
      </div>

      <p className="repo-card-description">{description}</p>

      <div className="repo-card-actions">
        <a
          href={issuesLink(url)}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-btn repo-btn-primary"
        >
          Browse issues
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-btn repo-btn-ghost"
        >
          GitHub
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default RepoCard;
