import { NavLink } from 'react-router-dom';
import { Button } from './reusable/Button';
import { useState } from 'react';
import UpcomingSessions from './Sessions/UpcomingSessions';
export const Header = () => {
  const [showUpcomingSessions, setShowUpcomingSessions] = useState(false);

  const handleCloseUpcomingSession = () => {
    setShowUpcomingSessions(false);
  };

  const handleShowUpcomingSession = () => {
    setShowUpcomingSessions(true);
  };

  return (
    <>
      {showUpcomingSessions && (
        <UpcomingSessions onClose={handleCloseUpcomingSession} />
      )}
      <header id="main-header">
        <h1>React Session Management</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
                end
              >
                Our Mission
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sessions"
                className={({ isActive }) => (isActive ? 'active' : '')}
                end
              >
                Browse Sessions
              </NavLink>
            </li>
            <Button onClick={handleShowUpcomingSession}>
              Upcoming Sessions
            </Button>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
