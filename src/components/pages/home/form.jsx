import React from 'react';
import {
    Avatar, Button, CssBaseline, TextField, Link, Paper,
    Box, Grid, Typography, MenuItem, makeStyles
} from '@material-ui/core/';

import OpacityIcon from '@material-ui/icons/Opacity';
import Footer from '../../common/footer'
import currencies from './bloodlist'


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: 'url(https://source.unsplash.com/1600x900/?blurry)',
    },
    image: {
        //backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(10, 5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    gridclass: {
        margin: theme.spacing(1, 'auto'),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Form(props) {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
            <Grid color={'primary'} item xs={12} sm={8} md={5} component={Paper} elevation={10} square className={classes.gridclass}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <OpacityIcon />
                    </Avatar>
                    <Typography component="h1" variant="h4">
                        Blood Transfusion
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            onChange={props.changeHandler}
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="outlined-select-blood"
                            label="Blood Group"
                            name="bloodgroup"
                            onChange={props.selectHandler}
                            select
                        >
                            {currencies.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={props.clickHandler}
                        >
                            Enter
                        </Button>

                        <Footer />
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

export default Form