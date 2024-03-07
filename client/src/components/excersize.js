import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './excersize.css'; // Import your CSS file for styling

function Gym() {
  const api = 'https://rudrakshh.github.io/GYM_DATA/Data.json';
  const [data, setdata] = useState([]);
  const [text, settext] = useState('');
  const [loadig,setloading]=useState(true)

  const fetchapi = async (url) => {
    const res = await axios.get(url);
    const response = res.data;
    setdata(response);
  };

  useEffect(() => {
    fetchapi(api);
  }, [text]);

  function textchange() {
    var newtext = document.getElementById('input-text').value.toLowerCase();
    console.log(newtext); // Log the new value first
   
    settext(newtext); // Then update the state

  }
  

  return (
    <div className="gym-container">
      

      <div class="input-container">
        <input
          class="input-field"
          type="text"
          id="input-text"
          onKeyUp={textchange}
          placeholder="Search..."
        />
        <label class="label" for="input-text">
          Search
        </label>
      </div>

      <div className="gym-cards">
        {data
          .filter((item) => item.bodyPart.toLowerCase().includes(text))
          .slice(0,6) // Display only the first 6 filtered items
          .map((item) => (
            <div key={item.id} className="gym-card">
              <div className="gym-image">
                <img src={item.image} />
              </div>
              <h3>{item.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Gym;
