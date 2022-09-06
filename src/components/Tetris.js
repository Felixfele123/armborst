import React from "react"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';
import '../tetris.css';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
    },
    open: {
      backgroundColor: "#F5F5F5"
    },
    description: {
      margin: "20px 0 20px 0",
    },
    headline: {
        marginY: "10px"
    },
    button: {
        textAlign: "center",
        marginTop: "30px"
    },
    Lowerbody: {
        borderColor: "#3f51b5"
    },
  }));

const Breakout = ({workouts, setWorkouts, newWorkout, setNewWorkout, newWorkoutList, setNewWorkoutList}) => {

const classNamees = useStyles();
const handleClick = (w) => {
    setNewWorkoutList(newWorkoutList.map(NW => { 
        if(NW.name === w.name){
            setNewWorkout({...NW, active: true})
            return{
                ...NW,
                active: true,
            }
        }
        return {
            ...NW,
            active: false
        }
    }))
  };

    return(
    <Container style={{padding: "0", marginTop: "56px"}}>
          <section id="game">
          <h3 style={{color:"white", textAlign:"right", padding: "5px"}}>Score:<span id="score">0</span></h3>

    <div className="tcontainer" id="tetris">
      <div className="tgrid" id="tgrid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="taken"></div>
        <div className="taken"></div>
        <div className="taken"></div>
        <div className="taken"></div>
        <div className="taken"></div>
        <div className="taken"></div>
        <div className="taken"></div>
        <div className="taken"></div>
        <div className="taken"></div>
        <div className="taken"></div>
      </div>


      <div className="tmini-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    <button id="start-button">Pause</button>
    <ArrowUpwardIcon id="tetris-up" style={{height: "70px",  width:"100%", inline:false, color:"white"}} fontSize="smal" inline="false"/>
    <ArrowBackIcon id="tetris-back" style={{height: "70px",  width:"100%", inline:false, color:"white"}} fontSize="smal" inline="false"/>
    <ArrowForwardIcon id="tetris-forward"  style={{height: "70px",  width:"100%", inline:false, color:"white"}} fontSize="smal" inline="false"/>
    <ArrowDownwardIcon id="tetris-down" style={{height: "70px",  width:"100%", inline:false, color:"white"}} fontSize="smal" inline="false"/>
    </div>



    </div>

          </section>

        </Container>
    )

}

export default Breakout;