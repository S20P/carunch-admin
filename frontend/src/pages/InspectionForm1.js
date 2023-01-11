import React, { useState, useEffect } from 'react';
import { capitalCase } from 'change-case';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Tabs, Tab, Box, Card } from '@mui/material';
// import { LoadingButton } from '@mui/lab';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// components
import Page from '../components/Page';
import FrontTab from '../sections/inspectionForm/front/FrontTab';
import RoofTab from '../sections/inspectionForm/roof/RoofTab';
import SideTab from '../sections/inspectionForm/side/SideTab';
import RearTab from '../sections/inspectionForm/rear/RearTab';
import FrameTab from '../sections/inspectionForm/frame/FrameTab';
import { defaultValues } from '../sections/inspectionForm/DefaultValues';
import { ValidationSchema } from '../sections/inspectionForm/validationSchema';
import { FormProvider } from '../components/hook-form';
// ----------------------------------------------------------------------

const TabsWrapperStyle = styled('div')(({ theme }) => ({
  zIndex: 9,
  bottom: 0,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(3),
  },
}));

export default function InspectionForm() {
  const [mainCurrentTab, setMainCurrentTab] = useState('front');
  const [subCurrentTabFront, setSubCurrentTabFront] = useState('nonstructural');
  const [subCurrentTabRoof, setSubCurrentTabRoof] = useState('nonstructural');
  const [subCurrentTabSide, setSubCurrentTabSide] = useState('nonstructural');
  const [subCurrentTabRear, setSubCurrentTabRear] = useState('nonstructural');
  const [subCurrentTabFrame, setSubCurrentTabFrame] = useState('structural');

  const handleChangeTab = (newValue) => {
    setMainCurrentTab(newValue);
  };

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
    if (isDirty) {
      handleFieldsOnChange();
      reset(getValues());
    }
  }, [isDirty]);

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
  };
  console.log('error333', errors);

  const PROFILE_TABS = [
    {
      value: 'front',
      component: (
        <FrontTab
          trigger={trigger}
          getValues={getValues}
          setMainCurrentTab={setMainCurrentTab}
          subCurrentTabFront={subCurrentTabFront}
          setSubCurrentTabFront={setSubCurrentTabFront}
          setSubCurrentTabRoof={setSubCurrentTabRoof}
          errors={errors}
        />
      ),
    },
    {
      value: 'roof',
      component: (
        <RoofTab
          trigger={trigger}
          getValues={getValues}
          setMainCurrentTab={setMainCurrentTab}
          subCurrentTabRoof={subCurrentTabRoof}
          setSubCurrentTabFront={setSubCurrentTabFront}
          setSubCurrentTabRoof={setSubCurrentTabRoof}
          setSubCurrentTabSide={setSubCurrentTabSide}
          errors={errors}
        />
      ),
    },
    {
      value: 'side',
      component: (
        <SideTab
          trigger={trigger}
          getValues={getValues}
          setMainCurrentTab={setMainCurrentTab}
          subCurrentTabSide={subCurrentTabSide}
          setSubCurrentTabRoof={setSubCurrentTabRoof}
          setSubCurrentTabSide={setSubCurrentTabSide}
          setSubCurrentTabRear={setSubCurrentTabRear}
          errors={errors}
        />
      ),
    },
    {
      value: 'rear',
      component: (
        <RearTab
          trigger={trigger}
          getValues={getValues}
          setMainCurrentTab={setMainCurrentTab}
          subCurrentTabRear={subCurrentTabRear}
          setSubCurrentTabSide={setSubCurrentTabSide}
          setSubCurrentTabRear={setSubCurrentTabRear}
          setSubCurrentTabFrame={setSubCurrentTabFrame}
          errors={errors}
        />
      ),
    },
    {
      value: 'frame',
      component: (
        <FrameTab
          trigger={trigger}
          getValues={getValues}
          setMainCurrentTab={setMainCurrentTab}
          subCurrentTabFrame={subCurrentTabFrame}
          setSubCurrentTabRear={setSubCurrentTabRear}
          setSubCurrentTabFrame={setSubCurrentTabFrame}
          errors={errors}
          isSubmitting={isSubmitting}
        />
      ),
    },
  ];

  return (
    <Page title="InspectionForm">
      <Container maxWidth={false} sx={{ mt: 13, mb: 5 }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Card
            sx={{
              mb: 2,
              height: 50,
              position: 'relative',
            }}
          >
            <TabsWrapperStyle>
              <Tabs
                value={mainCurrentTab}
                scrollButtons="auto"
                variant="scrollable"
                allowScrollButtonsMobile
                disabled
                // onChange={(e, value) => handleChangeTab(value)}
              >
                {PROFILE_TABS.map((tab) => (
                  <Tab disableRipple key={tab.value} value={tab.value} label={capitalCase(tab.value)} />
                ))}
              </Tabs>
            </TabsWrapperStyle>
          </Card>

          {PROFILE_TABS.map((tab) => {
            const isMatched = tab.value === mainCurrentTab;
            return (
              isMatched && (
                <Box sx={{ ml: 2, mr: 2 }} key={tab.value}>
                  {tab.component}
                </Box>
              )
            );
          })}

          {/* <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            Submit Form
          </LoadingButton> */}
        </FormProvider>
      </Container>
    </Page>
  );
}
