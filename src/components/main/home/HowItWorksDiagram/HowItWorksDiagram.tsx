import { styled } from '@mui/material/styles';
import { Grid, Typography} from '@mui/material';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';
import { clsx } from 'clsx';

const descriptions = [
  {
    title: 'Mint Your NFT Dog (100 BBI)',
    desc: 'Purchase your unique NFT dog using 100 BBI tokens.'
  },
  {
    title: 'Chat with Your NFT Dog\n',
    desc: 'Interact with your NFT dog through the chatbot to build a relationship and earn rewards.'
  },
  {
    title: 'Your NFT Dog Needs Care',
    desc: 'Your NFT dog requires food and drink to stay healthy and happy.'
  },
  {
    title: 'Buy Supplies from the Shop',
    desc: 'Use your earned rewards or your own coins to purchase items for your NFT dog from the shop. '
  },
  {
    title: 'Level Up Your NFT Dog',
    desc: 'Providing more items and care will help your NFT dog level up.'
  },
  {
    title: 'Higher Levels = Bigger Rewards',
    desc: 'As your NFT dog reaches higher levels, you will receive bigger and better rewards.'
  }
];

export const HowItWorksDiagram = () => {
  return (
    <StyledGrid container spacing={2} justifyContent="center">
      <Grid item xs={12} textAlign="center">
        <Typography variant="h4" sx={{ paddingBottom: '56px'}}>
          How It Works
        </Typography>
      </Grid>
      <Grid container item xs={10} md={8} spacing={2} className={classes.descItemsWrap}>
        {descriptions.map((item, index) => (
          <>
            <Grid container item xs={6} spacing={2}>
              {index % 2 === 1 && <div className={clsx(classes.descItem, classes.descItemRight)}>
                <Typography variant="h6">
                  {item.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#9a99aa', paddingBottom: '24px'}}>
                  {item.desc}
                </Typography>
              </div>}
            </Grid>
            <Grid container item xs={6} spacing={2}>
              {index % 2 === 0 && <div className={classes.descItem}>
                <Typography variant="h6">
                  {item.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#9a99aa', paddingBottom: '24px'}}>
                  {item.desc}
                </Typography>
              </div>}
            </Grid>
          </>
        ))}

      </Grid>
    </StyledGrid>
  );
};

const classes = generateUtilityClasses('HowItWorksDiagram', ['wrap', 'wrapBg', 'wrapDesc', 'descItemsWrap', 'descItem', 'descItemRight']);

const StyledGrid = styled(Grid)(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(10, 0, 20),
  position: 'relative',
  backgroundColor: 'rgb(0,0,41)',
  background: 'linear-gradient(180deg, rgb(9 9 123) 0%, rgba(0, 0, 41, 1) 44%)',
  [`& .${classes.wrap}`]: {
    position: 'relative',
  },
  [`& .${classes.wrapDesc}`]: {
    position: 'relative',
    zIndex: 2,
  },
  [`& .${classes.wrapBg}`]: {
    position: 'absolute',
    margin: 0,
    top: '40px',
    left: '30px',
    fontSize: 120,
    fontWeight: 'bold',
    opacity: '.2',
    zIndex: 2,
  },
  [`& .${classes.descItemsWrap}`]: {
    position: 'relative',
    [`&:after`]: {
      content: '""',
      position: 'absolute',
      left: '50%',
      top: '0',
      width: '1px',
      height: '100%',
      backgroundColor: 'rgb(255,255,255)',
      background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 50%,  rgba(255,255,255,1) 90%, rgba(255,255,255,0) 100%)',
    },
  },
  [`& .${classes.descItem}`]: {
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(10),
    position: 'relative',
    [theme.breakpoints.down('mobile')]: {
      height: 'auto',
      padding: theme.spacing(3, 2),
    },
    [`&:after`]: {
      content: '""',
      position: 'absolute',
      left: '-8px',
      top: '45%',
      width: '8px',
      height: '8px',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgb(255,255,255)',
    },
    [`&.${classes.descItemRight}`]: {
      [`&:after`]: {
        right: '0',
        left: 'auto',
      },
    },
  },
}));

export default HowItWorksDiagram;
