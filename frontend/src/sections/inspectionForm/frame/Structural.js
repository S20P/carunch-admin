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
  const {
    fNoevent1,
    fRepaired2,
    fReplaced2,
    fModified2,
    fExistingDamage2,
    fsrrNoevent1,
    fsrrRepaired2,
    fsrrReplaced2,
    fsrrModified2,
    fsrrExistingDamage2,
    fsrlNoevent1,
    fsrlRepaired2,
    fsrlReplaced2,
    fsrlModified2,
    fsrlExistingDamage2,
    rscmNoevent1,
    rscmRepaired2,
    rscmReplaced2,
    rscmModified2,
    rscmExistingDamage2,
    rspNoevent1,
    rspRepaired2,
    rspReplaced2,
    rspModified2,
    rspExistingDamage2,
    rfrNoevent1,
    rfrRepaired2,
    rfrReplaced2,
    rfrModified2,
    rfrExistingDamage2,
    rcmNoevent1,
    rcmRepaired2,
    rcmReplaced2,
    rcmModified2,
    rcmExistingDamage2,
  } = props.getValues();

  return (
    <>
      <Grid container columnSpacing={4}>
        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>1. Frame</LabelStyle>
          <RHFCheckbox name="fNoevent1" label="No Prior Events Observed" />
          {!fNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="fRepaired2" label="Repaired" />
                {fRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="fRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="fReplaced2" label="Replaced" />
                {fReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="fReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="fModified2" label="Modified" />
                {fModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="fModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="fExistingDamage2" label="Existing Damage" />
                {fExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="fExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
                {/*  Major (TRUCKS Repaired/Replaced): */}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>2. Frame Side Rail Right</LabelStyle>
          <RHFCheckbox name="fsrrNoevent1" label="No Prior Events Observed" />
          {!fsrrNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="fsrrRepaired2" label="Repaired" />
                {fsrrRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="fsrrRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="fsrrReplaced2" label="Replaced" />
                {fsrrReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="fsrrReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="fsrrModified2" label="Modified" />
                {fsrrModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="fsrrModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="fsrrExistingDamage2" label="Existing Damage" />
                {fsrrExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="fsrrExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>3. Frame Side Rail Left</LabelStyle>
          <RHFCheckbox name="fsrlNoevent1" label="No Prior Events Observed" />
          {!fsrlNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="fsrlRepaired2" label="Repaired" />
                {fsrlRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="fsrlRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="fsrlReplaced2" label="Replaced" />
                {fsrlReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="fsrlReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="fsrlModified2" label="Modified" />
                {fsrlModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="fsrlModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="fsrlExistingDamage2" label="Existing Damage" />
                {fsrlExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="fsrlExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>4. Rear Suspension Cross Member</LabelStyle>
          <RHFCheckbox name="rscmNoevent1" label="No Prior Events Observed" />
          {!rscmNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="rscmRepaired2" label="Repaired" />
                {rscmRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rscmRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rscmReplaced2" label="Replaced" />
                {rscmReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rscmReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rscmModified2" label="Modified" />
                {rscmModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rscmModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rscmExistingDamage2" label="Existing Damage" />
                {rscmExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rscmExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>5. Rear Spring Pod</LabelStyle>
          <RHFCheckbox name="rspNoevent1" label="No Prior Events Observed" />
          {!rspNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="rspRepaired2" label="Repaired" />
                {rspRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rspRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rspReplaced2" label="Replaced" />
                {rspReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rspReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rspModified2" label="Modified" />
                {rspModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rspModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rspExistingDamage2" label="Existing Damage" />
                {rspExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rspExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>6. Rear Frame Rail</LabelStyle>
          <RHFCheckbox name="rfrNoevent1" label="No Prior Events Observed" />
          {!rfrNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="rfrRepaired2" label="Repaired" />
                {rfrRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rfrRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rfrReplaced2" label="Replaced" />
                {rfrReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rfrReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rfrModified2" label="Modified" />
                {rfrModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rfrModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rfrExistingDamage2" label="Existing Damage" />
                {rfrExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rfrExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>7. Rear Cross Member</LabelStyle>
          <RHFCheckbox name="rcmNoevent1" label="No Prior Events Observed" />
          {!rcmNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="rcmRepaired2" label="Repaired" />
                {rcmRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rcmRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rcmReplaced2" label="Replaced" />
                {rcmReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rcmReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rcmModified2" label="Modified" />
                {rcmModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rcmModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rcmExistingDamage2" label="Existing Damage" />
                {rcmExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rcmExistingDamage2Value" options={['Minor', 'Major']} />
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
            props.setMainCurrentTab('rear');
            props.setSubCurrentTabRear('structural');
          }}
        >
          Prev Tab
        </LoadingButton>
        <LoadingButton type="submit" variant="contained" loading={props.isSubmitting}>
          Submit Form
        </LoadingButton>
      </Box>
    </>
  );
}
