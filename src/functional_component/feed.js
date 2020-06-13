import React,{useState,useEffect} from 'react';
import "../css/feed.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import QuoteIcon from "../icons/quote.png";
import KarmaIcon from "../icons/karma.png";
import MariageIcon from "../icons/jewelry.png";
import MusicIcon from "../icons/sing.png";
import ReligionIcon from "../icons/pray.png";
import RelationshipIcon from "../icons/sex.png";
import SIIcon from "../icons/exercise.png";
import HealthIcon from "../icons/doctor.png"
import Typography from '@material-ui/core/Typography';
import CommentIcon from '@material-ui/icons/CommentOutlined';
import ArrowIcon from '@material-ui/icons/Category';
import { Divider } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
    typography: {
      fontFamily: [
        '"Andika"',
      ].join(','),
    },
  });

const useStyles = makeStyles({
  root: {
    maxWidth:700,
    backgroundColor: '#605196',
    color: '#fff'
  },
  media: {
    maxHeight:400
  },
  blogColor: {
    color:'#fff',
  },
  space: {
    color:'#fff',
  }
});

export default function Feed(props) {
  const classes = useStyles();
  const [logo,setLogo] = useState();

  useEffect(() => {
    function pinLogo(){
    switch(props.category){
      case 'health':
       setLogo(HealthIcon)
      break;
      case 'self improvement':
       setLogo(SIIcon)
      break;
      case 'mariage':
       setLogo(MariageIcon)
      break;
      case 'karma':
       setLogo(KarmaIcon)
      break;
      case 'religion':
       setLogo(ReligionIcon)
      break;
      case 'quote':
       setLogo(QuoteIcon)
      break;
      case 'Relationship':
       setLogo(RelationshipIcon)
      break;
      case 'Music':
       setLogo(MusicIcon)
      break;

    }
    }
    pinLogo();
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <Card className={classes.root}>
           <CardHeader
        avatar={
          <Avatar variant="square"  alt="Remy Sharp" src={logo}>
           
          </Avatar>
        }
        action={
          <IconButton className="remove" aria-label="settings">
            <ArrowIcon />
          </IconButton>
        }
        classes={{
             title: classes.root,
             subheader: classes.root,
            }}
        title={props.category.toLocaleUpperCase()}
        subheader={props.title}
       
      />
      <CardActionArea className="remove">
      {props.isVideo ?
       <CardMedia
       className={classes.media}
       title={props.title}
     >
  
      <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" 
      src={props.cover}
      allowFullScreen></iframe>
      </div>
     </CardMedia>
      
        :
        <CardMedia
          component="img"
          image={props.cover}
          title={props.title}
        />
      }
      
        <CardContent>
          <Typography className={classes.space} variant="body2" color="textSecondary" component="p">
            {props.des}
          </Typography>
          <hr className="divide"/>
          <Typography className="space" gutterBottom variant="h6" component="h5">
            <CommentIcon/> {props.comment} {props.comment > 1 ? 'Comments':'Comment'} 
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
    </ThemeProvider>
  );
}
