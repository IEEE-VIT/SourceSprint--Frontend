import React from 'react'
import './timeline.css'

function Timeline() {
  const events = [
    {
      time: "8:00 AM to 9:00 AM",
      title: "Intro to Open Source",
      description: "Kickstarting the event with a fundamental introduction to the world of open source, community standards, and how collaboration shapes modern software."
    },
    {
      time: "9:00 AM to 11:00 AM",
      title: "Hands On Session",
      description: "A deep dive into Git and GitHub. Create repositories, learn branch management, commit code, and practice pushing and pull requests interactively."
    },
    {
      time: "11:00 AM to 12:30 PM",
      title: "Speaker Session",
      description: "Inspirational talks from seasoned open source creators, maintainers, and tech leaders, sharing their career journeys and open source breakthroughs."
    },
    {
      time: "3:30 PM to 7:00 PM",
      title: "SourceSprint Contest",
      description: "The ultimate coding sprint. Select curated issues from real world repositories, make contributions, and merge PRs to stack up points."
    }
  ];

  return (
    <div className='timeline-section' id='timeline'>
      <div className="timeline-container">
        <h1 className="timeline-heading">TIMELINE</h1>
        <hr className="timeline-hr" />
        
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          
          <div className="timeline-events">
            {events.map((event, index) => (
              <div className="timeline-event-block" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div className="timeline-time-badge">{event.time}</div>
                  <h3 className="timeline-card-title">{event.title}</h3>
                  <p className="timeline-card-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline
