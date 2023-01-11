// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { OrderReportForm } from '../sections/orderReport';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

const RootStyleDashboard = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(1),
  },
}));

export default function OrderReport(props) {
  const content = (
    <Container sx={props.fromDashboard ? {} : { mt: 2, mb: 2 }}>
      <Typography variant="h3" sx={{ mb: 5 }}>
        Car Evaluation Inquiry Form
      </Typography>

      <Grid container spacing={props.fromDashboard ? 0 : 10}>
        <Grid item xs={12} md={props.fromDashboard ? 12 : 6}>
          <OrderReportForm fromDashboard={props.fromDashboard} />
        </Grid>
      </Grid>
    </Container>
  );

  return (
    <Page title="OrderReport">
      {props.fromDashboard ? <RootStyleDashboard>{content}</RootStyleDashboard> : <RootStyle>{content}</RootStyle>}
    </Page>
  );
}
