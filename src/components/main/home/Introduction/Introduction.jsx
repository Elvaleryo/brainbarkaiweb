import { styled } from '@mui/material/styles';
import {Button, Typography} from '@mui/material';
import bgIntro from 'assets/images/bg-intro.jpg';
import logoBg from 'assets/images/logo-bg.png';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';

export const Introduction = () => {
  return (
    <Styled justifyContent="center">
      <div className={classes.bg}>
        {/*<div className={classes.message}>*/}
        {/*  Woof! Woof! I'm BrainBarkAI, your new furry friend. Nice to meet you! I'm here to listen and support you however I can. How are you feeling today?*/}
        {/*</div>*/}
      </div>
      <div className={classes.wrap}>
        <div className={classes.textWrap}>
          <Typography variant="h1" sx={{ paddingBottom: '16px', fontWeight: 400 }}>
            BrainBarkAI
          </Typography>
          <Typography variant="h5">
            Your Personal AI Companion in a Game-Based Chatbot
          </Typography>
        </div>
        <Button variant="contained" size="large"  className={classes.btn} target="_blank" href="https://t.me/BrainBarkAiBot">
          Chat Now
        </Button>
      </div>
      {/*<div className={classes.screen}>*/}
      {/*  <img src={bbiScreen}/>*/}
      {/*</div>*/}
    </Styled>
  );
};

const classes = generateUtilityClasses('Introduction', ['bg', 'wrap', 'textWrap', 'message', 'btn', 'screen']);

const Styled = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  position: 'relative',
  backgroundImage: `url(${bgIntro})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  [theme.breakpoints.down('mobile')]: {
    backgroundSize: '100% 100%',
  },

  [`& .${classes.bg}`]: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${logoBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '50%',
    backgroundPosition: 'left bottom',
    zIndex: 1,
    [theme.breakpoints.down('mobile')]: {
      backgroundPosition: '-100px bottom',
      backgroundSize: '100%',
    },
  },
  // [`& .${classes.screen}`]: {
  //   position: 'absolute',
  //   bottom: '90px',
  //   right: '30%',
  //   zIndex: 1,
  //   [`& img`]: {
  //     width: '275px',
  //     borderRadius: '10px',
  //     overflow: 'hidden',
  //     boxShadow: '10px 13px 19px 0px rgba(0,0,0,0.17)',
  //   },
  // },
  [`& .${classes.wrap}`]: {
    paddingTop: theme.spacing(20),
    textAlign: 'right',
    position: 'relative',
    paddingRight: '10%',
    zIndex: 2,
    [theme.breakpoints.down('mobile')]: {
      paddingTop: theme.spacing(15),
    },
  },
  [`& .${classes.btn}`]: {
    padding: '12.5px 35px',
    backgroundColor: '#1853ff',
  },
  [`& .${classes.textWrap}`]: {
    marginBottom: '40px',
    [`& .MuiTypography-h1`]: {
      [theme.breakpoints.down('mobile')]: {
        fontSize: 50,
      },
    },
  },
  [`& .${classes.message}`]: {
    borderRadius: 20,
    padding: '8px 15px',
    marginTop: '5px',
    marginBottom: '5px',
    display: 'inline-block',
    alignItems: 'flex-start',
    backgroundColor: '#3562cc',
    maxWidth: '400px',
    position: 'absolute',
    left: '43%',
    bottom: '26%',
    fontFamily: 'helvetica',
    color: '#fff',
    boxShadow: '10px 13px 19px 0px rgba(0,0,0,0.17)',
    '&:after': {
      content: "''",
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: 0,
      height: 0,
      border: '18px solid transparent',
      borderBottomColor: '#3562cc',
      borderTop: 0,
      borderRight: 0,
      marginLeft: '-5px',
      marginBottom: '1px',
    },
    // '&:before': {
    //   content: "''",
    //   position: 'absolute',
    //   zIndex: 0,
    //   bottom: 0,
    //   left: '-7px',
    //   height: '20px',
    //   width: '20px',
    //   background: '#eee',
    //   borderBottomRightRadius: '15px'
    // },
    // '&:after': {
    //   content: "''",
    //   position: 'absolute',
    //   zIndex: 1,
    //   bottom: 0,
    //   left: '-10px',
    //   width: '10px',
    //   height: '20px',
    //   background: 'white',
    //   borderBottomRightRadius: '10px'
    // }
  },
}));

export default Introduction;
