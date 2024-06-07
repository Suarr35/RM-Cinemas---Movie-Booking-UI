import React, { useState, useEffect } from 'react';

const Theatres = () => {
  const [theatres, setTheatres] = useState([]);

  useEffect(() => {
    fetchTheatres();
  }, []);

  const fetchTheatres = async () => {
    try {
      const response = await fetch('https://api.example.com/theatres?city=london');
      const data = await response.json();
      setTheatres(data);
    } catch (error) {
      console.error('Error fetching theatres:', error);
    }
  };

  return (
    <div>
      <h3>Theatres in Your City</h3>
      {theatres.length === 0 ? (
        <p>Loading theatres...</p>
      ) : (
        <ul>
          {theatres.map((theatre) => (
            <li key={theatre.id}>
              <h3>{theatre.name}</h3>
              <p>{theatre.address}</p>
              <p>{theatre.phone}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Theatres;