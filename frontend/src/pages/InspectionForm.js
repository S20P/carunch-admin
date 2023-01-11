import React, { useState, useEffect } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Box, Card, FormHelperText } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Typography from '@mui/material/Typography';

// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// components
import Page from '../components/Page';
import { defaultValues } from '../sections/inspectionForm/DefaultValues';
import { ValidationSchema } from '../sections/inspectionForm/validationSchema';
import { FormProvider, RHFRadioGroup, RHFCheckbox, RHFTextField } from '../components/hook-form';

// ----------------------------------------------------------------------

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

const findElmName = (obj, searchKey, results = []) => {
  const r = results;
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (key === searchKey && typeof value !== 'object') {
      r.push(value);
    } else if (typeof value === 'object') {
      findElmName(value, searchKey, r);
    }
  });
  return r;
};

export default function InspectionForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [questionList, setQuestionList] = useState([]);
  const frontfirst = questionList.map((d) => d.inspLoc).indexOf('front');
  const frontlast = questionList.map((d) => d.inspLoc).lastIndexOf('front');
  const rooffirst = questionList.map((d) => d.inspLoc).indexOf('roof');
  const rooflast = questionList.map((d) => d.inspLoc).lastIndexOf('roof');
  const sidefirst = questionList.map((d) => d.inspLoc).indexOf('side');
  const sidelast = questionList.map((d) => d.inspLoc).lastIndexOf('side');
  const rearfirst = questionList.map((d) => d.inspLoc).indexOf('rear');
  const rearlast = questionList.map((d) => d.inspLoc).lastIndexOf('rear');
  const framefirst = questionList.map((d) => d.inspLoc).indexOf('frame');
  const framelast = questionList.map((d) => d.inspLoc).lastIndexOf('frame');

  const methods = useForm({
    resolver: yupResolver(ValidationSchema),
    defaultValues,
  });

  const {
    trigger,
    reset,
    setValue,
    getValues,
    handleSubmit,
    formState: { isSubmitting, isDirty, dirtyFields, errors },
  } = methods;

  useEffect(() => {
    // api call to get data & set it in questionList state
    setQuestionList([
      {
        id: 1,
        inspLoc: 'front',
        inspType: 'non-structural',
        que: 'Bumper cover/Bumper Molding',
        options: [
          {
            type: 'checkbox',
            label: 'No Prior Events Observed',
            name: 'bmNoevent1',
            subOpt: [
              {
                type: 'checkbox',
                label: 'Repaired',
                name: 'bmRepaired2',
                value: {
                  type: 'radio',
                  label: ['Standard', 'Substandard'],
                  name: 'bmRepaired2Value',
                },
              },
              {
                type: 'checkbox',
                label: 'Replaced',
                name: 'bmReplaced2',
                value: {
                  type: 'radio',
                  label: ['Standard', 'Substandard'],
                  name: 'bmReplaced2Value',
                },
              },
              {
                type: 'checkbox',
                label: 'Modified',
                name: 'bmModified2',
                value: {
                  type: 'radio',
                  label: ['Neutral', 'Added Value'],
                  name: 'bmModified2Value',
                },
              },
              {
                type: 'checkbox',
                label: 'Existing Damage',
                name: 'bmExistingDamage2',
                value: {
                  type: 'radio',
                  label: ['Minor', 'Major'],
                  name: 'bmExistingDamage2Value',
                },
              },
            ],
          },
        ],
      },
      {
        id: 2,
        inspLoc: 'front',
        inspType: 'non-structural',
        que: 'Bumper support',
        options: [
          {
            type: 'checkbox',
            label: 'No Prior Events Observed',
            name: 'bsNoevent1',
            subOpt: [
              {
                type: 'checkbox',
                label: 'Repaired',
                name: 'bsRepaired2',
                value: {
                  type: 'radio',
                  label: ['Standard', 'Substandard'],
                  name: 'bsRepaired2Value',
                },
              },
              {
                type: 'checkbox',
                label: 'Replaced',
                name: 'bsReplaced2',
                value: {
                  type: 'radio',
                  label: ['Standard', 'Substandard'],
                  name: 'bsReplaced2Value',
                },
              },
              {
                type: 'checkbox',
                label: 'Modified',
                name: 'bsModified2',
                value: {
                  type: 'radio',
                  label: ['Neutral', 'Added Value'],
                  name: 'bsModified2Value',
                },
              },
              {
                type: 'checkbox',
                label: 'Existing Damage',
                name: 'bsExistingDamage2',
                value: {
                  type: 'radio',
                  label: ['Minor', 'Major'],
                  name: 'bsExistingDamage2Value',
                },
              },
            ],
          },
        ],
      },
      {
        id: 3,
        inspLoc: 'front',
        inspType: 'non-structural',
        que: 'Side Mirror Left',
        options: [
          {
            type: 'checkbox',
            label: 'No Prior Events Observed',
            name: 'smlNoevent1',
            subOpt: [
              {
                type: 'checkbox',
                label: 'Glass Cracked',
                name: 'smlGlassCracked2',
                value: {
                  type: 'radio',
                  label: ['Minor', 'Major'],
                  name: 'smlGlassCracked2Value',
                },
              },
              {
                type: 'checkbox',
                label: 'Outer Casing Damage',
                name: 'smlOuterCasingDamage2',
                value: {
                  type: 'radio',
                  label: ['Minor', 'Major'],
                  name: 'smlOuterCasingDamage2Value',
                },
              },
            ],
          },
        ],
      },
      {
        id: 4,
        inspLoc: 'roof',
        inspType: 'non-structural',
        que: 'Dent(s)',
        options: [
          {
            type: 'checkbox',
            label: 'No Prior Events Observed',
            name: 'dNoevent1',
            subOpt: [
              {
                type: 'textfield',
                label: 'Quantity',
                name: 'dqty',
              },
              {
                type: 'checkbox',
                label: 'Hail damage',
                name: 'dHailDamage2',
                value: {
                  type: 'radio',
                  label: ['Minor', 'Major'],
                  name: 'dHailDamage2Value',
                },
              },
            ],
          },
        ],
      },
      {
        id: 5,
        inspLoc: 'roof',
        inspType: 'non-structural',
        que: 'PDR (paintless dent removal-cosmetic)',
        options: [
          {
            type: 'checkbox',
            label: 'No Prior Events Observed',
            name: 'pdrNoevent1',
            subOpt: [
              {
                type: 'checkbox',
                label: 'Exists',
                name: 'pdrExists2',
                value: {
                  type: 'radio',
                  label: ['Minor', 'Major'],
                  name: 'pdrExists2Value',
                },
              },
            ],
          },
        ],
      },
      {
        id: 6,
        inspLoc: 'roof',
        inspType: 'structural',
        que: 'Roof Bow/Braces',
        options: [
          {
            type: 'checkbox',
            label: 'No Prior Events Observed',
            name: 'rbNoevent1',
            subOpt: [
              {
                type: 'checkbox',
                label: 'Repaired',
                name: 'rbRepaired2',
                value: {
                  type: 'radio',
                  label: ['Standard', 'Substandard'],
                  name: 'rbRepaired2Value',
                },
              },
              {
                type: 'checkbox',
                label: 'Replaced',
                name: 'rbReplaced2',
                value: {
                  type: 'radio',
                  label: ['Standard', 'Substandard'],
                  name: 'rbReplaced2Value',
                },
              },
              {
                type: 'checkbox',
                label: 'Modified',
                name: 'rbModified2',
                value: {
                  type: 'radio',
                  label: ['Neutral', 'Added Value'],
                  name: 'rbModified2Value',
                },
              },
              {
                type: 'checkbox',
                label: 'Existing Damage',
                name: 'rbExistingDamage2',
                value: {
                  type: 'radio',
                  label: ['Minor', 'Major'],
                  name: 'rbExistingDamage2Value',
                },
              },
            ],
          },
        ],
      },
    ]);
  }, []);

  useEffect(() => {
    if (isDirty) {
      handleFieldsOnChange();
      reset(getValues());
    }
  }, [isDirty]);

  useEffect(() => {
    reset(getValues());
  }, [activeStep]);

  const handleFieldsOnChange = () => {
    const allFormData = getValues();
    const allKeys = Object.keys(allFormData);
    const allDirstyFieldsKeys = Object.keys(dirtyFields);

    if (allDirstyFieldsKeys.length > 0) {
      if (allDirstyFieldsKeys[0].endsWith('1')) {
        // for parent with checkbox having radio child

        const temp1 = allDirstyFieldsKeys[0]; // get dirty field key name

        // split key name from capital latter & get 0th value from array (to get initial for question)
        const temp2 = temp1.split(/(?=[A-Z])/)[0];

        // get all var related to upper initial
        const filterData = allKeys.filter(
          (key) => key.startsWith(temp2) && key !== temp1 && key[temp2.length] === key[temp2.length].toUpperCase()
        );

        // set values for checkbox & radio
        filterData.map((fdata) => (fdata.endsWith('Value') ? setValue(fdata, '') : setValue(fdata, false)));
      } else if (allDirstyFieldsKeys[0].endsWith('2')) {
        // for parent with radio button
        // set value for radio
        setValue(`${allDirstyFieldsKeys[0]}Value`, '');
      } else {
        // on change radio & text field
        // console.log('else case==================', allDirstyFieldsKeys[0]);
      }
    }
  };

  const onSubmit = async (data) => {
    console.log('data-------', data);
    // api call to create data
  };

  const handleNext = async () => {
    const allElmNames = findElmName(questionList[activeStep], 'name');
    const isStepValid = await trigger(allElmNames);
    if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Page title="InspectionForm" sx={{ mx: 8, mt: 13, mb: 5 }}>
      <Container maxWidth={false}>
        {questionList.length > 0 ? (
          <FormProvider methods={methods}>
            <Card sx={{ width: '100%', px: 5, py: 5 }}>
              <Box>
                <Typography variant="h5" gutterBottom component="div" sx={{ textTransform: 'capitalize' }}>
                  Inspection Location: {questionList[activeStep].inspLoc}
                </Typography>
                <Typography variant="h5" gutterBottom component="div" sx={{ textTransform: 'capitalize' }}>
                  Inspection Type: {questionList[activeStep].inspType}
                </Typography>

                <Box sx={{ py: 5, px: 5 }}>
                  <LabelStyle>
                    {activeStep + 1}. {questionList[activeStep].que}
                  </LabelStyle>
                  {!!errors && errors[Object.keys(errors)?.find((el) => el.endsWith('1'))] && (
                    <FormHelperText error sx={{ px: 2 }}>
                      {errors[Object.keys(errors).find((el) => el.endsWith('1'))].message}
                    </FormHelperText>
                  )}
                  {questionList[activeStep].options.map((opt, i) => (
                    <React.Fragment key={i}>
                      {opt.type === 'checkbox' ? (
                        <RHFCheckbox
                          isdisabled={opt.subOpt && opt.subOpt.filter((data) => getValues()[data.name]).length > 0}
                          name={opt.name}
                          label={opt.label}
                        />
                      ) : null}
                      {/* {opt.type === 'textfield' ? (
                      <RHFTextField type="number" name={opt.name} label={opt.label} margin="dense" fullWidth={false} />
                    ) : null} */}
                      <Box sx={{ ml: 4 }}>
                        {opt.subOpt &&
                          opt.subOpt.map((opt2, i2) => (
                            <Box key={i2}>
                              {opt2.type === 'checkbox' ? (
                                <>
                                  <RHFCheckbox isdisabled={getValues()[opt.name]} name={opt2.name} label={opt2.label} />
                                  {getValues()[opt2.name] ? (
                                    <RHFRadioGroup sx={{ ml: 4 }} name={opt2.value.name} options={opt2.value.label} />
                                  ) : null}
                                </>
                              ) : null}
                              {opt2.type === 'textfield' ? (
                                <RHFTextField
                                  type="number"
                                  name={opt2.name}
                                  label={opt2.label}
                                  margin="dense"
                                  fullWidth={false}
                                  disabled={getValues()[opt.name]}
                                />
                              ) : null}
                            </Box>
                          ))}
                        {/* {opt.value && getValues()[opt.name] && (
                        <RHFRadioGroup name={opt.value.name} options={opt.value.label} />
                      )} */}
                      </Box>
                    </React.Fragment>
                  ))}
                </Box>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                {activeStep !== 0 ? (
                  <LoadingButton variant="contained" onClick={handleBack} sx={{ mr: 1 }} loading={isSubmitting}>
                    {frontfirst === activeStep ||
                    rooffirst === activeStep ||
                    sidefirst === activeStep ||
                    rearfirst === activeStep ||
                    framefirst === activeStep
                      ? 'Previous Section'
                      : 'Previous Question'}
                  </LoadingButton>
                ) : null}
                <Box sx={{ flex: '1 1 auto' }} />
                {activeStep === questionList.length - 1 ? (
                  <LoadingButton variant="contained" onClick={handleSubmit(onSubmit)} loading={isSubmitting}>
                    Submit
                  </LoadingButton>
                ) : (
                  <LoadingButton variant="contained" onClick={handleNext} loading={isSubmitting}>
                    {frontlast === activeStep ||
                    rooflast === activeStep ||
                    sidelast === activeStep ||
                    rearlast === activeStep ||
                    framelast === activeStep
                      ? 'Next Section'
                      : 'Next Question'}
                  </LoadingButton>
                )}
              </Box>
            </Card>
          </FormProvider>
        ) : (
          <Card sx={{ width: '100%', px: 5, py: 5 }}>
            <Typography variant="h5" component="div">
              No Data Found
            </Typography>
          </Card>
        )}
      </Container>
    </Page>
  );
}
