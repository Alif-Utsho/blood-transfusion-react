import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import OpacityIcon from '@material-ui/icons/Opacity';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

const currencies = [
    {
        value: 'apos',
        label: 'A+',
    },
    {
        value: 'bpos',
        label: 'B+',
    },
    {
        value: 'abpos',
        label: 'AB+',
    },
    {
        value: 'opos',
        label: 'O+',
    },
    {
        value: 'aneg',
        label: 'A-',
    },
    {
        value: 'bneg',
        label: 'B-',
    },
    {
        value: 'abneg',
        label: 'AB-',
    },
    {
        value: 'oneg',
        label: 'O-',
    },
];


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://facebook.com/utsho.aiub/">
                ALif Shahriar Utsho
            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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

function Home() {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
            <Grid color={'primary'} item xs={12} sm={8} md={5} component={Paper} elevation={5} square className={classes.gridclass}>
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
                        />
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Blood Group"
                            fullWidth
                            required
                            variant="outlined"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Enter
                        </Button>


                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

export default Home