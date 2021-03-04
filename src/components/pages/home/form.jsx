import React from 'react';
import {
    Avatar, Button, CssBaseline, TextField, Paper,
    Grid, Typography, MenuItem, makeStyles
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
        theme.palette.type === 'light',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(6, 2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    gridclass: {
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
        <Grid container justify="center" component="main" className={classes.root}>
            <CssBaseline />
            {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
            <Grid justify="center" container color={'primary'} item xs={12} sm={8} md={4} component={Paper} elevation={10} className={classes.gridclass}>
                <Grid container xs={10} justify="center" className={classes.paper} >
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
                            // href={name}
                            className={classes.submit}
                            onClick={props.clickHandler}
                        >
                            Enter
                        </Button>
                        <Footer />
                    </form>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Form