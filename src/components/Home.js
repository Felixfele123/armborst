import React, {useEffect} from "react"
import WorkoutList from "./WorkoutList"
import Container from '@material-ui/core/Container'



const Home = ({setStatus, status, workouts, setWorkouts, newWorkout, setNewWorkout}) => {

    useEffect(() => {
        setStatus("Start workout")
      }, [setStatus]);
      
    return(
        <Container style={{width:"100%", padding: "0", marginBottom: "120px", marginTop: "70px"}}>
            <WorkoutList key={workouts._id} workouts={workouts} setWorkouts={setWorkouts} setNewWorkout={setNewWorkout}/>
        </Container>
    );
}

export default Home;