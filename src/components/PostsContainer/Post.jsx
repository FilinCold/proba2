import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 600,
        marginBottom: 40,
        boxShadow: '0 0 5px gray'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    colorRead: {
        color: 'white',
        background: '#4155B5'
    }
});

let Post = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.data.data}

                </Typography>
                <Typography variant="h5" component="h2">
                    {props.data.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    #{props.data.tag}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.data.text}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" size="small">Read</Button>
            </CardActions>
        </Card>
    )
}


export default Post;