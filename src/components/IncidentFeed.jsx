import React from 'react';
import './IncidentFeed.css';

const IncidentFeed = () => {
  const incidents = [
    { id: 'INC-101', type: 'Fire', location: 'Sector A', severity: 'critical', time: '2 mins ago' },
    { id: 'INC-102', type: 'Structural', location: 'Sector C', severity: 'warning', time: '15 mins ago' },
    { id: 'INC-103', type: 'Medical', location: 'Sector B', severity: 'active', time: '1 hr ago' },
  ];

  return (
    <div className="incident-feed glass-panel">
      <div className="panel-header">
        <h3>Live Incidents</h3>
        <button className="icon-btn">🔄</button>
      </div>
      
      <div className="feed-items">
        {incidents.map(inc => (
          <div key={inc.id} className={`feed-item border-${inc.severity}`}>
            <div className="feed-header">
              <span className={`status-badge ${inc.severity}`}>{inc.severity}</span>
              <span className="feed-time">{inc.time}</span>
            </div>
            <h4 className="feed-title">{inc.type} Hazard</h4>
            <p className="feed-location">📍 {inc.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncidentFeed;
