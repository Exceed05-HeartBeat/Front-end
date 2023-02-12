import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style/History.css'


const History = () => {
  // const [filter, setFilter] = useState('all');
  const [data,setData] = useState([])
  const [page , setPage] = useState(0)

//All heartrate
  useEffect(() => {
    fetchData("get_all_heartrate")
},[])


async function fetchData(params) {
  try {
    const url = `https://ecourse.cpe.ku.ac.th/exceed05/front/${params}`
    const result = await axios.get(url)
    console.log(result)
    setData(result.data)
  }catch (error) {
    console.log(error)
  }
}

  
  console.log(data)
  return (
    <div className='content_parent'>
    <div className='content_history'>
      <div className='headerdiv'><h1 className='header'>History</h1></div>
      <div className='content_center'>
        <div className='button'>
          <button className='button_size' onClick={() => fetchData("get_all_heartrate")}>All</button>
          <button className='button_size' onClick={() => fetchData("get_normal_heartrate")}>Normal</button>
          <button className='button_size' onClick={() => fetchData("get_exercise_heartrate")}>Exercise</button>
        </div>
        <div className='box_table'>
          <table className='table'>
            <thead>
              <tr>
                <th>No.</th>
                <th>Date</th>
                <th>Time</th>
                <th>BPM</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e,i) => (
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{e.date}</td>
                  <td>{e.time}</td>
                  <td>{e.bpm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ textAlign: 'center' , marginTop: '20px'}}>
      <a href='/'>
      <button className='back_button'>
          <span style={{ transform: 'rotate(180deg)' }}>&larr;</span> Back 
        </button>
      </a>  
      </div>
    </div>
    </div>
  );
};

export default History;