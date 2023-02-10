import { useState } from 'react'
import './App.css'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePicker } from 'antd';
import { Space } from 'antd';
import axios from 'axios'
dayjs.extend(customParseFormat);

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
const CR=["green","yellow","red"]
const ST=["Normal","Warning","Danger"]




function Home() {
  const [status,setStatus] = useState(0)
  // dayjs.extend(customParseFormat);
  const [cr,setCr] = useState(false)
  const [cr2,setCr2] = useState(0)
  const [bpm,setBpm] = useState(60)
  const [dated,setDated] = useState("")
  const [name,setName] = useState("")
  // useEffect(()=>{
    async function Submit(){
        try{
            const sen = await axios.post(`https://ecourse.cpe.ku.ac.th/exceed05/front/data `,{"name": name   , "birth": dated} )
        }
        catch (error) {
            console.log(error)
        }
    }
  // })
  const { RangePicker } = DatePicker;
  const dateFormat = 'YYYY-MM-DD';
  const weekFormat = 'MM/DD';
  const monthFormat = 'YYYY/MM';
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
  const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
  const customWeekStartEndFormat = (value) =>
    `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
      .endOf('week')
      .format(weekFormat)}`;
  // setState({ stateName : updatedStateValue })
  const [date,setDate] = useState(new Date());
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const vl = {}
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  useEffect(() => {
    try {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        var syncStatus = setInterval(async () => {
            let res = await axios.get("https://ecourse.cpe.ku.ac.th/exceed05/front/get_status")
            let a = res.data.status
            let res2= await axios.get("https://ecourse.cpe.ku.ac.th/exceed05/front/mode")
            let b= res2.data.mode
            let res3= await axios.get("https://ecourse.cpe.ku.ac.th/exceed05/front/get_heartrate")
            let d=res3.data.current_heartrate
            // let date = 
            // let sen = await axios.post(`https://ecourse.cpe.ku.ac.th/exceed05/front/data `,date)

            console.log(a)
            setStatus(b)
            setCr2(a)
            setBpm(d) 
            
        }, 1000) 
        return function cleanup() {
            clearInterval(timer)
            clearInterval(syncStatus)
        }

    }
    catch (error) {
        console.log(error)
    }
    
    });
// useEffect(() => {
//     try {
//         const url = "https://ecourse.cpe.ku.ac.th/exceed05/front/get_status"
//         fetch(url).then((res_data) => {
//             if (res_data.status == 400) {
//                 console.log("undefind")
//             }
//             else {
//                 res_data.json().then((res_all_data) => {
//                     console.log("ok")
//                 })
//             }
//         }
//         )
//     }
//     catch (error) {
//         console.log("error")
//     }
// },[])

  const redBox = {
    "backgroundColor":"palevioletred"
  }
  const StatusBox = {
    "backgroundColor": CR[cr2]
  }
  return (
    <>
      <Typography
      component="div"
      variant="body1"
      style={{
        height: 100,
        width: '100%',
        position: 'relative',
      }}
    ></Typography>
    <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'none',
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.50'),
          border: 'none 1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'pink',
          p: 2,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          position: 'absolute',
          top: 25,
          left: '73%',
          zIndex: 'tooltip',
          width: '25%'
          // height: ''
        }}
      >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
         <TextField
          // InputProps={{ sx: { height: 10 } }}
          // fontSize='10%'
          id="outlined-textarea"
          size='small'
          // InputLabelProps={{style: {fontSize: 10}}} 
          label="Name"
          placeholder="Ex.Chawonvit"
          onChange={(e)=>setName(e.target.value)}
          multiline
        />
      </Grid>
      <Grid item xs={6}>
      <TextField
          //  InputProps={{ sx: { height: 10 } }}
          // fontSize='10%'

          id="outlined-textarea"
          size='small'
          // InputLabelProps={{style: {fontSize: 10}}} 
          label="Surname"
          placeholder="Ex.Chomvorawong"
          multiline
        />
      </Grid> 
      <Grid item xs={12}></Grid>
      <Grid item xs={6}>
        <div>
         <div className='BD'>
          Your Birth Date
          </div>

          <Space direction="vertical" size={12}>
          <DatePicker onChange={(date,dateString)=>setDated(dateString) } defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
   
           

          </Space>
          </div>
      </Grid> 
      <Grid item xs={6}>
        <br></br>
      <Button onClick={Submit} style={{backgroundColor: "palevioletred", height: "2rem"} } variant="contained" endIcon={<SendIcon />}>
        
        Send
      </Button>
      </Grid>
        </Grid>
      </Box>
     
     <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : '#ffdfdd',
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.50'),
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : '#ffdfdd',
          p: 2,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          position: 'absolute',
          top: 10,
          left: '0%',
          zIndex: 'tooltip',
          width: '25%',
    
        }}
      >
      <div className="Date">
        Date
        <br></br>
        <div className='tm'>
        {new Date().getDate()} {months[new Date().getMonth()]} {new Date().getFullYear()}
        <br></br>
        {date.toLocaleTimeString()}
        </div>
      </div>
      </Box> 
      <div className='parentBox'>
        <div className='box'>
        <div className='status' style={status ? null: redBox}>
         
          
          </div>
          <div>
          Normal
          </div>
        </div>
        <div className='box'>
        <div className='status' style={status ? redBox : null}>
          
          </div>
          <div>
          Exercise
          </div>
        </div>
      </div>
      <div className='box_HR'>
        <div className='HR'>
          
        Heart Rate Status
        
        </div>
      </div>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'none',
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'none'),
          border: '1px solid none',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'none',
          p: 2,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          position: 'absolute',
          top: 540,
          left: '26%',
          zIndex: 'tooltip',
          width: '25%',
    
        }}
      >
      <div className='bpm'>
      {bpm} 
      </div>
      </Box>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'none',
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'none'),
          border: '1px solid none',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'none',
          p: 2,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          position: 'absolute',
          top: 580,
          left: '40%',
          zIndex: 'tooltip',
          width: '25%',
    
        }}
      >
      <div className='bpmu'>
      bpm
      </div>
      </Box>
      <div className='HR_Card'>
        <div className='Cd' >
        {ST[cr2]}
        </div>
        <div className='St' style={cr? null:StatusBox} > 
        </div>
        </div>
        <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'none',
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.50'),
          border: 'none 1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'pink',
          p: 2,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          position: 'absolute',
          top: 70,
          left: '36%',
          zIndex: 'tooltip',
          width: '25%'
          // height: ''
        }}
      >
        <div className='Heart'>
        HEART BEAT
        </div>
      </Box>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'none',
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.50'),
          border: 'none 1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'pink',
          p: 2,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          position: 'absolute',
          top: 700,
          left: '85%',
          zIndex: 'tooltip',
          width: '12%'
          // height: ''
        }}
      >

      <a href='/history'>
        <button className='History'>
          History
        </button>
      </a>  
        
      </Box>
      
    </>
  )
}
export default Home
