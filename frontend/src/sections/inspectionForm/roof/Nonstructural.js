import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { RHFRadioGroup, RHFCheckbox, RHFTextField } from '../../../components/hook-form';

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

export default function Nonstructural(props) {
  const { /* dqty, */ dHailDamage2, pdrExists2 } = props.getValues();

  return (
    <>
      <Grid container columnSpacing={4}>
        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>1. Dent(s)</LabelStyle>
          <RHFTextField type="number" name="dqty" label="Quantity" margin="dense" fullWidth={false} />
          <Box>
            <RHFCheckbox name="dHailDamage2" label="Hail damage" />
            {dHailDamage2 ? (
              <RHFRadioGroup sx={{ ml: 4 }} name="dHailDamage2Value" options={['Minor', 'Major']} />
            ) : null}
          </Box>
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>2. PDR (paintless dent removal-cosmetic)</LabelStyle>
          <Box>
            <RHFCheckbox name="pdrExists2" label="Exists" />
            {pdrExists2 ? <RHFRadioGroup sx={{ ml: 4 }} name="pdrExists2Value" options={['Minor', 'Major']} /> : null}
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <LoadingButton
          type="button"
          variant="contained"
          onClick={() => {
            props.setMainCurrentTab('front');
            props.setSubCurrentTabFront('typical');
          }}
        >
          Prev Tab
        </LoadingButton>
        <LoadingButton
          variant="contained"
          onClick={() => {
            props.setSubCurrentTabRoof('structural');
          }}
        >
          Next Tab
        </LoadingButton>
      </Box>
    </>
  );
}
