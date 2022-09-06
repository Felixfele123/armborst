import React, { } from "react"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';
import { useHistory } from "react-router-dom";
import cloneDeep from 'lodash/cloneDeep';

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
      paddingY: theme.spacing(2),
      margin: 'auto',
      marginTop: "20px",
      maxHeight: "41px"
    },
    open: {
      backgroundColor: "#C0C0C0"
    },
    description: {
      margin: "10px 0 10px 0",
      textAlign: "center"
    }
  }));

const Set = ({set, workouts, workout, exercise, setWorkouts, newWorkout, excerciseIndex, setNewWorkout}) => {
    const classes = useStyles();
    const history = useHistory();
      let newObj = cloneDeep(newWorkout) 
    const statusHandler = () => {

      console.log(newObj.excirceses[excerciseIndex])
      if(newObj.excirceses[excerciseIndex].sets.length > 1){
        newObj.excirceses[excerciseIndex].sets.pop()
      }
        setNewWorkout(newObj)
        history.push("/ActiveWorkout") 
    }
    return(
        <Paper
        onClick={statusHandler}
        variant="outlined"
        square={false}
        className={`${classes.paper} ${classes.open}`} 
        >
        <Grid container direction="row">
          <Grid item xs={12}>
            <Typography className={classes.description} gutterBottom variant="subtitle2">
              <RemoveIcon style={{height: "20px", inline:false}} inline="true"/>
            </Typography>
          </Grid>
        </Grid>
        </Paper>
    );
}

export default Set;

