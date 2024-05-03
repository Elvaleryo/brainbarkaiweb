import { Grid, Typography } from '@mui/material';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';
import { styled } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
// @ts-ignore
import logo from 'assets/images/logo.png';

const Footer = () => {
  return (
    <StyledGrid container alignItems="center" justifyContent="space-between">
      <Grid item xs={11} className={classes.logoWrap}>
        <img className={classes.logo} src={logo} />
        <Typography variant="subtitle1" className={classes.text}>
          © 2024 BrainBarkAI. All rights reserved.
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <a target="_blank" href="https://twitter.com/brainbarkai">
          <TwitterIcon sx={{fill: '#fff'}} />
        </a>
      </Grid>
    </StyledGrid>
  );
};

const classes = generateUtilityClasses('Footer', ['text', 'logo', 'logoWrap']);

const StyledGrid = styled(Grid)(({ theme }) => ({
  height: '80px',
  lineHeight: 0,
  padding: theme.spacing(0, 10),
  [theme.breakpoints.down('mobile')]: {
    padding: theme.spacing(0, 2),
  },
  '& a': {
    textDecoration: 'none',
  },
  [`& .${classes.logo}`]: {
    width: 25,
    height: 25,
    marginRight: theme.spacing(1),
  },
  [`& .${classes.logoWrap}`]: {
    display: 'flex',
  },
  [`& .${classes.text}`]: {
    color: theme.palette.text.secondary,
  },
}));

export default Footer;
