import React from 'react';
import { styled } from '@mui/material/styles';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';
import Header from 'components/common/Header';
import Footer from '../../components/common/Footer';

interface Props {
  children: React.ReactNode;
}

export const RootPage: React.FC<Props> = ({ children }) => {
  return (
    <StyledRoot>
      <div className={classes.app}>
        <Header />
        <main className={classes.main}>{children}</main>
        <Footer />
      </div>
    </StyledRoot>
  );
};

const classes = generateUtilityClasses('RootPage', ['drawer', 'app', 'main']);

const StyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  [`& .${classes.app}`]: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.primary.dark,
    // padding: theme.spacing(0, 10),
  },
  [`& .${classes.main}`]: {
    flex: 1,
    [`&.main-transparent-bg`]: {
      background: 'transparent',
    },
  },
}));

export default RootPage;
