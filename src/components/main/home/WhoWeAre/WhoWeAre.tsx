import { styled } from '@mui/material/styles';
import {Button, Grid, Typography} from '@mui/material';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';
// @ts-ignore
import whowe from 'assets/images/whowe.png';

export const WhoWeAre = () => {
  return (
    <StyledGrid id="whoWeAre" container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={6}>
        <img className={classes.img} src={whowe} alt="who we are" />
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5" sx={{ paddingBottom: '16px'}}>
          Who we are?
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#9a99aa', paddingBottom: '24px'}}>
          Floor AI is a cutting-edge blend of AI and cryptocurrency expertise, designed to make crypto trading accessible and profitable for everyone. Our team, consisting of experts in blockchain, data science, and finance, is committed to delivering accurate, AI-powered crypto price predictions, enabling both novice and experienced traders to navigate the market with confidence.        </Typography>
        <Button variant="contained">
          Launch App
        </Button>
      </Grid>
    </StyledGrid>
  );
};

const classes = generateUtilityClasses('WhoWeAre', ['img']);

const StyledGrid = styled(Grid)(({ theme }) => ({
  minHeight: '100vh',
  position: 'relative',
  backgroundColor: 'rgb(0,0,41)',
  background: 'linear-gradient(180deg, rgba(0,0,41,1) 0%, rgba(7,7,96,1) 44%)',
  [`& .${classes.img}`]: {
    width: '88%',
  },
}));

export default WhoWeAre;
