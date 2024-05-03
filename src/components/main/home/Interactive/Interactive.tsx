import { styled } from '@mui/material/styles';
import {Button, Grid, Typography} from '@mui/material';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';
// @ts-ignore
import brainDog from 'assets/images/brain-dog.png';
// @ts-ignore
import screenHow from 'assets/images/screen-interactive.png';

export const Interactive = () => {
  return (
    <StyledGrid id="Interactive" container justifyContent="center" alignItems="center" flexDirection="column">
      <Grid item xs={10} md={5}>
        <Typography variant="h4" sx={{ paddingBottom: '16px'}}>
          Interactive Communication
        </Typography>
        <Typography variant="subtitle1" sx={{ paddingBottom: '24px'}}>
          BrainBarkAI is designed to communicate with you, offering personalized tasks and supporting your psychological well-being. Our bot has a brain and long term memory, allowing it to learn and adapt over time. The more you interact, the better it understands you, tailoring its responses and activities to fit your needs.        </Typography>
        <Button variant="contained" target="_blank" href="https://t.me/BrainBarkAiBot">
          Chat Now
        </Button>
      </Grid>
      <Grid item xs={10}>
        <div className={classes.imagesWrap}>
          <img src={screenHow} className={classes.screen} />
          <img src={brainDog} className={classes.dog} />
        </div>
      </Grid>

    </StyledGrid>
  );
};

const classes = generateUtilityClasses('Interactive', ['screen', 'dog', 'imagesWrap']);

const StyledGrid = styled(Grid)(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(5, 0),
  position: 'relative',
  backgroundColor: 'rgb(0,0,41)',
  background: 'linear-gradient(180deg, rgba(0,0,41,1) 0%, rgba(7,7,96,1) 44%)',
  textAlign: 'center',
  [`& .${classes.imagesWrap}`]: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '60px',
    [theme.breakpoints.down('mobile')]: {
      flexDirection: 'column',
      gap: 10,
    },
  },
  [`& .${classes.screen}`]: {
    width: '55%',
    [theme.breakpoints.down('mobile')]: {
      width: '100%',
    },
  },
  [`& .${classes.dog}`]: {
    width: '23%',
    [theme.breakpoints.down('mobile')]: {
      width: '60%',
    },
  },
  [`& .MuiTypography-root`]: {
    textShadow: '2px 2px 40px black',
  },
}));

export default Interactive;
