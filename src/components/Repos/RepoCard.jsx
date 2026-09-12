import React from "react";

// The common label every event issue carries. Change here if the label changes.
const EVENT_LABEL = "SourceSprint '26";

// Deep-link into a repo's open issues filtered by the event label, so a
// participant lands directly on the issues they can pick up.
const issuesLink = (repoUrl) =>
  `${repoUrl}/issues?q=` +
  encodeURIComponent(`is:issue is:open label:"${EVENT_LABEL}"`);

const RepoCard = ({ repo }) => {
  const { name, owner, url, description } = repo;

  return (
    <div className="repo-card">
      <div className="repo-card-header">
        <h3 className="repo-card-name">{name}</h3>
      </div>

      <p className="repo-card-owner">{owner}</p>
      <p className="repo-card-description">{description}</p>

      <div className="repo-card-actions">
        <a
          href={issuesLink(url)}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-card-link repo-card-link-primary"
        >
          Browse {EVENT_LABEL} issues →
        </a>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-card-link"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
};

export default RepoCard;
