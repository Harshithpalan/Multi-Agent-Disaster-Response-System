import './index.css'
import './App.css'
import Sidebar from './components/Sidebar'
import MapDashboard from './components/MapDashboard'
import AgentList from './components/AgentList'
import IncidentFeed from './components/IncidentFeed'

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <header className="app-header glass-panel">
          <div>
            <h1>MADRS Central Command</h1>
            <p className="subtitle">System Status: <span style={{color: 'var(--accent-green)'}}>● Operational</span></p>
          </div>
          <div className="header-actions">
            <button className="btn-primary">Deploy Agent</button>
          </div>
        </header>
        
        <div className="dashboard-grid">
          <div className="main-panel animate-slide-in" style={{ animationDelay: '0.1s' }}>
            <MapDashboard />
          </div>
          <div className="side-panel animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <IncidentFeed />
            <AgentList />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
