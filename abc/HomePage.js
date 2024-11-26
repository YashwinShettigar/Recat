import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [dashboards, setDashboards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { title: "Dashboard 1", info: "Information 1", stat: 85, description: "Description for Dashboard 1." },
        { title: "Dashboard 2", info: "Information 2", stat: 72, description: "Description for Dashboard 2." },
        { title: "Dashboard 3", info: "Information 3", stat: 90, description: "Description for Dashboard 3." },
        { title: "Dashboard 4", info: "Information 4", stat: 65, description: "Description for Dashboard 4." },
        { title: "Dashboard 5", info: "Information 5", stat: 78, description: "Description for Dashboard 5." },
        { title: "Dashboard 6", info: "Information 6", stat: 95, description: "Description for Dashboard 6." }
      ];
      setDashboards(data);
    };

    fetchData();
  }, []);

  return (
    <div className="home-page">
      {/* Sidebar */}
      <div className="sidebar">
      <div className="sidebar-header">
      Admin
    </div>
        <div className="sidebar-nav">
          <ul>
            <li>
              <Link to="/" className="sidebar-link">Dashboard</Link>
            </li>
            <li>
              <Link to="/complaints" className="sidebar-link">View Complaints</Link>
            </li>
          </ul>
        </div>
        <Link to='/login' className="logout-button">Logout</Link>
      </div>

      {/* Header */}
      <div className="header">Dashboard</div>

      {/* Main Content */}
      <div className="main-content">
        <div className="dashboard-grid">
          {dashboards.map((dashboard, index) => (
            <div key={index} className="dashboard-box">
              <h3>{dashboard.title}</h3>
              <div className="dashboard-stat-description">{dashboard.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
