import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      subtitle1: {
        flexGrow: 1,
        textalign: "center"
      },
      timer: {
          textAlign: "right"
      },
      button: {
        textAlign: "end",
        color: "white"
    },
}));

const TopBar = ({AppStatus, putWorkouts}) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <AppBar position="fixed">
    <Toolbar>
      <Grid container>
      <Grid container direction="row">
          <Grid item xs={12} >
            <Typography onClick={() => {history.push("/")}} variant="subtitle1" className={classes.title}>
            ARMBORST
          </Typography>   
          </Grid>

        </Grid>     
      </Grid>
    </Toolbar>
    </AppBar>
  );
}

export default TopBar