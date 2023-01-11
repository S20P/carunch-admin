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
    rrNoevent1,
    rrRepaired2,
    rrReplaced2,
    rrModified2,
    rrExistingDamage2,
    rlNoevent1,
    rlRepaired2,
    rlReplaced2,
    rlModified2,
    rlExistingDamage2,
    qprNoevent1,
    qprRepaired2,
    qprReplaced2,
    qprModified2,
    qprExistingDamage2,
    qplNoevent1,
    qplRepaired2,
    qplReplaced2,
    qplModified2,
    qplExistingDamage2,
    iqprNoevent1,
    iqprRepaired2,
    iqprReplaced2,
    iqprModified2,
    iqprExistingDamage2,
    iqplNoevent1,
    iqplRepaired2,
    iqplReplaced2,
    iqplModified2,
    iqplExistingDamage2,
    bprNoevent1,
    bprRepaired2,
    bprReplaced2,
    bprModified2,
    bprExistingDamage2,
    bplNoevent1,
    bplRepaired2,
    bplReplaced2,
    bplModified2,
    bplExistingDamage2,
    fpNoevent1,
    fpRepaired2,
    fpReplaced2,
    fpModified2,
    fpExistingDamage2,
    uvNoevent1,
    uvRepaired2,
    uvReplaced2,
    uvModified2,
    uvExistingDamage2,
  } = props.getValues();

  return (
    <>
      <Grid container columnSpacing={4}>
        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>1. Rails Right</LabelStyle>
          <RHFCheckbox name="rrNoevent1" label="No Prior Events Observed" />
          {!rrNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="rrRepaired2" label="Repaired" />
                {rrRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rrRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rrReplaced2" label="Replaced" />
                {rrReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rrReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rrModified2" label="Modified" />
                {rrModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rrModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rrExistingDamage2" label="Existing Damage" />
                {rrExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rrExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
                {/* Minor (tow hooks, tow marks) */}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>2. Rails Left</LabelStyle>
          <RHFCheckbox name="rlNoevent1" label="No Prior Events Observed" />
          {!rlNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="rlRepaired2" label="Repaired" />
                {rlRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rlRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rlReplaced2" label="Replaced" />
                {rlReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rlReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rlModified2" label="Modified" />
                {rlModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rlModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="rlExistingDamage2" label="Existing Damage" />
                {rlExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="rlExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
                {/* Minor (tow hooks, tow marks) */}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>3. Quarter Pane Right</LabelStyle>
          <RHFCheckbox name="qprNoevent1" label="No Prior Events Observed" />
          {!qprNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="qprRepaired2" label="Repaired" />
                {qprRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="qprRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="qprReplaced2" label="Replaced" />
                {qprReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="qprReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="qprModified2" label="Modified" />
                {qprModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="qprModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="qprExistingDamage2" label="Existing Damage" />
                {qprExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="qprExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>4. Quarter Pane Left</LabelStyle>
          <RHFCheckbox name="qplNoevent1" label="No Prior Events Observed" />
          {!qplNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="qplRepaired2" label="Repaired" />
                {qplRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="qplRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="qplReplaced2" label="Replaced" />
                {qplReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="qplReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="qplModified2" label="Modified" />
                {qplModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="qplModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="qplExistingDamage2" label="Existing Damage" />
                {qplExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="qplExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>
            5. Inner Quarter Panel (includes Inner wheelhouse panel, Strut Tower, Wheelhouse extension lower) Right
          </LabelStyle>
          <RHFCheckbox name="iqprNoevent1" label="No Prior Events Observed" />
          {!iqprNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="iqprRepaired2" label="Repaired" />
                {iqprRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="iqprRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="iqprReplaced2" label="Replaced" />
                {iqprReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="iqprReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="iqprModified2" label="Modified" />
                {iqprModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="iqprModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="iqprExistingDamage2" label="Existing Damage" />
                {iqprExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="iqprExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>
            6. Inner Quarter Panel (includes Inner wheelhouse panel, Strut Tower, Wheelhouse extension lower) Left
          </LabelStyle>
          <RHFCheckbox name="iqplNoevent1" label="No Prior Events Observed" />
          {!iqplNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="iqplRepaired2" label="Repaired" />
                {iqplRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="iqplRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="iqplReplaced2" label="Replaced" />
                {iqplReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="iqplReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="iqplModified2" label="Modified" />
                {iqplModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="iqplModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="iqplExistingDamage2" label="Existing Damage" />
                {iqplExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="iqplExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>7. Body Panel Right</LabelStyle>
          <RHFCheckbox name="bprNoevent1" label="No Prior Events Observed" />
          {!bprNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="bprRepaired2" label="Repaired" />
                {bprRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="bprRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="bprReplaced2" label="Replaced" />
                {bprReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="bprReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="bprModified2" label="Modified" />
                {bprModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="bprModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="bprExistingDamage2" label="Existing Damage" />
                {bprExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="bprExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>8. Body Panel Left</LabelStyle>
          <RHFCheckbox name="bplNoevent1" label="No Prior Events Observed" />
          {!bplNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="bplRepaired2" label="Repaired" />
                {bplRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="bplRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="bplReplaced2" label="Replaced" />
                {bplReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="bplReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="bplModified2" label="Modified" />
                {bplModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="bplModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="bplExistingDamage2" label="Existing Damage" />
                {bplExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="bplExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>9. Floor Pan</LabelStyle>
          <RHFCheckbox name="fpNoevent1" label="No Prior Events Observed" />
          {!fpNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="fpRepaired2" label="Repaired" />
                {fpRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="fpRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="fpReplaced2" label="Replaced" />
                {fpReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="fpReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="fpModified2" label="Modified" />
                {fpModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="fpModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="fpExistingDamage2" label="Existing Damage" />
                {fpExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="fpExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>10. Undercarriage of Vehicle</LabelStyle>
          <RHFCheckbox name="uvNoevent1" label="No Prior Events Observed" />
          {!uvNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="uvRepaired2" label="Repaired" />
                {uvRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="uvRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="uvReplaced2" label="Replaced" />
                {uvReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="uvReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="uvModified2" label="Modified" />
                {uvModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="uvModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="uvExistingDamage2" label="Existing Damage" />
                {uvExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="uvExistingDamage2Value" options={['Minor', 'Major']} />
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
            props.setSubCurrentTabRear('nonstructural');
          }}
        >
          Prev Tab
        </LoadingButton>
        <LoadingButton
          variant="contained"
          onClick={() => {
            props.setMainCurrentTab('frame');
            props.setSubCurrentTabFrame('structural');
          }}
        >
          Next Tab
        </LoadingButton>
      </Box>
    </>
  );
}
