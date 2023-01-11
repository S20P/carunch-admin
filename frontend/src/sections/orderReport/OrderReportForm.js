import { useEffect, useRef } from 'react';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
// @mui
import { /* Button, Typography, */ Stack, Box, Grid, Card } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

//
import { varFade, MotionInView } from '../../components/animate';
import { FormProvider, RHFTextField, RHFSelect } from '../../components/hook-form';
import { useDispatch, useSelector } from '../../redux/store';
import { getStates } from '../../redux/slices/states';
import { createOrderReport } from '../../redux/slices/orderReport';

// ----------------------------------------------------------------------

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default function OrderReportForm(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { data: statesData } = useSelector((state) => state.stateReducer);
  const { succMsg, errMsg } = useSelector((state) => state.orderReportReducer);

  const orderReportSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Dealer First Name'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Dealer Last Name'),
    phone: Yup.string().required('Enter Mobile Number'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    vinNo: Yup.string().required('Enter VIN Number'),
    address: Yup.string().required('Enter Address'),
    state: Yup.string().required('Select State'),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    vinNo: '',
    address: '',
    state: '',
  };

  const methods = useForm({
    resolver: yupResolver(orderReportSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    dispatch(getStates());
  }, [dispatch]);

  const prevAmount = usePrevious({ succMsg, errMsg });
  useEffect(() => {
    if (succMsg && prevAmount && prevAmount.succMsg !== succMsg) {
      enqueueSnackbar(succMsg);
      reset();
    }
    if (errMsg && prevAmount && prevAmount.errMsg !== errMsg) {
      enqueueSnackbar(errMsg, { variant: 'error' });
      reset();
    }
  }, [succMsg, errMsg]);

  const onSubmit = async (data) => {
    const dataObj = {
      first_name: data.firstName,
      last_name: data.lastName,
      mobile: data.phone,
      email: data.email,
      vin_no: data.vinNo,
      address: data.address,
      state: data.state,
    };
    try {
      dispatch(createOrderReport(dataObj));
    } catch (error) {
      console.error(error);
      reset();
    }
  };

  return props.fromDashboard ? (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'grid',
                rowGap: 3,
                columnGap: 2,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <RHFTextField name="firstName" label="First name" />
              <RHFTextField name="lastName" label="Last name" />
              <RHFTextField name="phone" label="Mobile" />
              <RHFTextField name="email" label="Email address" />
              <RHFTextField name="vinNo" label="VIN Number" />
              <RHFSelect name="state" label="State">
                <option value="" />
                {statesData && statesData.length > 0
                  ? statesData.map((option) => (
                      <option key={option.id} value={option.name}>
                        {option.name}
                      </option>
                    ))
                  : null}
              </RHFSelect>
              <RHFTextField name="address" label="Address" multiline rows={4} />
            </Box>

            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                Save Changes
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  ) : (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <MotionInView variants={varFade().inUp}>
          <RHFTextField name="firstName" label="First name" />
        </MotionInView>

        <MotionInView variants={varFade().inUp}>
          <RHFTextField name="lastName" label="Last name" />
        </MotionInView>

        <MotionInView variants={varFade().inUp}>
          <RHFTextField name="phone" label="Mobile" />
        </MotionInView>

        <MotionInView variants={varFade().inUp}>
          <RHFTextField name="email" label="Email address" />
        </MotionInView>

        <MotionInView variants={varFade().inUp}>
          <RHFTextField name="vinNo" label="VIN Number" />
        </MotionInView>

        <MotionInView variants={varFade().inUp}>
          <RHFTextField name="address" label="Address" multiline rows={4} />
        </MotionInView>

        <MotionInView variants={varFade().inUp}>
          <RHFSelect name="state" label="State">
            <option value="" />
            {statesData && statesData.length > 0
              ? statesData.map((option) => (
                  <option key={option.id} value={option.name}>
                    {option.name}
                  </option>
                ))
              : null}
          </RHFSelect>
        </MotionInView>

        <MotionInView variants={varFade().inUp}>
          {/* <Button size="large" variant="contained">
            Submit
          </Button> */}
          <LoadingButton size="large" type="submit" variant="contained" loading={isSubmitting}>
            Register
          </LoadingButton>
        </MotionInView>
      </Stack>
    </FormProvider>
  );
}
