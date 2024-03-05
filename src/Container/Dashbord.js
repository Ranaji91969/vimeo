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
    <img src="logo.png" alt="Vimeo Logo" />
    
    <Search onSearch={handleSearch} />
    <button>Upgrade</button>
    <DropdownButton id="split-button-dropdown" title="New Video">
        <Dropdown.Item eventKey="1">Upload Video</Dropdown.Item>
        <Dropdown.Item eventKey="2">Create Video</Dropdown.Item>
        <Dropdown.Item eventKey="3">Record Screen</Dropdown.Item>
        <Dropdown.Divider />
    </DropdownButton>
    </header>
        </nav>
      </div>
      <div className='cent'>
     
      <div class="scroll-container" >
      <button class="upgrade-button">Upgrade</button>

  <a href="#">Home</a>
  <a href="#">Library</a>
  <a href="#">Live events</a>
  <hr/>
  <a href="#">Showcases</a>
  <a href="#">Analytics</a>
  <a href="#">Monetize</a>
  
  <hr/>
  <a href="#">Watch</a>
  <hr/>
  <a href="#">What's New</a>
  <hr/>
  <a href="#">
  <span class="upgrade">Upgrade</span> for more videos
</a>

  </div>
        </div>
        
        <div className="main">
          <Video />
        </div>
      
    </>
  );
}

export default Dashbord;

