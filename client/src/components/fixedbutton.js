import React from 'react';
import './FixedButton.css'; // You can create a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons'; // Import the specific icon you want to use
import {
    useParams,
    useNavigate,
  } from "react-router-dom";
  

function FixedButton() {
    const navigate = useNavigate();
    const {userId}=useParams();
  return (
    <div className="fixed-button" onClick={()=>{navigate(`/blogs/${userId}`)}}>
      <FontAwesomeIcon icon={faMessage} flip size="xl" />
    </div>
  );
}

export default FixedButton;
