import React, { useState } from "react";
import "./resources.css";

const gitCommands = [
  {
    category: "Initial Setup",
    command: 'git config --global user.name "Your Name"\ngit config --global user.email "you@example.com"',
    description: "Set your identity before making any commits.",
    icon: "⚙️",
  },
  {
    category: "Cloning Repositories",
    command: "git clone <repository-url>",
    description: "Download a project repository from GitHub to your local machine.",
    icon: "📦",
  },
  {
    category: "Branching",
    command: "git checkout -b <branch-name>",
    description: "Create and switch to a new branch for your task or feature.",
    icon: "🌿",
  },
  {
    category: "Checking Status",
    command: "git status",
    description: "View untracked, modified, or staged files in your repository.",
    icon: "🔍",
  },
  {
    category: "Staging & Committing",
    command: 'git add .\ngit commit -m "Describe your changes clearly"',
    description: "Stage all modified files and record a snapshot of your changes.",
    icon: "💾",
  },
  {
    category: "Pushing Contributions",
    command: "git push origin <branch-name>",
    description: "Upload your local branch commits to your GitHub fork.",
    icon: "🚀",
  },
];

const Resources = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="resources" className="resources-section">
      {/* Decorative Galaxy Stars and Nebulae */}
      <div className="galaxy-stars-overlay">
        <div className="star-sparkle star-1">✨</div>
        <div className="star-sparkle star-2">⭐</div>
        <div className="star-sparkle star-3">✨</div>
        <div className="star-sparkle star-4">💫</div>
      </div>

      <div className="resources-container">
        <div className="resources-header">
          <span className="resources-badge">✦ COSMIC TOOLKIT ✦</span>
          <h1 className="resources-title">GIT RESOURCES & SETUP</h1>
          <hr className="resources-hr" />
          <p className="resources-subtitle">
            Master local version control and launch your open source contributions into deep space.
          </p>
        </div>

        {/* Download Git Bash Card */}
        <div className="git-bash-download-card">
          <div className="download-glow"></div>
          <div className="download-badge">⬇️ OFFICIAL TOOLKIT</div>
          <div className="download-content">
            <h2>Download Git Bash for SourceSprint</h2>
            <p>
              To participate in SourceSprint, you need <strong>Git Bash</strong> (or Git CLI) installed on your machine to execute terminal commands.
              <br />
              <span className="download-warning">
                ⚠️ Note: Please download <strong>Git Bash</strong> from git-scm.com (Do not download GitHub Desktop — they are different tools).
              </span>
            </p>
            <a
              href="https://git-scm.com/downloads"
              target="_blank"
              rel="noopener noreferrer"
              className="download-git-btn"
            >
              DOWNLOAD GIT BASH →
            </a>
          </div>
        </div>

        {/* Command Cheatsheet Section */}
        <div className="cheatsheet-header">
          <span className="cheatsheet-badge">ESSENTIAL COMMANDS</span>
          <h2>Git Terminal Cheatsheet</h2>
          <p>Quick copy reference for the commands you will use during the sprint.</p>
        </div>

        <div className="commands-grid">
          {gitCommands.map((item, index) => (
            <div className="command-card" key={index}>
              <div className="card-top">
                <div className="card-tag-group">
                  <span className="command-icon">{item.icon}</span>
                  <span className="category-tag">{item.category}</span>
                </div>
                <button
                  className={`copy-btn ${copiedIndex === index ? "copied" : ""}`}
                  onClick={() => handleCopy(item.command, index)}
                >
                  {copiedIndex === index ? "COPIED! ✓" : "COPY"}
                </button>
              </div>
              <pre className="command-code">
                <code>{item.command}</code>
              </pre>
              <p className="command-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
