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
    frrNoevent1,
    frrRepaired2,
    frrReplaced2,
    frrModified2,
    frrExistingDamage2,
    frlNoevent1,
    frlRepaired2,
    frlReplaced2,
    frlModified2,
    frlExistingDamage2,
    aarNoevent1,
    aarRepaired2,
    aarReplaced2,
    aarModified2,
    aarExistingDamage2,
    aalNoevent1,
    aalRepaired2,
    aalReplaced2,
    aalModified2,
    aalExistingDamage2,
    staNoevent1,
    staRepaired2,
    staReplaced2,
    staModified2,
    staExistingDamage2,
    cpNoevent1,
    cpRepaired2,
    cpReplaced2,
    cpModified2,
    cpExistingDamage2,
    cmrNoevent1,
    cmrRepaired2,
    cmrReplaced2,
    cmrModified2,
    cmrExistingDamage2,
    cmlNoevent1,
    cmlRepaired2,
    cmlReplaced2,
    cmlModified2,
    cmlExistingDamage2,
    sparNoevent1,
    sparRepaired2,
    sparReplaced2,
    sparModified2,
    sparExistingDamage2,
    spalNoevent1,
    spalRepaired2,
    spalReplaced2,
    spalModified2,
    spalExistingDamage2,
    spbrNoevent1,
    spbrRepaired2,
    spbrReplaced2,
    spbrModified2,
    spbrExistingDamage2,
    spblNoevent1,
    spblRepaired2,
    spblReplaced2,
    spblModified2,
    spblExistingDamage2,
    spcrNoevent1,
    spcrRepaired2,
    spcrReplaced2,
    spcrModified2,
    spcrExistingDamage2,
    spclNoevent1,
    spclRepaired2,
    spclReplaced2,
    spclModified2,
    spclExistingDamage2,
    spdrNoevent1,
    spdrRepaired2,
    spdrReplaced2,
    spdrModified2,
    spdrExistingDamage2,
    spdlNoevent1,
    spdlRepaired2,
    spdlReplaced2,
    spdlModified2,
    spdlExistingDamage2,
  } = props.getValues();

  return (
    <>
      <Grid container columnSpacing={4}>
        <Grid item xs={1} md={6} sx={{ mb: 4 }}>
          <LabelStyle>1. Frame Rails Right (Trucks; Front Frame Rails)</LabelStyle>
          <RHFCheckbox name="frrNoevent1" label="No Prior Events Observed" />
          {!frrNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="frrRepaired2" label="Repaired" />
                {frrRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="frrRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="frrReplaced2" label="Replaced" />
                {frrReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="frrReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="frrModified2" label="Modified" />
                {frrModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="frrModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="frrExistingDamage2" label="Existing Damage" />
                {frrExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="frrExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={1} md={6} sx={{ mb: 4 }}>
          <LabelStyle>2. Frame Rails Left (Trucks; Front Frame Rails)</LabelStyle>
          <RHFCheckbox name="frlNoevent1" label="No Prior Events Observed" />
          {!frlNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="frlRepaired2" label="Repaired" />
                {frlRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="frlRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="frlReplaced2" label="Replaced" />
                {frlReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="frlReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="frlModified2" label="Modified" />
                {frlModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="frlModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="frlExistingDamage2" label="Existing Damage" />
                {frlExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="frlExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={1} md={6} sx={{ mb: 4 }}>
          <LabelStyle>3. Minor damage (Tow Hooks, Tow Marks)</LabelStyle>
          <RHFCheckbox name="mdExistingDamage" label="Existing Damage" />
        </Grid>

        <Grid item xs={1} md={6} sx={{ mb: 4 }}>
          <LabelStyle>4. Apron Assembly Right</LabelStyle>
          <RHFCheckbox name="aarNoevent1" label="No Prior Events Observed" />
          {!aarNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="aarRepaired2" label="Repaired" />
                {aarRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="aarRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="aarReplaced2" label="Replaced" />
                {aarReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="aarReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="aarModified2" label="Modified" />
                {aarModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="aarModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="aarExistingDamage2" label="Existing Damage" />
                {aarExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="aarExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={1} md={6} sx={{ mb: 4 }}>
          <LabelStyle>5. Apron Assembly Left</LabelStyle>
          <RHFCheckbox name="aalNoevent1" label="No Prior Events Observed" />
          {!aalNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="aalRepaired2" label="Repaired" />
                {aalRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="aalRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="aalReplaced2" label="Replaced" />
                {aalReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="aalReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="aalModified2" label="Modified" />
                {aalModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="aalModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="aalExistingDamage2" label="Existing Damage" />
                {aalExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="aalExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={1} md={6} sx={{ mb: 4 }}>
          <LabelStyle>6. Strut Tower assembly</LabelStyle>
          <RHFCheckbox name="staNoevent1" label="No Prior Events Observed" />
          {!staNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="staRepaired2" label="Repaired" />
                {staRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="staRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="staReplaced2" label="Replaced" />
                {staReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="staReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="staModified2" label="Modified" />
                {staModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="staModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="staExistingDamage2" label="Existing Damage" />
                {staExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="staExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={1} md={6} sx={{ mb: 4 }}>
          <LabelStyle>7. Cowl Panel/Firewall</LabelStyle>
          <RHFCheckbox name="cpNoevent1" label="No Prior Events Observed" />
          {!cpNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="cpRepaired2" label="Repaired" />
                {cpRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="cpRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="cpReplaced2" label="Replaced" />
                {cpReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="cpReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="cpModified2" label="Modified" />
                {cpModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="cpModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="cpExistingDamage2" label="Existing Damage" />
                {cpExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="cpExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={1} md={6} sx={{ mb: 4 }}>
          <LabelStyle>8. Cross Members Right</LabelStyle>
          <RHFCheckbox name="cmrNoevent1" label="No Prior Events Observed" />
          {!cmrNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="cmrRepaired2" label="Repaired" />
                {cmrRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="cmrRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="cmrReplaced2" label="Replaced" />
                {cmrReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="cmrReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="cmrModified2" label="Modified" />
                {cmrModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="cmrModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="cmrExistingDamage2" label="Existing Damage" />
                {cmrExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="cmrExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="cmrBoltOn" label="Bolt on" />
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={1} md={6} sx={{ mb: 4 }}>
          <LabelStyle>9. Cross Members Left</LabelStyle>
          <RHFCheckbox name="cmlNoevent1" label="No Prior Events Observed" />
          {!cmlNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="cmlRepaired2" label="Repaired" />
                {cmlRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="cmlRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="cmlReplaced2" label="Replaced" />
                {cmlReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="cmlReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="cmlModified2" label="Modified" />
                {cmlModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="cmlModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="cmlExistingDamage2" label="Existing Damage" />
                {cmlExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="cmlExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="cmlBoltOn" label="Bolt on" />
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={1} md={6} sx={{ mb: 4 }}>
          <LabelStyle>10. Support Pillar A Right</LabelStyle>
          <RHFCheckbox name="sparNoevent1" label="No Prior Events Observed" />
          {!sparNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="sparRepaired2" label="Repaired" />
                {sparRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="sparRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="sparReplaced2" label="Replaced" />
                {sparReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="sparReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="sparModified2" label="Modified" />
                {sparModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="sparModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="sparExistingDamage2" label="Existing Damage" />
                {sparExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="sparExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={1} md={6} sx={{ mb: 4 }}>
          <LabelStyle>11. Support Pillar A Left</LabelStyle>
          <RHFCheckbox name="spalNoevent1" label="No Prior Events Observed" />
          {!spalNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="spalRepaired2" label="Repaired" />
                {spalRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spalRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spalReplaced2" label="Replaced" />
                {spalReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spalReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spalModified2" label="Modified" />
                {spalModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spalModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spalExistingDamage2" label="Existing Damage" />
                {spalExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spalExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={1} md={6} sx={{ mb: 4 }}>
          <LabelStyle>12. Support Pillar B Right</LabelStyle>
          <RHFCheckbox name="spbrNoevent1" label="No Prior Events Observed" />
          {!spbrNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="spbrRepaired2" label="Repaired" />
                {spbrRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spbrRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spbrReplaced2" label="Replaced" />
                {spbrReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spbrReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spbrModified2" label="Modified" />
                {spbrModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spbrModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spbrExistingDamage2" label="Existing Damage" />
                {spbrExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spbrExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={1} md={6} sx={{ mb: 4 }}>
          <LabelStyle>13. Support Pillar B Left</LabelStyle>
          <RHFCheckbox name="spblNoevent1" label="No Prior Events Observed" />
          {!spblNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="spblRepaired2" label="Repaired" />
                {spblRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spblRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spblReplaced2" label="Replaced" />
                {spblReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spblReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spblModified2" label="Modified" />
                {spblModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spblModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spblExistingDamage2" label="Existing Damage" />
                {spblExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spblExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={1} md={6} sx={{ mb: 4 }}>
          <LabelStyle>14. Support Pillar C Right</LabelStyle>
          <RHFCheckbox name="spcrNoevent1" label="No Prior Events Observed" />
          {!spcrNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="spcrRepaired2" label="Repaired" />
                {spcrRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spcrRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spcrReplaced2" label="Replaced" />
                {spcrReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spcrReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spcrModified2" label="Modified" />
                {spcrModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spcrModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spcrExistingDamage2" label="Existing Damage" />
                {spcrExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spcrExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={1} md={6} sx={{ mb: 4 }}>
          <LabelStyle>15. Support Pillar C Left</LabelStyle>
          <RHFCheckbox name="spclNoevent1" label="No Prior Events Observed" />
          {!spclNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="spclRepaired2" label="Repaired" />
                {spclRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spclRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spclReplaced2" label="Replaced" />
                {spclReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spclReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spclModified2" label="Modified" />
                {spclModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spclModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spclExistingDamage2" label="Existing Damage" />
                {spclExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spclExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={1} md={6} sx={{ mb: 4 }}>
          <LabelStyle>16. Support Pillar D Right</LabelStyle>
          <RHFCheckbox name="spdrNoevent1" label="No Prior Events Observed" />
          {!spdrNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="spdrRepaired2" label="Repaired" />
                {spdrRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spdrRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spdrReplaced2" label="Replaced" />
                {spdrReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spdrReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spdrModified2" label="Modified" />
                {spdrModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spdrModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spdrExistingDamage2" label="Existing Damage" />
                {spdrExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spdrExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={1} md={6} sx={{ mb: 4 }}>
          <LabelStyle>17. Support Pillar D Left</LabelStyle>
          <RHFCheckbox name="spdlNoevent1" label="No Prior Events Observed" />
          {!spdlNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="spdlRepaired2" label="Repaired" />
                {spdlRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spdlRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spdlReplaced2" label="Replaced" />
                {spdlReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spdlReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spdlModified2" label="Modified" />
                {spdlModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spdlModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="spdlExistingDamage2" label="Existing Damage" />
                {spdlExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="spdlExistingDamage2Value" options={['Minor', 'Major']} />
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
            props.setSubCurrentTabFront('nonstructural');
          }}
        >
          Prev Tab
        </LoadingButton>
        <LoadingButton
          variant="contained"
          onClick={() => {
            props.setSubCurrentTabFront('typical');
          }}
        >
          Next Tab
        </LoadingButton>
      </Box>
    </>
  );
}
