import React, {  } from "react"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import cloneDeep from 'lodash/cloneDeep';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    success: {
        backgroundColor: "#4F8A10",
        color: "white"
    },
    closed: {
      backgroundColor: "#068701",
      color: "white"
    },
    paper: {
      paddingY: theme.spacing(2),
      margin: 'auto',
      marginTop: "20px",
    },
    open: {
      backgroundColor: "#F5F5F5"
    },
    description: {
      margin: "10px 0 10px 0",
      textAlign: "center"
    }
  }));

const Set = ({workoutIndex, excerciseIndex, setIndex, set, workouts, workout, exercise, setWorkouts, newWorkout, setNewWorkout, myElement}) => {
    const classes = useStyles();
    const history = useHistory();

    const handleResistence = (el) => {
      if(history.location.pathname === '/ActiveWorkout'){
        if(el) {
 
          // Align temp input element approximately where the input element is
          // so the cursor doesn't jump around
          var __tempEl__ = document.createElement('input');
          __tempEl__.pattern="[0-9]*"
          __tempEl__.inputmode="decimal"
          __tempEl__.style.position = 'absolute';
          __tempEl__.style.top = (window.pageYOffset || document.documentElement.scrollTop) + 'px';
          __tempEl__.style.left = el.offsetLeft + 'px';
          __tempEl__.style.height = 0;
          __tempEl__.style.opacity = 0;
          // Put this temp element as a child of the page <body> and focus on it
          document.body.appendChild(__tempEl__);
          __tempEl__.focus();
          __tempEl__.addEventListener("input", function(){
   
            if(__tempEl__.value === ""){
              let newObj = cloneDeep(newWorkout)
              newObj.excirceses[excerciseIndex].sets[setIndex].resistence = 0
              setNewWorkout(newObj)
            }else{
              let newObj = cloneDeep(newWorkout)
              newObj.excirceses[excerciseIndex].sets[setIndex].resistence = __tempEl__.value
              setNewWorkout(newObj)
            }
          }, {preventScroll: true});
          // The keyboard is open. Now do a delayed focus on the target element
          history.push("/ActiveWorkout");
        }
      }
    }
    const handleDuration = (el) => {
      if(history.location.pathname === '/ActiveWorkout'){
        if(document.getElementsByTagName('input')){
          const myNode = document.body.getElementsByTagName('input');
          myNode.innerHTML = '';
        }
        if(el) {
          // Align temp input element approximately where the input element is
          // so the cursor doesn't jump around
          var __tempEl__ = document.createElement('input');
          __tempEl__.pattern="[0-9]*"
          __tempEl__.inputmode="decimal"
          __tempEl__.style.position = 'absolute';
          __tempEl__.style.top = (window.pageYOffset || document.documentElement.scrollTop) + 'px';
          __tempEl__.style.left = el.offsetLeft + 'px';
          __tempEl__.style.height = 0;
          __tempEl__.style.opacity = 0;
          // Put this temp element as a child of the page <body> and focus on it
          document.body.appendChild(__tempEl__);
          __tempEl__.id="temp"
          __tempEl__.focus();
          __tempEl__.addEventListener("input", function(){
   
            if(__tempEl__.value === ""){
              let newObj = cloneDeep(newWorkout)
              newObj.excirceses[excerciseIndex].sets[setIndex].duration = 0
              setNewWorkout(newObj)
            }else{
              let newObj = cloneDeep(newWorkout)
              newObj.excirceses[excerciseIndex].sets[setIndex].duration = __tempEl__.value
              setNewWorkout(newObj)
            }
          });
          __tempEl__.addEventListener("focusout", function(){
            document.body.removeChild(__tempEl__);
          });
          // The keyboard is open. Now do a delayed focus on the target element
        }
        history.push("/ActiveWorkout");
      }
    }
    const statusHandler = () => {
      if(history.location.pathname === '/ActiveWorkout'){
        let newObj = cloneDeep(newWorkout)
        let status = newObj.excirceses[excerciseIndex].sets[setIndex].status
        if(status === "open"){
          newObj.excirceses[excerciseIndex].sets[setIndex].status = "closed"
        }else{
          newObj.excirceses[excerciseIndex].sets[setIndex].status = "open"    
        }
        setNewWorkout(newObj) 
        console.log("double click")
      }
    }

    return(
        <Paper
        variant="outlined"
        square={false}
        className={`${classes.paper} ${set.status === 'closed' && history.location.pathname !== "/" ? classes.closed : classes.open}`}
        onDoubleClick={() => statusHandler()}
        >
        <Grid container direction="row">
          <Grid item xs={6} >
            <Typography className={classes.description} gutterBottom variant="subtitle2">
            <span id="my-element" onClick={() => handleResistence(myElement)}> {set.resistence} </span> 
            {set.resistencePrefix}   
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.description} variant="subtitle2">
            <span id="my-element" onClick={() => handleDuration(myElement)}> {set.duration} </span> 
              {set.durationPrefix}
            </Typography>
          </Grid>
        </Grid>
        </Paper>
    );
}

export default Set;
