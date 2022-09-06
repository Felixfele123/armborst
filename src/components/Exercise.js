import React, {  } from "react"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Set from './Set'
import NewSet from './NewSet'
import RemoveSet from './RemoveSet'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    setWrapper: {
        paddingBottom: "30px"
    },
    exercise: {
      marginTop: "5px",
      paddingTop: "10px"
    },
    exerciseName: {
        textAlign: 'center',
        margin: "auto",
      },
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
          margin: 0,
        },
      },
    success: {
        backgroundColor: "#4F8A10",
        color: "white"
    },
    fail: {
        backgroundColor: "#D8000C",
        color: "white"
    },
    changeset: {
        paddingLeft: "60px",
        paddingRight: "60px"
    }
  }));

const Exercise = ({workoutIndex, excerciseIndex, value, setValue, exercise, workout, setWorkouts, workouts, newWorkout, setNewWorkout, newWorkoutExerciseIndex}) => {
    const sets = exercise.sets;
    const classes = useStyles();
    const history = useHistory();
    const myElement = document.getElementById('my-element');
    return(
            <Grid className={classes.exercise} container>
                <Grid xs={4} item className={classes.exerciseName}>
                    <Typography variant="body2" color="textSecondary">
                        {exercise.name}
                    </Typography>
                </Grid>
                <Grid className={classes.setWrapper} container
                alignItems="center"
                justify="center"
                >
                    {sets.map((set, index) => (
                            <Grid key={index} item xs={11}>
                                <Set 
                                myElement={myElement}
                                setNewWorkout={setNewWorkout}
                                workoutIndex={workoutIndex} excerciseIndex={excerciseIndex} setIndex={index} newWorkout={newWorkout}
                                value={value} setValue={setValue} set={set} workout={workout} workouts={workouts} setWorkouts={setWorkouts} exercise={exercise}/>        
                            </Grid>
                    ))}
                    {history.location.pathname !== '/' && (
                        <Grid xs={11} item>
                            <Grid container direction="row">
                                <Grid xs={6} item className={classes.changeset}>
                                    <RemoveSet 
                                    newWorkout={newWorkout} setNewWorkout={setNewWorkout}
                                    workoutIndex={workoutIndex} excerciseIndex={excerciseIndex}
                                    key={exercise.exerciseID} workout={workout} workouts={workouts} setWorkouts={setWorkouts} exercise={exercise}
                                    /> 
                                </Grid>    
                                <Grid xs={6} item className={classes.changeset}>
                                    <NewSet 
                                    newWorkout={newWorkout} setNewWorkout={setNewWorkout}
                                    workoutIndex={workoutIndex} excerciseIndex={excerciseIndex}
                                    key={exercise.exerciseID} workout={workout} workouts={workouts} setWorkouts={setWorkouts} exercise={exercise}
                                    /> 
                                </Grid>          
                            </Grid>
                        </Grid>                           
                    )}
                </Grid>
            </Grid>
    );
}

export default Exercise;