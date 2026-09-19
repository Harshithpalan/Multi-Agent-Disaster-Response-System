import React from 'react';
import './AgentList.css';

const AgentList = () => {
  const agents = [
    { id: 'Drone-01', type: 'Aerial', status: 'Active', battery: '85%', task: 'Recon Sector A' },
    { id: 'Rover-Beta', type: 'Ground', status: 'Active', battery: '92%', task: 'Debris Clearance' },
    { id: 'Med-Unit-3', type: 'Support', status: 'Warning', battery: '15%', task: 'Evacuation' },
    { id: 'Drone-04', type: 'Aerial', status: 'Critical', battery: '5%', task: 'Returning to Base' },
  ];

  return (
    <div className="agent-list glass-panel">
      <div className="panel-header">
        <h3>Deployed Agents</h3>
        <span className="badge">{agents.length} Online</span>
      </div>
      
      <div className="agent-items">
        {agents.map(agent => (
          <div key={agent.id} className="agent-item">
            <div className="agent-info">
              <div className="agent-title">
                <span className="agent-icon">
                  {agent.type === 'Aerial' ? '🚁' : agent.type === 'Ground' ? '🚙' : '🚑'}
                </span>
                <h4>{agent.id}</h4>
              </div>
              <p className="agent-task">{agent.task}</p>
            </div>
            <div className="agent-meta">
              <span className={`status-indicator ${agent.status.toLowerCase()}`}></span>
              <span className={`battery ${agent.battery.replace('%', '') < 20 ? 'low' : ''}`}>{agent.battery}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentList;
