// import React,{useContext} from 'react'
// import {Card,CardHeader,CardContent,IconButton,CardActions,Image} from '@material-ui/core';
// import Avatar from '@material-ui/core/Avatar';


// import ShareIcon from '@material-ui/icons/Share';


// function ArticleCard({data,article}) {
//     return (
//         <div>
//           {/* <Card className="col-4 m-2" >
//               <CardHeader 
//               avatar={
//                   <Avatar
//                   src={data.avatar}
//                   >
//                       {/* <img src={data.avatar} /> */}
//                   </Avatar>
//               }
//               title={data.name}
//         subheader="September 14, 2016"
//               />
//               <CardContent>
//               This impressive paella is a perfect party dish and a fun meal to cook together with your
//           guests. Add 1 cup of frozen peas along with the mussels, if you like.
//               </CardContent>
//               <CardActions disableSpacing>
        
        
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
      
      
      
//       </CardActions>



//           </Card> */}
//         </div>
//     )
// }

// export default ArticleCard
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin:10
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

export default function ArticleCard({article}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
//   "id": "2",
//   "createdAt": "2021-04-18T14:24:13.227Z",
//   "title": "We need to generate the mobile RAM interface!",
//   "content": "I'll input the haptic XSS port, that should sensor the ADP bus!",
//   "createdBy": 54999
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            O
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`Author: ${article.createdBy}`}
        subheader={article.createdAt}
      />
      {/* <CardMedia
        className={classes.media}
        image={Math}
        title="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          
          {article.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Content:</Typography>
          
          
          <Typography paragraph>
           
           {article.content}
          </Typography>
         
         
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}