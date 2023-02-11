import React, { useState } from 'react';
import './style/NewPage.css'

const History = () => {
  const [filter, setFilter] = useState('all');

  const data = [
    { date: '10-Feb-2023', time: '10:00 AM', duration: '30 min', type: 'Normal' },
    { date: '9-Feb-2023', time: '11:00 AM', duration: '45 min', type: 'Exercise' },
    { date: '8-Feb-2023', time: '12:00 PM', duration: '60 min', type: 'Normal' },
    { date: '7-Feb-2023', time: '1:00 PM', duration: '30 min', type: 'Exercise' },
  ];

  const filteredData = data.filter(item => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <div className='body'>
      <div className='headerdiv'><h1 className='header'>History</h1></div>
      <div className='button'>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('Normal')}>Normal</button>
        <button onClick={() => setFilter('Exercise')}>Exercise</button>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Duration</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.date + item.time}>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.duration}</td>
              <td>{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: 'center' }}>
      <button style={{ borderRadius: '20px', padding: '10px 20px' }}>
          <span style={{ transform: 'rotate(180deg)' }}>&larr;</span> Back
        </button>
      </div>
    </div>
  );
};

export default History;