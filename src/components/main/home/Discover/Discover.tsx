import { styled } from '@mui/material/styles';
import {Button, Grid, Typography} from '@mui/material';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';

export const Discover = () => {
  return (
    <StyledGrid id="Discover" container justifyContent="center" alignItems="center" flexDirection="column">
      <Grid item xs={10} md={5}>
        <Typography variant="h4" sx={{ paddingBottom: '16px'}}>
          Discover BrainBarkAI,
        </Typography>
        <Typography variant="subtitle1" sx={{ paddingBottom: '24px'}}>
          Telegram-based AI agent that merges the excitement of gaming with the AI friendship of a virtual pet. This is chatbot designed to provide psychological support, promote a healthy lifestyle, and offer a unique and engaging experience in the world of digital companions.
        </Typography>
        <Button variant="contained" target="_blank" href="https://t.me/BrainBarkAiBot">
          Chat Now
        </Button>
      </Grid>
      {/*<Grid item xs={4}>*/}
      {/*  <Typography variant="h5" sx={{ paddingBottom: '16px'}}>*/}
      {/*    Discover BrainBarkAI,*/}
      {/*  </Typography>*/}
      {/*  <Typography variant="subtitle1" sx={{ color: '#9a99aa', paddingBottom: '24px'}}>*/}
      {/*    Floor AI simplifies the complex world of cryptocurrency trading with its advanced AI algorithms. First, users input their trading preferences and risk tolerance. Our AI then analyzes historical data and current market trends to generate personalized, real-time price predictions. These insights are delivered directly to the user's dashboard, allowing for informed decision-making and strategic trading. With Floor AI, users stay one step ahead in the fast-moving crypto market, optimizing their trading strategies for maximum profitability.        </Typography>*/}
      {/*  <Button variant="contained">*/}
      {/*    Launch App*/}
      {/*  </Button>*/}
      {/*</Grid>*/}

    </StyledGrid>
  );
};

const classes = generateUtilityClasses('Discover', ['img']);

const StyledGrid = styled(Grid)(() => ({
  minHeight: '100vh',
  position: 'relative',
  backgroundColor: 'rgb(0,0,41)',
  background: 'linear-gradient(180deg, rgba(0, 0, 41, 1) 0%, rgb(9 9 123) 44%)',
  textAlign: 'center',
  [`& .${classes.img}`]: {
    width: '88%',
  },
}));

export default Discover;
