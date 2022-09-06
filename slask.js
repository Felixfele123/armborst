<Grid xs={12} item className={classes.description}>
<Button variant="outlined">fler övningar</Button>        
</Grid>

<Typography variant="h5" style={{color: "#3f51b5", margin: "10px", marginTop: "30px"}}>
Vecka {Math.ceil((workouts.findIndex(w => w._id === workout._id) + 1)/2)}
</Typography>