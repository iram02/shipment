import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import logo from "../../Assets/logo.svg";
import profile from '../../Assets/profile.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    imgPadding : {
        marginLeft: theme.spacing(5),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    }
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default" >
                <Toolbar>
                    <img src={logo} alt="logo" className={classes.imgPadding} />
                    <Typography variant="h6" className={classes.title}>
                        <b>Intugine</b>
                    </Typography>
                    <Button color="inherit"><b>Home</b></Button>
                    <Button color="inherit"><b>Brands</b></Button>
                    <Button color="inherit">
                        <b>Transporters</b>
                    </Button>
                    <Button>
                        <img src={profile} alt="profile" />
                        <ExpandMoreIcon />
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}