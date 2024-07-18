import React from 'react';
import { Card, CardHeader, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const ImageList = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} raised={true}>
        <CardHeader title="Camera Name" />
        <CardActionArea>
          <CardMedia
            component='video'
            className={classes.media}
            controls
            src = "../../assetsHOME_PAGE.MP4"
            title="Video Title"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Some Text
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default ImageList;



import React from 'react';
import CardMedia from '@mui/material/CardMed/ia';


const ImageList = () => {
  return (
    <div>
      <CardMedia
        component='video'
        src={require('../../assets/')}
        autoPlay
        controls 
      />


</div>
  );
}

export default ImageList;