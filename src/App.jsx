import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import BasicCard from './Card';
import { CenterFocusStrong } from '@mui/icons-material';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { color } from '@mui/system';
import { yellow } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
import { DatePicker, Space } from 'antd';


function App() {
  const [count, setCount] = useState(0)
  // setState({ stateName : updatedStateValue })
  var [date,setDate] = useState(new Date());
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const vl = {}
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
  return (
    <>
      {/* <Grid item xs={6} md={8}>
      
     </Grid> */}
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
          placeholder="Chawonvit"
          
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
          placeholder="Chomvorawong"
          multiline
        />
      </Grid> 
      <Grid item xs={12}></Grid>
      <Grid item xs={6}>

          {/* // <label for="start"> */}
          <Space direction="vertical">
            <DatePicker onChange={onChange} />
            {/* <DatePicker onChange={onChange} picker="week" />
            <DatePicker onChange={onChange} picker="month" />
            <DatePicker onChange={onChange} picker="quarter" />
            <DatePicker onChange={onChange} picker="year" /> */}
          </Space>
          {/* // onChange={(e) => { */}
          {/* //   if(e.target.value < 0){ */}
          {/* //     e.target.value=0
          //   }
          //   else { */}
          {/* //     console.log(e.target.value)
          //   }
          // }}
          // id="outlined-number"
          // label="Age"
          // type="number"
          // placeholder="1"
          // inputProps={{ min: 0 }}
          // size='small'
          // InputLabelProps={{ */}
          {/* //   shrink: true,
          // }}
        /> */}
        {/* <p>`${e.target.value}`</p> */}
        {/* <input type="number" min="0"/> */}
      </Grid> 
      <Grid item xs={6}>
      <Button style={{backgroundColor: "palevioletred", height: "2rem"}} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      </Grid>
        </Grid>
      </Box>
     
     <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'pink',
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.50'),
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'pink',
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
        {date.toLocaleDateString()}
        <br></br>
        {date.toLocaleTimeString()}
        </div>
      </div>
      </Box> 
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' :  'none',
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'none'),
          border: 'none 1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'none',
          p: 2,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          position: 'absolute',
          top: 300,
          right: '60%',
          zIndex: 'tooltip',
          width: '25%'
          // height: ''
        }}
      >
        <div className='status'>
       <FormControlLabel
          value="end"
          control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28,color: 'palevioletred' } }}/>}
          label="Rest"
          labelPlacement="end"
        />
        </div>
      </Box>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' :  'none',
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'none'),
          border: 'none 1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'none',
          p: 2,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          position: 'absolute',
          top: 300,
          right: '20%',
          zIndex: 'tooltip',
          width: '25%'
          // height: ''
        }}
      >
        <div className='status'>
       <FormControlLabel
          value="end"
          control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28,color: 'palevioletred' } }}/>}
          label="Exercise"
          labelPlacement="end"
        />
        </div>
      </Box>
    </>
  )
}

export default App
