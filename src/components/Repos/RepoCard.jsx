import React from "react";

const DIFFICULTY_CLASS = {
  Easy: "difficulty-easy",
  Medium: "difficulty-medium",
  Hard: "difficulty-hard",
};

const RepoCard = ({ repo, onSelect }) => {
  const { name, owner, url, description, difficulty, issueCounts } = repo;
  const difficultyClass = DIFFICULTY_CLASS[difficulty] || "difficulty-medium";

  return (
    <div
      className="repo-card"
      onClick={() => onSelect(repo)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onSelect(repo);
      }}
    >
      <div className="repo-card-header">
        <h3 className="repo-card-name">{name}</h3>
        <span className={`repo-difficulty-badge ${difficultyClass}`}>
          {difficulty}
        </span>
      </div>

      <p className="repo-card-owner">{owner}</p>
      <p className="repo-card-description">{description}</p>

      <div className="repo-card-tags">
        <span className="repo-tag tag-easy">Easy: {issueCounts.easy}</span>
        <span className="repo-tag tag-medium">Medium: {issueCounts.medium}</span>
        <span className="repo-tag tag-hard">Hard: {issueCounts.hard}</span>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="repo-card-link"
        onClick={(e) => e.stopPropagation()}
      >
        View on GitHub →
      </a>
    </div>
  );
};

export default RepoCard;
