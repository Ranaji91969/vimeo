// Dashbord.jsx

import React from 'react';
import Search from './Search';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Video from './Video';
 

const Dashbord = () => {
  const handleSearch = (query) => {
    // Implement your search logic here or pass the query to other components
    console.log('Search query:', query);
  };

  return (
    <>
      <div className='back'>
        <nav>
          <header className='header'>
            <h4 >𝐕𝐈𝐌𝐄𝐎</h4>
            <Search onSearch={handleSearch} />
           <a href="#">About</a>
            <DropdownButton id="split-button-dropdown" title="User">
            <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
            <Dropdown.Item eventKey="2">Login</Dropdown.Item>
            <Dropdown.Item eventKey="3">Logout</Dropdown.Item>
            <Dropdown.Divider />
      </DropdownButton>
          
          </header>
        </nav>
      </div>
      <div className='cent'>
        <div className="sidenav">
          <a href="#">Home</a>
          <a href="#">Library</a>
          <a href="#">live events</a>
          <hr/>
          <a href="#">showcases</a>
          <a href="#">Analytics</a>
          <a href="#">monetize</a>
          <a href="#">watch</a>
          <hr/>
          <a href="#"> Wath's new </a>
        </div>
        <div className="main">
          <Video />
        </div>
      </div>
    </>
  );
}

export default Dashbord;
