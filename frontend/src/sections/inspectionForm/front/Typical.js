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

export default function Typical(props) {
  const {
    spNoevent1,
    spRepaired2,
    spReplaced2,
    spModified2,
    spExistingDamage2,
    mcmNoevent1,
    mcmRepaired2,
    mcmReplaced2,
    mcmModified2,
    mcmExistingDamage2,
    tbNoevent1,
    tbRepaired2,
    tbReplaced2,
    tbModified2,
    tbExistingDamage2,
    tsmNoevent1,
    tsmRepaired2,
    tsmReplaced2,
    tsmModified2,
    tsmExistingDamage2,
  } = props.getValues();

  return (
    <>
      <Grid container columnSpacing={4}>
        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>1. Spring Pod (Trucks Only)</LabelStyle>
          <RHFCheckbox name="spNoevent1" label="No Prior Events Observed" />
          {!spNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="spRepaired2" label="Repaired" />
                {spRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spReplaced2" label="Replaced" />
                {spReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spModified2" label="Modified" />
                {spModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spExistingDamage2" label="Existing Damage" />
                {spExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>2. Main Cross Member (Trucks Only)</LabelStyle>
          <RHFCheckbox name="mcmNoevent1" label="No Prior Events Observed" />
          {!mcmNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="mcmRepaired2" label="Repaired" />
                {mcmRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="mcmRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="mcmReplaced2" label="Replaced" />
                {mcmReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="mcmReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="mcmModified2" label="Modified" />
                {mcmModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="mcmModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="mcmExistingDamage2" label="Existing Damage" />
                {mcmExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="mcmExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>3. Torque box (Trucks Only)</LabelStyle>
          <RHFCheckbox name="tbNoevent1" label="No Prior Events Observed" />
          {!tbNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="tbRepaired2" label="Repaired" />
                {tbRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="tbRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="tbReplaced2" label="Replaced" />
                {tbReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="tbReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="tbModified2" label="Modified" />
                {tbModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="tbModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="tbExistingDamage2" label="Existing Damage" />
                {tbExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="tbExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>4. Transmission Support member (Trucks Only)</LabelStyle>
          <RHFCheckbox name="tsmNoevent1" label="No Prior Events Observed" />
          {!tsmNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="tsmRepaired2" label="Repaired" />
                {tsmRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="tsmRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="tsmReplaced2" label="Replaced" />
                {tsmReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="tsmReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="tsmModified2" label="Modified" />
                {tsmModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="tsmModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="tsmExistingDamage2" label="Existing Damage" />
                {tsmExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="tsmExistingDamage2Value" options={['Minor', 'Major']} />
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
            props.setSubCurrentTabFront('structural');
          }}
        >
          Prev Tab
        </LoadingButton>
        <LoadingButton
          variant="contained"
          onClick={() => {
            props.setMainCurrentTab('roof');
            props.setSubCurrentTabRoof('nonstructural');
          }}
        >
          Next Tab
        </LoadingButton>
      </Box>
    </>
  );
}
