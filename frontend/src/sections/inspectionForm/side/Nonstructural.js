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
    roparNoevent1,
    roparRepaired2,
    roparReplaced2,
    roparModified2,
    roparExistingDamage2,
    ropalNoevent1,
    ropalRepaired2,
    ropalReplaced2,
    ropalModified2,
    ropalExistingDamage2,
    riparNoevent1,
    riparRepaired2,
    riparReplaced2,
    riparModified2,
    riparExistingDamage2,
    riparTear2,
    ripalNoevent1,
    ripalRepaired2,
    ripalReplaced2,
    ripalModified2,
    ripalExistingDamage2,
    ripalTear2,
    qNoevent1,
    qRepaired2,
    qReplaced2,
    qModified2,
    qExistingDamage2,
    cNoevent1,
    cRepaired2,
    cReplaced2,
    cModified2,
    cExistingDamage2,
    spnNoevent1,
    spnRepaired2,
    spnReplaced2,
    spnModified2,
    spnExistingDamage2,
    ualNoevent1,
    ualRepaired2,
    ualReplaced2,
    ualModified2,
    ualExistingDamage2,
    uarNoevent1,
    uarRepaired2,
    uarReplaced2,
    uarModified2,
    uarExistingDamage2,
  } = props.getValues();

  return (
    <>
      <Grid container columnSpacing={4}>
        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>1. Rocker (outer) Panel Assembly Right</LabelStyle>
          <RHFCheckbox name="roparNoevent1" label="No Prior Events Observed" />
          {!roparNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="roparRepaired2" label="Repaired" />
                {roparRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="roparRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="roparReplaced2" label="Replaced" />
                {roparReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="roparReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="roparModified2" label="Modified" />
                {roparModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="roparModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="roparExistingDamage2" label="Existing Damage" />
                {roparExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="roparExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>2. Rocker (outer) Panel Assembly Left</LabelStyle>
          <RHFCheckbox name="ropalNoevent1" label="No Prior Events Observed" />
          {!ropalNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="ropalRepaired2" label="Repaired" />
                {ropalRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="ropalRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="ropalReplaced2" label="Replaced" />
                {ropalReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="ropalReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="ropalModified2" label="Modified" />
                {ropalModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="ropalModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="ropalExistingDamage2" label="Existing Damage" />
                {ropalExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="ropalExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>3. Rocker (inner) Panel Assembly Right</LabelStyle>
          <RHFCheckbox name="riparNoevent1" label="No Prior Events Observed" />
          {!riparNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="riparRepaired2" label="Repaired" />
                {riparRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="riparRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="riparReplaced2" label="Replaced" />
                {riparReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="riparReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="riparModified2" label="Modified" />
                {riparModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="riparModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="riparExistingDamage2" label="Existing Damage" />
                {riparExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="riparExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="riparTear2" label="Tear(s)" />
                {riparTear2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="riparTear2Value" options={['Minor', 'Major']} />
                ) : null}
                {/* Minor (< 1 inch) Major (>1 inch) */}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>4. Rocker (inner) Panel Assembly Left</LabelStyle>
          <RHFCheckbox name="ripalNoevent1" label="No Prior Events Observed" />
          {!ripalNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="ripalRepaired2" label="Repaired" />
                {ripalRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="ripalRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="ripalReplaced2" label="Replaced" />
                {ripalReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="ripalReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="ripalModified2" label="Modified" />
                {ripalModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="ripalModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="ripalExistingDamage2" label="Existing Damage" />
                {ripalExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="ripalExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="ripalTear2" label="Tear(s)" />
                {ripalTear2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="ripalTear2Value" options={['Minor', 'Major']} />
                ) : null}
                {/* Minor (< 1 inch) Major (>1 inch) */}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>5. Quarter (Trucks Only)</LabelStyle>
          <RHFCheckbox name="qNoevent1" label="No Prior Events Observed" />
          {!qNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="qRepaired2" label="Repaired" />
                {qRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="qRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="qReplaced2" label="Replaced" />
                {qReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="qReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="qModified2" label="Modified" />
                {qModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="qModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="qExistingDamage2" label="Existing Damage" />
                {qExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="qExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>6. Cab (Trucks Only)</LabelStyle>
          <RHFCheckbox name="cNoevent1" label="No Prior Events Observed" />
          {!cNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="cRepaired2" label="Repaired" />
                {cRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="cRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="cReplaced2" label="Replaced" />
                {cReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="cReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="cModified2" label="Modified" />
                {cModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="cModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="cExistingDamage2" label="Existing Damage" />
                {cExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="cExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>7. Side Panel (Trucks Only)</LabelStyle>
          <RHFCheckbox name="spnNoevent1" label="No Prior Events Observed" />
          {!spnNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="spnRepaired2" label="Repaired" />
                {spnRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spnRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spnReplaced2" label="Replaced" />
                {spnReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spnReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spnModified2" label="Modified" />
                {spnModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spnModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spnExistingDamage2" label="Existing Damage" />
                {spnExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spnExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>8. Uniside Assembly Left (Trucks Only)</LabelStyle>
          <RHFCheckbox name="ualNoevent1" label="No Prior Events Observed" />
          {!ualNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="ualRepaired2" label="Repaired" />
                {ualRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="ualRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="ualReplaced2" label="Replaced" />
                {ualReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="ualReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="ualModified2" label="Modified" />
                {ualModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="ualModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="ualExistingDamage2" label="Existing Damage" />
                {ualExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="ualExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>9. Uniside Assembly Right (Trucks Only)</LabelStyle>
          <RHFCheckbox name="uarNoevent1" label="No Prior Events Observed" />
          {!uarNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="uarRepaired2" label="Repaired" />
                {uarRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="uarRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="uarReplaced2" label="Replaced" />
                {uarReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="uarReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="uarModified2" label="Modified" />
                {uarModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="uarModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="uarExistingDamage2" label="Existing Damage" />
                {uarExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="uarExistingDamage2Value" options={['Minor', 'Major']} />
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
            props.setMainCurrentTab('roof');
            props.setSubCurrentTabRoof('structural');
          }}
        >
          Prev Tab
        </LoadingButton>
        <LoadingButton
          variant="contained"
          onClick={() => {
            props.setMainCurrentTab('rear');
            props.setSubCurrentTabRear('nonstructural');
          }}
        >
          Next Tab
        </LoadingButton>
      </Box>
    </>
  );
}
