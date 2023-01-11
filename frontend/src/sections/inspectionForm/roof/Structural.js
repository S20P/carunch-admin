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

export default function Structural(props) {
  const { rbNoevent1, rbRepaired2, rbReplaced2, rbModified2, rbExistingDamage2 } = props.getValues();

  return (
    <>
      <Grid container columnSpacing={4}>
        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>1. Roof Bow/Braces</LabelStyle>
          <RHFCheckbox name="rbNoevent1" label="No Prior Events Observed" />
          {!rbNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="rbRepaired2" label="Repaired" />
                {rbRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rbRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rbReplaced2" label="Replaced" />
                {rbReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rbReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rbModified2" label="Modified" />
                {rbModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rbModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rbExistingDamage2" label="Existing Damage" />
                {rbExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rbExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
                {/* Major (Dents less than 1", Ding's less than 1", excluding hail damage) */}
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
            props.setSubCurrentTabRoof('nonstructural');
          }}
        >
          Prev Tab
        </LoadingButton>
        <LoadingButton
          variant="contained"
          onClick={() => {
            props.setMainCurrentTab('side');
            props.setSubCurrentTabSide('nonstructural');
          }}
        >
          Next Tab
        </LoadingButton>
      </Box>
    </>
  );
}
