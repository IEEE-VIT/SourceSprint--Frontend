import React, { useEffect } from "react";
import PLACEHOLDER_ISSUES from "./placeholderIssues";

const DIFFICULTY_CLASS = {
  Easy: "difficulty-easy",
  Medium: "difficulty-medium",
  Hard: "difficulty-hard",
};

const IssuesModal = ({ repo, onClose }) => {
  const issues = PLACEHOLDER_ISSUES[repo.id] || [];

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="issues-modal-overlay" onClick={onClose}>
      <div className="issues-modal" onClick={(e) => e.stopPropagation()}>
        <div className="issues-modal-header">
          <div>
            <h2 className="issues-modal-title">{repo.name}</h2>
            <p className="issues-modal-subtitle">{issues.length} open issue(s)</p>
          </div>
          <button className="issues-modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <div className="issues-modal-body">
          {issues.length > 0 ? (
            issues.map((issue) => (
              <a
                key={issue.id}
                href={issue.url}
                target="_blank"
                rel="noopener noreferrer"
                className="issue-row"
              >
                <div className="issue-row-main">
                  <span className="issue-title">{issue.title}</span>
                </div>
                <div className="issue-row-tags">
                  <span className={`repo-difficulty-badge ${DIFFICULTY_CLASS[issue.difficulty]}`}>
                    {issue.difficulty}
                  </span>
                  {issue.tags.map((tag) => (
                    <span key={tag} className="issue-event-tag">{tag}</span>
                  ))}
                </div>
              </a>
            ))
          ) : (
            <div className="issues-modal-empty">No open issues in this repo right now.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IssuesModal;
