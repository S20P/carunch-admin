import React, { useEffect, useState } from 'react';
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
    bmNoevent1,
    bmRepaired2,
    bmReplaced2,
    bmModified2,
    bmExistingDamage2,
    bsNoevent1,
    bsRepaired2,
    bsReplaced2,
    bsModified2,
    bsExistingDamage2,
    hNoevent1,
    hRepaired2,
    hReplaced2,
    hModified2,
    hExistingDamage2,
    drNoevent1,
    drRepaired2,
    drReplaced2,
    drModified2,
    drExistingDamage2,
    dlNoevent1,
    dlRepaired2,
    dlReplaced2,
    dlModified2,
    dlExistingDamage2,
    frNoevent1,
    frRepaired2,
    frReplaced2,
    frModified2,
    frExistingDamage2,
    flNoevent1,
    flRepaired2,
    flReplaced2,
    flModified2,
    flExistingDamage2,
    wrExistingDamage2,
    wlExistingDamage2,
    smrGlassCracked2,
    smrOuterCasingDamage2,
    smlGlassCracked2,
    smlOuterCasingDamage2,
  } = props.getValues();

  const [flag, setflag] = useState(false);
  const [errorData, seterrorData] = useState(props.errors);
  useEffect(() => {
    seterrorData(props.errors);
  }, [props.errors, errorData]);

  useEffect(() => {
    if (Object.keys(errorData).length < 1 && flag) {
      props.setSubCurrentTabFront('structural');
    }
  }, [flag]);

  console.log('errorData', errorData);

  return (
    <>
      <Grid container columnSpacing={4}>
        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>1. Bumper cover/Bumper Molding</LabelStyle>
          <RHFCheckbox name="bmNoevent1" label="No Prior Events Observed" />
          {!bmNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="bmRepaired2" label="Repaired" />
                {bmRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="bmRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="bmReplaced2" label="Replaced" />
                {bmReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="bmReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="bmModified2" label="Modified" />
                {bmModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="bmModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="bmExistingDamage2" label="Existing Damage" />
                {bmExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="bmExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>2. Bumper support</LabelStyle>
          <RHFCheckbox name="bsNoevent1" label="No Prior Events Observed" />
          {!bsNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="bsRepaired2" label="Repaired" />
                {bsRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="bsRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="bsReplaced2" label="Replaced" />
                {bsReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="bsReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="bsModified2" label="Modified" />
                {bsModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="bsModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="bsExistingDamage2" label="Existing Damage" />
                {bsExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="bsExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>3. Hood</LabelStyle>
          <RHFCheckbox name="hNoevent1" label="No Prior Events Observed" />
          {!hNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="hRepaired2" label="Repaired" />
                {hRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="hRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="hReplaced2" label="Replaced" />
                {hReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="hReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="hModified2" label="Modified" />
                {hModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="hModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="hExistingDamage2" label="Existing Damage" />
                {hExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="hExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>4. Door Right</LabelStyle>
          <RHFCheckbox name="drNoevent1" label="No Prior Events Observed" />
          {!drNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="drRepaired2" label="Repaired" />
                {drRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="drRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="drReplaced2" label="Replaced" />
                {drReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="drReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="drModified2" label="Modified" />
                {drModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="drModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="drExistingDamage2" label="Existing Damage" />
                {drExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="drExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>5. Door Left</LabelStyle>
          <RHFCheckbox name="dlNoevent1" label="No Prior Events Observed" />
          {!dlNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="dlRepaired2" label="Repaired" />
                {dlRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="dlRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="dlReplaced2" label="Replaced" />
                {dlReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="dlReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="dlModified2" label="Modified" />
                {dlModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="dlModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="dlExistingDamage2" label="Existing Damage" />
                {dlExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="dlExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>6. Fender Right</LabelStyle>
          <RHFCheckbox name="frNoevent1" label="No Prior Events Observed" />
          {!frNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="frRepaired2" label="Repaired" />
                {frRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="frRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="frReplaced2" label="Replaced" />
                {frReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="frReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="frModified2" label="Modified" />
                {frModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="frModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="frExistingDamage2" label="Existing Damage" />
                {frExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="frExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>7. Fender Left</LabelStyle>
          <RHFCheckbox name="flNoevent1" label="No Prior Events Observed" />
          {!flNoevent1 ? (
            <Box sx={{ ml: 4 }}>
              <Box>
                <RHFCheckbox name="flRepaired2" label="Repaired" />
                {flRepaired2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="flRepaired2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="flReplaced2" label="Replaced" />
                {flReplaced2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="flReplaced2Value" options={['Standard', 'Substandard']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="flModified2" label="Modified" />
                {flModified2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="flModified2Value" options={['Neutral', 'Added Value']} />
                ) : null}
              </Box>
              <Box>
                <RHFCheckbox name="flExistingDamage2" label="Existing Damage" />
                {flExistingDamage2 ? (
                  <RHFRadioGroup sx={{ ml: 4 }} name="flExistingDamage2Value" options={['Minor', 'Major']} />
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>8. Wheel(s) Right</LabelStyle>
          <Box>
            <RHFCheckbox name="wrExistingDamage2" label="Existing Damage" />
            {wrExistingDamage2 ? (
              <RHFRadioGroup sx={{ ml: 4 }} name="wrExistingDamage2Value" options={['Minor', 'Major']} />
            ) : null}
          </Box>
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>9. Wheel(s) Left</LabelStyle>
          <Box>
            <RHFCheckbox name="wlExistingDamage2" label="Existing Damage" />
            {wlExistingDamage2 ? (
              <RHFRadioGroup sx={{ ml: 4 }} name="wlExistingDamage2Value" options={['Minor', 'Major']} />
            ) : null}
          </Box>
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>10. Side Mirror Right</LabelStyle>
          <Box>
            <RHFCheckbox name="smrGlassCracked2" label="Glass Cracked" />
            {smrGlassCracked2 ? (
              <RHFRadioGroup sx={{ ml: 4 }} name="smrGlassCracked2Value" options={['Minor', 'Major']} />
            ) : null}
          </Box>
          <Box>
            <RHFCheckbox name="smrOuterCasingDamage2" label="Outer Casing Damage" />
            {smrOuterCasingDamage2 ? (
              <RHFRadioGroup sx={{ ml: 4 }} name="smrOuterCasingDamage2Value" options={['Minor', 'Major']} />
            ) : null}
          </Box>
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <LabelStyle>11. Side Mirror Left</LabelStyle>
          <Box>
            <RHFCheckbox name="smlGlassCracked2" label="Glass Cracked" />
            {smlGlassCracked2 ? (
              <RHFRadioGroup sx={{ ml: 4 }} name="smlGlassCracked2Value" options={['Minor', 'Major']} />
            ) : null}
          </Box>
          <Box>
            <RHFCheckbox name="smlOuterCasingDamage2" label="Outer Casing Damage" />
            {smlOuterCasingDamage2 ? (
              <RHFRadioGroup sx={{ ml: 4 }} name="smlOuterCasingDamage2Value" options={['Minor', 'Major']} />
            ) : null}
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <LoadingButton
          variant="contained"
          onClick={() => {
            setflag(true);
            props.trigger([
              'bmRepaired2Value',
              'bmReplaced2Value',
              'bmModified2Value',
              'bmExistingDamage2Value',
              'bsRepaired2Value',
              'bsReplaced2Value',
              'bsModified2Value',
              'bsExistingDamage2Value',
              'hRepaired2Value',
              'hReplaced2Value',
              'hModified2Value',
              'hExistingDamage2Value',
              'drRepaired2Value',
              'drReplaced2Value',
              'drModified2Value',
              'drExistingDamage2Value',
              'dlRepaired2Value',
              'dlReplaced2Value',
              'dlModified2Value',
              'dlExistingDamage2Value',
              'frRepaired2Value',
              'frReplaced2Value',
              'frModified2Value',
              'frExistingDamage2Value',
              'flRepaired2Value',
              'flReplaced2Value',
              'flModified2Value',
              'flExistingDamage2Value',
              'wrExistingDamage2Value',
              'wlExistingDamage2Value',
              'smrGlassCracked2Value',
              'smrOuterCasingDamage2Value',
              'smlGlassCracked2Value',
              'smlOuterCasingDamage2Value',
            ]);
          }}
        >
          Next Tab
        </LoadingButton>
      </Box>
    </>
  );
}
