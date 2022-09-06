import React from "react";
import Workout from './Workout'

const WorkoutList = ({value, setValue, workouts, setWorkouts, setNewWorkout}) => {
    return(
      <div style={{marginTop: "70px"}} id="wolist"> 
        {["game"].map((workout, index) => {
          return <div key={index}>
            <Workout workoutIndex={index} value={value} setValue={setValue} setNewWorkout={setNewWorkout} setWorkouts={setWorkouts} workouts={workouts} workout={workout}/>
          </div>
        })}        
      </div>
    );
}

export default WorkoutList;
