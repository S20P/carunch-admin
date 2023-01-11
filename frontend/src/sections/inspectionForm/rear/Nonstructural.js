import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { RHFRadioGroup, RHFCheckbox } from '../../../components/hook-form';

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

export default function Nonstructural(props) {
  const {
    rdrNoevent1,
    rdrRepaired2,
    rdrReplaced2,
    rdrModified2,
    rdrExistingDamage2,
    rdlNoevent1,
    rdlRepaired2,
    rdlReplaced2,
    rdlModified2,
    rdlExistingDamage2,
  } = props.getValues();

  return (
    <>
      <Grid container columnSpacing={4}>
        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>1. Doors Right</LabelStyle>
          <RHFCheckbox name="rdrNoevent1" label="No Prior Events Observed" />
          {!rdrNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="rdrRepaired2" label="Repaired" />
                {rdrRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rdrRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rdrReplaced2" label="Replaced" />
                {rdrReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rdrReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rdrModified2" label="Modified" />
                {rdrModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rdrModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rdrExistingDamage2" label="Existing Damage" />
                {rdrExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rdrExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>2. Doors Left</LabelStyle>
          <RHFCheckbox name="rdlNoevent1" label="No Prior Events Observed" />
          {!rdlNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="rdlRepaired2" label="Repaired" />
                {rdlRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rdlRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rdlReplaced2" label="Replaced" />
                {rdlReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rdlReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rdlModified2" label="Modified" />
                {rdlModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rdlModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rdlExistingDamage2" label="Existing Damage" />
                {rdlExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rdlExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <LoadingButton
          type="button"
          variant="contained"
          onClick={() => {
            props.setMainCurrentTab('side');
            props.setSubCurrentTabSide('nonstructural');
          }}
        >
          Prev Tab
        </LoadingButton>
        <LoadingButton
          variant="contained"
          onClick={() => {
            props.setSubCurrentTabRear('structural');
          }}
        >
          Next Tab
        </LoadingButton>
      </Box>
    </>
  );
}
