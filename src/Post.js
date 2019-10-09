import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        margin: "0 auto",
        marginTop: "2em"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function RecipeReviewCard(props) {
    const classes = useStyles();
    const [liked, setLiked] = React.useState(false);

    const handleLikeClick = () => {
        setLiked(!liked);
    };

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={props.img}
            />
            <CardContent>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="like" onClick={handleLikeClick} style={{ color: liked ? "red" : "grey" }}>
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}