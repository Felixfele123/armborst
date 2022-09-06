import React, {useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Timer from './Timer.js'
import Excircese from './Exercise.js'

const useStyles = makeStyles((theme) => ({
    success: {
        backgroundColor: "#4F8A10",
        color: "white"
    },
    fail: {
        backgroundColor: "#D8000C",
        color: "white"
    },
    paper: {
      margin: "60px 10px 10px 10px", 
    },
    open: {
      backgroundColor: "#F5F5F5"
    },
    description: {
      margin: "30px 0 30px 0",
      textAlign: "center"
    },
    container: {
        padding: 0,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
  }));
const ActiveWorkout = ({setStatus, status, newWorkout, setNewWorkout, setWorkouts}) => {

    useEffect(() => {
        setStatus("Save")
      }, [setStatus]);

    const workouts = [newWorkout]
    const excirceses = newWorkout.excirceses


    const classes = useStyles();
    return (
        <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{width:"100%", padding: "0", marginBottom: "120px"}}
        >
            <Grid container>
                <Grid xs={12} item className={classes.exerciseName}>
                    <Paper variant="outlined" className={classes.paper}>
                        <Grid container>
                            <Grid  item xs={6} style={{padding:"10px"}}>
                                {newWorkout.name}
                            </Grid>
                            <Grid item xs={6} style={{textAlign:"right",padding:"10px"}}>
                                <Timer/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        {excirceses.map((ex, index) => {
            return <Excircese 
            workoutIndex={0} 
            newWorkout={newWorkout} setNewWorkout={setNewWorkout}
            key={index} workout={newWorkout} workouts={workouts} 
            excirceses={excirceses} exercise={ex} setWorkouts={setWorkouts}
            excerciseIndex={index}/>
        })}
        </Grid>
      );
}

export default ActiveWorkout;