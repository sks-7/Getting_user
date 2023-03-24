import { useState } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import UserGrid from './components/UserGrid';

function App() {
  const [showUsers, setShowUsers] = useState(false);

  const handleGetUsers = () => {
    setShowUsers(true);
  };

  return (
    <div className="App">
      <NavBar onClick={handleGetUsers} />
      {showUsers && <UserGrid />}
    </div>
  );
}

export default App;
