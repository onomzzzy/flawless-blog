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
import QuoteIcon from "../icons/quote1.png";
import KarmaIcon from "../icons/karma1.png";
import MariageIcon from "../icons/jewelry1.png";
import ReligionIcon from "../icons/pray1.png";
import SIIcon from "../icons/exercise1.png";
import HealthIcon from "../icons/doctor1.png"
import Typography from '@material-ui/core/Typography';
import CommentIcon from '@material-ui/icons/CommentOutlined';
import ArrowIcon from '@material-ui/icons/Category';
import { Divider } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
    typography: {
      fontFamily: [
        '"Cagliostro"',
      ].join(','),
    },
  });

const useStyles = makeStyles({
  root: {
    maxWidth:700,
  },
  media: {
    maxHeight:400,
  },
  blogColor: {
    color:'#fff',
    backgroundColor: '#605196',
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
        title={props.category}
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
          <Typography className="space" variant="body2" color="textSecondary" component="p">
            {props.des}
          </Typography>
          <Divider className="space"/>
          <Typography className="space" gutterBottom variant="h6" component="h5">
            <CommentIcon/> {props.comment} {props.comment > 1 ? 'Comments':'Comment'} 
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
    </ThemeProvider>
  );
}
