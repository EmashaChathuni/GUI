import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NationalParks = () => {
  const [parks, setParks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    const fetchParks = async () => {
      try {
        const response = await axios.get('https://api.example.com/national-parks/sri-lanka', {
            headers: {
              Authorization: 'Bearer YOUR_API_TOKEN',
            },
          });
          
       
        setParks(response.data); // Assuming the data is an array of parks
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchParks();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>National Parks of Sri Lanka</h1>
      <ul>
        {parks.map((park) => (
          <li key={park.id}>
            <h2>{park.name}</h2>
            <p>{park.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NationalParks;
