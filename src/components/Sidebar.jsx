import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar glass-panel">
      <div className="logo-container">
        <div className="logo-icon"></div>
        <span className="logo-text">MADRS</span>
      </div>
      <nav className="nav-menu">
        <a href="#" className="nav-item active">
          <span className="nav-icon">📊</span>
          Dashboard
        </a>
        <a href="#" className="nav-item">
          <span className="nav-icon">🚁</span>
          Agents
        </a>
        <a href="#" className="nav-item">
          <span className="nav-icon">⚠️</span>
          Incidents
        </a>
        <a href="#" className="nav-item">
          <span className="nav-icon">⚙️</span>
          Settings
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
