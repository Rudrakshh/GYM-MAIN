import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import './profile.css';

const Profile = () => {
  const { userId } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/profile/${userId}`);
        if (response.status === 200) {
          const data = await response.json();
          console.log('Received data from server:', data);
          setUser(data);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  const handleLogout = () => {
    // Perform your logout logic here
    // For example, clearing session data, etc.

    // After logout, change the URL to the desired location
    navigate('/login'); // Change the URL to '/login' (adjust the URL as needed)
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Contact: {user.contact}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
