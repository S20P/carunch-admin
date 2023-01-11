import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { /* useCallback, */ useEffect, useRef } from 'react';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Box, Grid, Card, Stack /* Typography */ } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import useAuth from '../../../../hooks/useAuth';
import { useDispatch, useSelector } from '../../../../redux/store';

// utils
// import { fData } from '../../../../utils/formatNumber';
// _mock
// import { countries } from '../../../../_mock';
// components
import {
  FormProvider,
  /* RHFSwitch, */ RHFSelect,
  RHFTextField,
  // RHFUploadAvatar,
} from '../../../../components/hook-form';
import { getStates } from '../../../../redux/slices/states';
import { updateProfile } from '../../../../redux/slices/profileUpdate';

// ----------------------------------------------------------------------

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default function AccountGeneral() {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { data: statesData } = useSelector((state) => state.stateReducer);
  const { succMsg, errMsg, data: updatedData } = useSelector((state) => state.profileUpdateReducer);
  const { user } = useAuth();

  const UpdateUserSchema = Yup.object().shape({
    first_name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Dealer First Name'),
    last_name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Dealer Last Name'),
    licence: Yup.string()
      // .matches(licenceReg, 'Invalid number')
      .required('Enter Licence Information'),
    address: Yup.string().required('Enter Address'),
    state: Yup.string().required('Select State'),
    inventory_location: Yup.string().required('Enter Inventory Location'),
    contact_first_name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name required'),
    contact_last_name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Dealer Last Name'),
    mobile: Yup.string().required('Enter Mobile Number'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    carfax_api: Yup.string().required('Enter CarFax API Information'),
    autocheck_api: Yup.string().required('Enter Autocheck API Information'),
    billtrust_account: Yup.string().required('Enter BillTrust Account Information'),
  });

  const defaultValues = {
    first_name: user?.first_name || '',
    last_name: user?.last_name || '',
    licence: user?.licence || '',
    address: user?.address || '',
    state: user?.state || '',
    inventory_location: user?.inventory_location || '',
    contact_first_name: user?.contact_first_name || '',
    contact_last_name: user?.contact_last_name || '',
    mobile: user?.mobile || '',
    email: user?.email || '',
    carfax_api: user?.carfax_api || '',
    autocheck_api: user?.autocheck_api || '',
    billtrust_account: user?.billtrust_account || '',
  };

  const methods = useForm({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues,
  });

  const {
    reset,
    // setValue,
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
      reset(updatedData);
    }
    if (errMsg && prevAmount && prevAmount.errMsg !== errMsg) {
      enqueueSnackbar(errMsg, { variant: 'error' });
      reset();
    }
  }, [succMsg, errMsg, updatedData]);

  const onSubmit = async (data) => {
    const dataObj = {
      id: user.id,
      first_name: data.first_name,
      last_name: data.last_name,
      licence: data.licence,
      address: data.address,
      state: data.state,
      inventory_location: data.inventory_location,
      contact_first_name: data.contact_first_name,
      contact_last_name: data.contact_last_name,
      mobile: data.mobile,
      email: data.email,
      carfax_api: data.carfax_api,
      autocheck_api: data.autocheck_api,
      billtrust_account: data.billtrust_account,
    };
    try {
      dispatch(updateProfile(dataObj));
    } catch (error) {
      console.error(error);
    }
  };

  // const handleDrop = useCallback(
  //   (acceptedFiles) => {
  //     const file = acceptedFiles[0];

  //     if (file) {
  //       setValue(
  //         'photoURL',
  //         Object.assign(file, {
  //           preview: URL.createObjectURL(file),
  //         })
  //       );
  //     }
  //   },
  //   [setValue]
  // );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        {/* <Grid item xs={12} md={4}>
          <Card sx={{ py: 10, px: 3, textAlign: 'center' }}>
            <RHFUploadAvatar
              name="photoURL"
              accept="image/*"
              maxSize={3145728}
              onDrop={handleDrop}
              helperText={
                <Typography
                  variant="caption"
                  sx={{
                    mt: 2,
                    mx: 'auto',
                    display: 'block',
                    textAlign: 'center',
                    color: 'text.secondary',
                  }}
                >
                  Allowed *.jpeg, *.jpg, *.png, *.gif
                  <br /> max size of {fData(3145728)}
                </Typography>
              }
            />

            <RHFSwitch name="isPublic" labelPlacement="start" label="Public Profile" sx={{ mt: 5 }} />
          </Card>
        </Grid> */}

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
              <RHFTextField name="first_name" label="First name" />
              <RHFTextField name="last_name" label="Last name" />
              <RHFTextField name="licence" label="Licence" />
              <RHFTextField name="address" label="Address" multiline rows={4} />
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
              <RHFTextField name="inventory_location" label="Inventory Location(if different)" />
              <RHFTextField name="contact_first_name" label="Point of contact First name" />
              <RHFTextField name="contact_last_name" label="Point of contact Last name" />
              <RHFTextField name="mobile" label="Mobile" />
              <RHFTextField name="email" label="Email address" />
              <RHFTextField name="carfax_api" label="CarFax API Information" />
              <RHFTextField name="autocheck_api" label="AutoCheck API Information" />
              <RHFTextField name="billtrust_account" label="BillTrust Account Information" />
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
  );
}
