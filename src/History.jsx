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

// //Normal heartrate
// useEffect(() => {
//   try {
//       const url = "https://ecourse.cpe.ku.ac.th/exceed05/front/get_normal_heartrate"
//       fetch(url).then((res_normal_data) => {
//           if (res_normal_data.status == 400) {
//               console.log("undefind")
//           }
//           else {
//               res_normal_data.json().then((res_all_normal_data) => {
//                 // for (let i = 0; i < ) {
//                 //   console.log(res_all_data)
//                 console.log(res_all_normal_data.length)
//                 for (let i = 0; i < res_all_normal_data.length; i++) {
//                   console.log(res_all_normal_data[i])
//                   //{timestamp:..., bpm:...}
//                 }
//               }
//             )
//           }
//       })
//   }
//   catch (error) {
//       console.log("error")
//   }
// },[])


// //Excercise heartrate
// useEffect(() => {
//   try {
//       const url = "https://ecourse.cpe.ku.ac.th/exceed05/front/get_exercise_heartrate"
//       fetch(url).then((res_excercise_data) => {
//           if (res_excercise_data.status == 400) {
//               console.log("undefind")
//           }
//           else {
//               res_excercise_data.json().then((res_all_excercise_data) => {
//                 // for (let i = 0; i < ) {
//                 //   console.log(res_all_data)
//                 console.log(res_all_excercise_data.length)
//                 for (let i = 0; i < res_all_excercise_data.length; i++) {
//                   console.log(res_all_excercise_data[i])
//                   //{timestamp:..., bpm:...}
//                 }
//               }
//             )
//           }
//       })
//   }
//   catch (error) {
//       console.log("error")
//   }
// },[])

  // const data = [
  //   { date: '10-Feb-2023', time: '10:00 AM', duration: '30 min', type: 'Normal' },
  //   { date: '9-Feb-2023', time: '11:00 AM', duration: '45 min', type: 'Exercise' },
  //   { date: '8-Feb-2023', time: '12:00 PM', duration: '60 min', type: 'Normal' },
  //   { date: '7-Feb-2023', time: '1:00 PM', duration: '30 min', type: 'Exercise' },
  //   { date: '7-Feb-2023', time: '1:00 PM', duration: '30 min', type: 'Exercise' },
  //   { date: '7-Feb-2023', time: '1:00 PM', duration: '30 min', type: 'Exercise' },
  //   { date: '7-Feb-2023', time: '1:00 PM', duration: '30 min', type: 'Exercise' },
  //   { date: '7-Feb-2023', time: '1:00 PM', duration: '30 min', type: 'Exercise' },
  //   { date: '7-Feb-2023', time: '1:00 PM', duration: '30 min', type: 'Exercise' },
  // ];

  
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
      <button className='back_button' style={{ borderRadius: '20px', padding: '10px 20px' }}>
          <span style={{ transform: 'rotate(180deg)' }}>&larr;</span> Back
        </button>
      </a>  
      </div>
    </div>
    </div>
  );
};

export default History;