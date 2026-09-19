import React from 'react';
import './MapDashboard.css';

const MapDashboard = () => {
  return (
    <div className="map-dashboard glass-panel">
      <div className="map-header">
        <h3>Live Activity Map</h3>
        <div className="map-controls">
          <button className="control-btn active">Global</button>
          <button className="control-btn">Sector A</button>
          <button className="control-btn">Sector B</button>
        </div>
      </div>
      
      <div className="map-view">
        {/* Placeholder for actual map integration (Leaflet/Mapbox) */}
        <div className="mock-map">
           <div className="grid-overlay"></div>
           
           {/* Mock Agents on Map */}
           <div className="map-marker agent drone pulse" style={{ top: '30%', left: '45%' }}>
              <span className="marker-label">Drone-01</span>
           </div>
           <div className="map-marker agent ground pulse" style={{ top: '60%', left: '70%' }}>
              <span className="marker-label">Rover-Beta</span>
           </div>
           
           {/* Mock Incidents */}
           <div className="map-marker incident critical ripple" style={{ top: '40%', left: '60%' }}></div>
           <div className="map-marker incident warning ripple" style={{ top: '20%', left: '20%' }}></div>
        </div>
      </div>
      
      <div className="map-footer">
        <div className="stat">
          <span className="stat-value">24</span>
          <span className="stat-label">Active Agents</span>
        </div>
        <div className="stat">
          <span className="stat-value text-red">2</span>
          <span className="stat-label">Critical Incidents</span>
        </div>
        <div className="stat">
          <span className="stat-value text-green">98%</span>
          <span className="stat-label">Network Uptime</span>
        </div>
      </div>
    </div>
  );
};

export default MapDashboard;
