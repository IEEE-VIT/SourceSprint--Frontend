import React, { useState } from 'react';
import './faq.css';
import arrowdown from "../../assets/svg/faq-svg/arrow-down.svg"; 
function FAQ() {
  const faqs = [
    {
      question: 'What is open source software?',
      answer: 'Open source software is software that is freely available to use, modify, and distribute. Its source code is openly accessible for anyone to view and contribute to.',
    },
    {
      question: ' Why should I contribute to open source projects?',
      answer: 'You can discover open source projects on platforms like GitHub, GitLab, and Bitbucket. Use keywords related to your interests and skills to search for projects that align with your goals.',
    },
    {
      question: 'What is a pull request (PR)?',
      answer: 'A pull request is a proposal to make changes to an open source project. It includes the code changes you want to make and serves as a request for the project maintainers to review and merge your changes.',
    },
    {
      question: 'How do I find open source projects to contribute to??',
      answer: 'You can discover open source projects on platforms like GitHub, GitLab, and Bitbucket. Use keywords related to your interests and skills to search for projects that align with your goals.',
    },
    {
      question: ' How do I create a successful pull request?',
      answer:  ' You can track your contributions by maintaining a portfolio on platforms like GitHub. Document the projects you have to worked on, the PRs you have submitted, and any feedback or reviews you have received.',
    },
    {
      question: 'What is a pull request (PR)?',
      answer: 'A pull request is a proposal to make changes to an open source project. It includes the code changes you want to make and serves as a request for the project maintainers to review and merge your changes.',
    },
    {
      question: 'How can I increase the chances of my PR being accepted?',
      answer: 'A pull request is a proposal to make changes to an open source project. It includes the code changes you want to make and serves as a request for the project maintainers to review and merge your changes.',
    },
    {
      question: 'What should I do if my PR gets rejected?',
      answer: 'If your PR is rejected, do not be discouraged. Seek feedback, understand the reasons for rejection, and make necessary improvements. Resubmit the PR once you have addressed the issue.',
    },
    {
      question: 'Is it okay to contribute to multiple projects simultaneously?',
      answer: 'Yes, it is okay to contribute to multiple projects, but manage your time effectively. Focus on projects aligned with your interests and skills to make meaningful contributions.',
    },
    
  ];

  const [expanded, setExpanded] = useState(Array(faqs.length).fill(false));

  const toggleAccordion = (index) => {
    const updatedExpanded = [...expanded];
    updatedExpanded[index] = !updatedExpanded[index];
    setExpanded(updatedExpanded);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-heading" id="faqs">FAQs</h2>
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${expanded[index] ? 'expanded' : ''}`}>
          <button className="faq-question" onClick={() => toggleAccordion(index)}>
            {faq.question}
            <img className='arrow-icon'
              src={arrowdown} // Replace with the path to your custom arrow icon
              
            />
          </button>
          <div className="faq-answer">{faq.answer}</div>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
