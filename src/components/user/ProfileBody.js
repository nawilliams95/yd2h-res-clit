import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
        marginTop: 20,

    },
    paper: {
        maxWidth: 600,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    }
}));


export default function ProfileBody(props) {
    const classes = useStyles();
    const { posts, user } = props;

    return (
        <div className={classes.root}>
            {posts.map((post, index) => (
                <Paper className={classes.paper} key={post.id} index>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar src={user.img} alt={user.username} />
                        </Grid>
                        <Grid item>
                            <Typography noWrap variant="'subtitle2'">{post.title}</Typography>
                        </Grid>
                        <Grid item xs zeroMinWidth >
                            <Typography noWrap>{post.content}</Typography>
                        </Grid>
                        <Button size="small" color="secondary" href={`post/${post.id}`} >
                            Continue reading...
                        </Button>
                        <Button size="small" color="transparent" href={`http://localhost:3000/${post.id}/edit`} >
                            <EditIcon size="small" />
                        </Button>
                    </Grid>
                </Paper>
            ))}
        </div>
    );
}
ProfileBody.propTypes = {
    posts: PropTypes.array,
    user: PropTypes.object
  };