import { styled } from '@mui/material/styles';
import {Button, Grid, Typography} from '@mui/material';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';
// @ts-ignore
import bgHow from 'assets/images/bg-how.jpg';
// @ts-ignore
import screenHow from 'assets/images/screen-how.png';

export const HowItWorks = () => {
  return (
    <StyledGrid id="howItWorks" container justifyContent="center" alignItems="center">
      <Grid item xs={4}>
        <Typography variant="h4" sx={{ paddingBottom: '16px'}}>
          Personalized NFT Dog
        </Typography>
        <Typography variant="subtitle1" sx={{ paddingBottom: '24px'}}>
          Upon your first interaction, BrainBarkAI creates a personal wallet for you and generates a unique NFT dog based on your favorite emojis. This digital pet is not just an avatar; it's a reflection of your personality and preferences..
        </Typography>
        <Typography variant="h4" sx={{ paddingBottom: '16px'}}>
          Tamagotchi-Style Care
        </Typography>
        <Typography variant="subtitle1" sx={{ paddingBottom: '24px'}}>
          Just like the classic Tamagotchi, your NFT dog requires attention and care. Engage with it, complete tasks, and ensure it stays happy and healthy.
        </Typography>
        <Button variant="contained" size="large" target="_blank" href="https://t.me/BrainBarkAiBot">
          Chat Now
        </Button>
      </Grid>
      <Grid item xs={5}>
        <img src={screenHow} className={classes.screen} />
      </Grid>

    </StyledGrid>
  );
};

const classes = generateUtilityClasses('HowItWorks', ['screen']);

const StyledGrid = styled(Grid)(() => ({
  minHeight: '100vh',
  position: 'relative',
  backgroundImage: `url(${bgHow})`,
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

export default HowItWorks;
