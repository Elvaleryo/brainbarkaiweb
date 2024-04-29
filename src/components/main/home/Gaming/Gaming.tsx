import { styled } from '@mui/material/styles';
import {Button, Grid, Typography} from '@mui/material';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';
// @ts-ignore
import bgGaming from 'assets/images/bg-gaming.jpg';
// @ts-ignore
import gaming from 'assets/images/gaming.png';

export const Gaming = () => {
  return (
    <StyledGrid id="Gaming" container justifyContent="center" alignItems="center">
      <Grid item xs={4}>
        <Typography variant="h4" sx={{ paddingBottom: '16px'}}>
          Gaming
        </Typography>
        <Typography variant="subtitle1" sx={{ paddingBottom: '24px'}}>
          We introduces personalized adventure games that utilize user information to create immersive storylines. Users solve puzzles with their AI dog companions and compete in tournaments for rewards, enhancing entertainment and community engagement within the platform.        </Typography>
        <Typography variant="subtitle1" sx={{ paddingBottom: '24px'}}>
          E,g. guide your companion through challenges like exploring a mystical forest or hunting for hidden treasures. Each successful step helps your dog grow and develop, strengthening your bond and unlocking new rewards within the platform.        </Typography>
        <Button variant="contained" size="large" target="_blank" href="https://t.me/BrainBarkAiBot">
          Chat Now
        </Button>
      </Grid>
      <Grid item xs={5}>
        <img src={gaming} className={classes.screen} />
      </Grid>

    </StyledGrid>
  );
};

const classes = generateUtilityClasses('Gaming', ['screen']);

const StyledGrid = styled(Grid)(() => ({
  minHeight: '100vh',
  position: 'relative',
  backgroundImage: `url(${bgGaming})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  [`& .${classes.screen}`]: {
    width: '65%',
    float: 'right',
  },
  [`& .MuiTypography-root`]: {
    textShadow: '2px 2px 40px black',
  },
}));

export default Gaming;
