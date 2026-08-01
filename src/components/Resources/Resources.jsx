import React, { useState } from "react";
import "./resources.css";

const gitCommands = [
  {
    category: "Initial Setup",
    command: 'git config --global user.name "github-username"\ngit config --global user.email "github-email"',
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
      <div className="resources-container">
        {/* Page Main Header */}
        <div className="resources-header">
          <h1 className="resources-title">GIT RESOURCES</h1>
          <hr className="resources-hr" />
          <p className="resources-subtitle">
            Everything you need to set up your environment and master essential Git commands.
          </p>
        </div>

        {/* Section 1 Heading */}
        <h2 className="section-heading">
          <span className="section-number">01.</span> Setup & Installation
        </h2>

        {/* Setup & Installation Card */}
        <div className="git-bash-download-card">
          <p className="download-content-text">
            To participate in SourceSprint, you need <strong>Git Bash</strong> (or Git CLI) installed on your machine to execute terminal commands.
            <br />
            <span className="download-warning">
              ⚠️ Note: Please download Git Bash from git-scm.com (Do not download GitHub Desktop; they are different tools).
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

        {/* Section 2 Heading */}
        <h2 className="section-heading" style={{ marginTop: "40px", marginBottom: "24px" }}>
          <span className="section-number">02.</span> Essential Commands
        </h2>

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
