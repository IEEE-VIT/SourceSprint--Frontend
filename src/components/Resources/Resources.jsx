import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./resources.css";

// Clean, modern SVG icons for developer tools
const SetupIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const CloneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    <path d="M16 13v6" />
    <path d="m13 16 3 3 3-3" />
  </svg>
);

const BranchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="3" x2="6" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
);

const StatusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <path d="m8 11 2 2 4-4" />
  </svg>
);

const CommitIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <line x1="1.05" y1="12" x2="7" y2="12" />
    <line x1="17.01" y1="12" x2="22.96" y2="12" />
  </svg>
);

const PushIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="18" r="3" />
    <line x1="12" y1="6" x2="12" y2="15" />
    <polyline points="7 10 12 5 17 10" />
  </svg>
);

const WarningIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const CopyIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const gitCommands = [
  {
    category: "Initial Setup",
    command: 'git config --global user.name "github-username"\ngit config --global user.email "github-email"',
    description: "Set your identity before making any commits.",
    icon: <SetupIcon />,
  },
  {
    category: "Cloning Repositories",
    command: "git clone <repository-url>",
    description: "Download a project repository from GitHub to your local machine.",
    icon: <CloneIcon />,
  },
  {
    category: "Branching",
    command: "git checkout -b <branch-name>",
    description: "Create and switch to a new branch for your task or feature.",
    icon: <BranchIcon />,
  },
  {
    category: "Checking Status",
    command: "git status",
    description: "View untracked, modified, or staged files in your repository.",
    icon: <StatusIcon />,
  },
  {
    category: "Staging & Committing",
    command: 'git add .\ngit commit -m "Describe your changes clearly"',
    description: "Stage all modified files and record a snapshot of your changes.",
    icon: <CommitIcon />,
  },
  {
    category: "Pushing Contributions",
    command: "git push origin <branch-name>",
    description: "Upload your local branch commits to your GitHub fork.",
    icon: <PushIcon />,
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
    <>
      <Navbar />
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
              <WarningIcon />
              <span>Note: Please download Git Bash from git-scm.com (Do not download GitHub Desktop; they are different tools).</span>
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
                  <span className="command-icon-box">{item.icon}</span>
                  <span className="category-tag">{item.category}</span>
                </div>
                <button
                  className={`copy-btn ${copiedIndex === index ? "copied" : ""}`}
                  onClick={() => handleCopy(item.command, index)}
                  aria-label="Copy command"
                >
                  {copiedIndex === index ? (
                    <>
                      <CheckIcon />
                      <span>COPIED!</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon />
                      <span>COPY</span>
                    </>
                  )}
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
    </>
  );
};

export default Resources;
