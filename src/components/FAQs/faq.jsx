import React, { useState } from 'react';
import './faq.css';

function FAQ() {
  const categories = ["All", "Git & GitHub", "Sprint & PRs", "General"];

  const faqs = [
    {
      category: "General",
      question: 'What is open source software?',
      answer: 'Open source software is software with source code that anyone can inspect, modify, and enhance. It encourages public collaboration and transparent community development.',
    },
    {
      category: "General",
      question: 'Why should I contribute to open source projects?',
      answer: 'Contributing helps you gain real-world collaborative experience, master Git and GitHub workflows, improve your resume, build a strong public code portfolio, and connect with developers worldwide.',
    },
    {
      category: "Sprint & PRs",
      question: 'What is a Pull Request (PR)?',
      answer: 'A Pull Request is a proposal to merge code changes from your branch or fork into the main project repository. It allows project maintainers to review, test, and discuss your contributions.',
    },
    {
      category: "Sprint & PRs",
      question: 'How do I find beginner-friendly issues at SourceSprint?',
      answer: 'During SourceSprint, curated repositories will feature labeled issues such as "good-first-issue" or "sourcesprint". Check the event dashboard for active project links.',
    },
    {
      category: "General",
      question: 'Do I need advanced programming experience to join?',
      answer: 'Not at all! SourceSprint is specifically structured for developers of all skill levels. You can contribute documentation updates, UI fixes, bug reports, or feature enhancements.',
    },
    {
      category: "Git & GitHub",
      question: 'What is the difference between Git and GitHub?',
      answer: 'Git is the local command-line version control system installed on your computer. GitHub is the cloud-based web platform that hosts Git repositories online and manages team collaboration.',
    },
    {
      category: "Sprint & PRs",
      question: 'What should I do if my Pull Request receives feedback?',
      answer: 'Review comments constructively, make the requested changes in your local branch, commit them, and push again. Your Pull Request will automatically update on GitHub.',
    },
    {
      category: "Sprint & PRs",
      question: 'Will mentors be available during the sprint?',
      answer: 'Yes! Experienced mentors and open source maintainers will be available throughout the event to guide you through Git commands, PR submission, and code reviews.',
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const filteredFaqs = activeCategory === "All"
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">


      <div className="faq-container">
        <div className="faq-header">
          <h1 className="faq-heading">FREQUENTLY ASKED QUESTIONS</h1>
          <hr className="faq-hr" />
          <p className="faq-subtext">
            Everything you need to know about SourceSprint, Git, and contributing to open source.
          </p>

          {/* Category Filter Pills */}
          <div className="faq-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`faq-cat-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveIndex(null);
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="faq-list">
          {filteredFaqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const itemNumber = (index + 1).toString().padStart(2, '0');

            return (
              <div
                key={index}
                className={`faq-card ${isOpen ? 'open' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="faq-question-bar">
                  <div className="faq-title-group">
                    <span className="faq-number">{itemNumber}</span>
                    <span className="faq-question-text">{faq.question}</span>
                  </div>
                  <div className="faq-meta-right">
                    <span className="faq-item-cat">{faq.category}</span>
                    <span className={`faq-chevron ${isOpen ? 'rotated' : ''}`}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="faq-answer-wrapper">
                  <p className="faq-answer-text">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
