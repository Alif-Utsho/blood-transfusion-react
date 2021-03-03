import React from 'react';
import {
    Avatar, CssBaseline, Paper, ListItemIcon,
    Grid, Typography, makeStyles
} from '@material-ui/core/';

import OpacityIcon from '@material-ui/icons/Opacity';
import Footer from '../../common/footer'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';  
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';
import ArrowLeftRoundedIcon from '@material-ui/icons/ArrowLeftRounded';

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
        backgroundColor: theme.palette.type === 'light',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        padding: theme.spacing(3, 0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    gridclass: {
        display: 'flex',
        flexDirection: 'colum',
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
    list: {
        width: '100%',
        maxWidth: 360,
    },
    Gridroot: {
        flexGrow: 1,
        //backgroundColor: theme.palette.background.paper,
        margin: theme.spacing(0,0,1,0)
    },
    // listflex: {
    //     display: 'flex',
    //     flexDirection: 'row'
    // }
    shadow: {
        //backgroundColor: theme.palette.background.paper,
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        backgroundColor: theme.palette.grey[50],
        boxShadow: theme.shadows[2],
        borderRadius: '6px'
    },
    name: {
        fontFamily: theme.typography.Helvetica,
        fontWeight: theme.typography.fontWeightBold,
        color: theme.palette.primary.main,
        letterSpacing: theme.spacing(.15)
    },
    bloodText: {
        width: '100%',
        padding: theme.spacing(1),
        fontFamily: theme.typography.Arial,
        fontWeight: theme.typography.fontWeightDark,
        backgroundColor: theme.palette.success.main,
        color: theme.palette.inherite,
        textAlign: 'center',
        letterSpacing: theme.spacing(1),
        lineHeight: .7,
    }
}));


const BloodGroup = (props) => {

    const classes = useStyles();
    return (
        <>
            <Grid container component="main"  className={classes.root}>
                <CssBaseline />
                {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
                <Grid container color={'primary'} item xs={12} sm={8} md={6} component={Paper} elevation={10} square className={classes.gridclass}>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <OpacityIcon />
                        </Avatar>
                        <Typography component="h1" variant="h4" >
                            <span>Hello, </span>
                            <span className={classes.name}  > {props.name.toUpperCase()} </span>
                        </Typography>
                        <>
                            <Grid component={Paper} container item square xs={12} sm={12} md={12} >
                                <Typography component="h1" variant="h6" className={classes.bloodText} >Your Blood Group is: {props.blood.toUpperCase()}</Typography>
                            </Grid>
                            <Grid color={'primary'} item xs={12} sm={12} md={12} className={classes.gridclass} >
                                <Grid container className={classes.Gridroot} spacing={2}>
                                    <Grid container  item xs={12} direction="row" justify="center" /*alignItems="center"*/  >
                                        <Grid xs={12} sm={5} className={classes.shadow}  >
                                            <Typography component="h1" variant="h6" spacing={3}>
                                                You can Donate to these Blood groups
                                            </Typography>
                                            {/* {[0, 1].map((value) => (
                                                <Grid key={value} item>
                                                    <Paper className={classes.Paperpaper} />
                                                </Grid>
                                            ))} */}

                                            <Grid className={classes.list}>
                                                <List component="nav">
                                                    <ListItem button>
                                                        <ListItemIcon>
                                                            <ArrowRightRoundedIcon/>
                                                        </ListItemIcon>
                                                        <ListItemText primary="A+" />
                                                    </ListItem>
                                                    
                                                    <ListItem button>
                                                        <ListItemIcon>
                                                            <ArrowRightRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="B+" />
                                                    </ListItem>
                                                    
                                                    
                                                </List>
                                            </Grid>
                                        </Grid>
                                        <Grid xs={12} sm={5} className={classes.shadow}  >
                                            <Typography component="h1" variant="h6" spacing={3}>
                                                You can Receive from these Blood groups
                                            </Typography>
                                            <Grid className={classes.list}>
                                                <List component="nav" aria-label="main mailbox folders">
                                                    <ListItem button>
                                                        <ListItemIcon>
                                                            <ArrowLeftRoundedIcon/>
                                                        </ListItemIcon>
                                                        <ListItemText primary="AB+" />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemIcon>
                                                            <ArrowLeftRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="O-" />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemIcon>
                                                            <ArrowLeftRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="AB+" />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemIcon>
                                                            <ArrowLeftRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="O-" />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemIcon>
                                                            <ArrowLeftRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="AB+" />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemIcon>
                                                            <ArrowLeftRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="AB+" />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemIcon>
                                                            <ArrowLeftRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="O-" />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemIcon>
                                                            <ArrowLeftRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="AB+" />
                                                    </ListItem>
                                                </List>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </>
                    <Footer />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default BloodGroup