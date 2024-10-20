import Nav from "./components/Nav.js";
import ThreeScene from "./components3d/ThreeScene.js";
import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts} from './actions/posts.js';
import Form from "./components/Form/Form.js";
import Posts from "./components/Posts/Posts.js";
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getPosts());
    }, [dispatch]);

    return (
      <div>
      <Nav />
            <ThreeScene />
        <Container maxwidth='lg'className={classes.feed} >
            <AppBar className={classes.appBar} position="static" >
                <Typography className={classes.heading} variant="h2" align="center">Post Your Favorite Cruiser
                </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
        </div>
    );
}

export default App;