import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Excircese from './Exercise'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useHistory } from "react-router-dom";


const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0
  },
  paper: {
    paddingY: theme.spacing(2),
    marginX: 0,
  },
  workoutName: {
    textAlign: 'center',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  timer: {
    textAlign: "center"
  }
}));
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'left',
  padding:20,
  color: theme.palette.text.secondary,
  height: 80,
  lineHeight: '10px',
}));

const Workout = ({workoutIndex, value, setValue, workout, workouts, setWorkouts, setTodos, key, setNewWorkout}) => {
  const classes = useStyles();
  const excirceses = workout.excirceses
  const history = useHistory();

  const handleClick = (spel) => {
    console.log(spel)
    if(spel.title == "TRE I RAD"){
      history.push("/newWorkout")  
    }
    if(spel.title == "PINNBOLL"){
      history.push("/Breakout")  
    }
    if(spel.title == "TETRIS"){
      history.push("/Tetris")  
    }
    if(spel.title == "RÖJ"){
      history.push("/Minesweeper")  
    }
    if(spel.title == "PATIENS"){
      history.push("/Solitaire")  
    }
  };
  const handleChange = (workout) => {
    console.log("handle change")
    const newArr = workouts.map((w, index) => {
      if(index === workoutIndex){
       return {
        ...w,
        expanded: !w.expanded
       }
      }
      return w
    }) 
    setWorkouts(newArr);
  };
  const newArr = [...workouts]

    return(

      <Grid container>
      {[darkTheme].map((theme, index) => (
        <Grid item xs={12} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '2fr 2fr', xs:'2fr 2fr'  },
                gap: 2,
              }}
            >
              {[
                {title: "RITNINGAR", elevation: 0},
                {title: "STATISTIK", elevation: 0},
                
                  ].map((spel,index) => (
                <Item color ="black" key={index} id={"game" + index} elevation={spel.elevation}  onClick={() => handleClick(spel)}>
                   <h2>{spel.title}</h2>
                   <h2>{spel.title2}</h2>
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
    );
}

export default Workout;