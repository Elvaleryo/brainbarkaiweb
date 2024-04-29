import { styled } from '@mui/material/styles';
import { Grid, Typography} from '@mui/material';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';

const roadMapPhases = [
  {
    title: 'Phase 1: Foundation and Community Engagement',
    list: ['Enhanced Telegram Integration: Develop a signal bot with advanced filtering options, allowing users to receive customized alerts based on their trading preferences and risk tolerance.',
    'Community-Driven Token Distribution: Establish a tokenomics structure that rewards early adopters and active contributors directly through mechanisms such as participation incentives, referral programs, and early usage. This will include providing benefits such as reduced fees, voting rights on platform decisions, and access to exclusive AI models, fostering a strong initial user base and community engagement.'
    ]
  },
  {
    title: 'Phase 2: AI Model Development and Enhancement',
    list: [
      'Dynamic AI Learning Module: Implement continuous learning algorithms that adapt to new market conditions, with an emphasis on reducing prediction errors and enhancing reliability.',
      'Sentiment Analysis Integration: Develop a sophisticated sentiment analysis tool that evaluates market sentiment from various sources, including social media, news outlets, and forums, to inform prediction models.'
    ]
  },
  {
    title: 'Phase 3: Data Expansion and Diversification',
    list: [
      'Broaden Market Data Sources: Integrate with additional data sources, including decentralized finance (DeFi) platforms and other blockchains, to enrich the dataset and improve prediction accuracy.',
      'User Experience Optimization: Refine the user dashboard with interactive tools and visualizations that offer deeper insights into AI predictions and market trends.'
    ]
  },
  {
    title: 'Phase 4: Automated Trading and Expansion',
    list: [
      'Automated Trading Bot Launch: Release an auto-trading bot that executes trades based on AI predictions, with customizable parameters for user-defined strategies.',
      'Cross-Market Analysis Tools: Develop tools for analyzing correlations between cryptocurrencies and other asset classes (e.g., stocks, commodities) to offer a holistic view of the market.'
    ]
  },
  {
    title: 'Phase 5: Innovation and New Market Penetration',
    list: [
      'Predictive Analytics for NFT and DeFi Spaces: Explore predictive models for emerging markets such as NFTs and DeFi, focusing on liquidity trends, project viability, and yield farming opportunities.',
      'Global Expansion: Localize the platform for key global markets, focusing on regulatory compliance and local market needs.'
    ]
  },
  {
    title: 'Phase 6: Open Innovation and Community Development',
    list: [
      'Open AI Model Collaboration: Invite the community to contribute to model development through a collaborative platform, rewarding contributions with tokens or recognition.',
      'Expand to New Industries: Utilize the developed AI model for applications beyond crypto, such as traditional finance, e-commerce, and supply chain management, to diversify revenue streams.'
    ]
  },
  {
    title: 'Phase 7: Sustainability and Scalability',
    list: [
      'Carbon-Neutral Trading Operations: Implement measures to offset the carbon footprint of trading operations, appealing to environmentally conscious investors.',
      'Scalability Enhancements: Upgrade infrastructure to ensure scalability, high availability, and low latency, accommodating an increasing number of users and transactions.'
    ]
  }
];

export const RoadMap = () => {
  return (
    <StyledGrid id="roadMap" container spacing={2} justifyContent="center">
      <Grid item xs={12} textAlign="center">
        <Typography variant="h4" sx={{ paddingBottom: '32px'}}>
          Road Map
        </Typography>
      </Grid>
      <Grid container item xs={8}  spacing={2}>
        {roadMapPhases.map((phase, index) => (
          <Grid className={classes.wrap} item xs={6}>
            <p className={classes.wrapBg}>{index + 1}</p>
            <div className={classes.wrapDesc}>
              <Typography variant="h6">
                {phase.title}
              </Typography>
              <ul>
                {phase.list.map((item) => (
                  <li>
                    <Typography variant="subtitle1" sx={{ color: '#9a99aa', paddingBottom: '24px'}}>
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
        ))}
      </Grid>
    </StyledGrid>
  );
};

const classes = generateUtilityClasses('RoadMap', ['wrap', 'wrapBg', 'wrapDesc']);

const StyledGrid = styled(Grid)(({ theme }) => ({
  minHeight: '100vh',
  position: 'relative',
  backgroundColor: 'rgb(0,0,41)',
  background: 'linear-gradient(180deg, rgba(7,7,96,1) 0%, rgba(0,0,41,1) 44%)',
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
}));

export default RoadMap;
