import * as Yup from 'yup';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { useSnackbar } from 'notistack';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack /* IconButton, InputAdornment, Alert */ } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
// components
// import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField, RHFSelect } from '../../../components/hook-form';
import { useDispatch, useSelector } from '../../../redux/store';
import { getStates } from '../../../redux/slices/states';
import { PATH_AUTH } from '../../../routes/paths';

// ----------------------------------------------------------------------

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default function RegisterForm() {
  const { enqueueSnackbar } = useSnackbar();
  const { register, isRegistered, regSuccMsg, regErrMsg } = useAuth();
  const dispatch = useDispatch();
  const { data: statesData } = useSelector((state) => state.stateReducer);
  const navigate = useNavigate();
  const isMountedRef = useIsMountedRef();

  // const [showPassword, setShowPassword] = useState(false);
  // const licenceReg = /^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/;
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Dealer First Name'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Dealer Last Name'),
    licence: Yup.string()
      // .matches(licenceReg, 'Invalid number')
      .required('Enter Licence Information'),
    address: Yup.string().required('Enter Address'),
    state: Yup.string().required('Select State'),
    inventoryLocation: Yup.string().required('Enter Inventory Location'),
    pFirstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name required'),
    pLastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Dealer Last Name'),
    phone: Yup.string().required('Enter Mobile Number'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    carFaxApiInfo: Yup.string().required('Enter CarFax API Information'),
    autoCheckApiInfo: Yup.string().required('Enter Autocheck API Information'),
    billTrustAccInfo: Yup.string().required('Enter BillTrust Account Information'),
    // password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    licence: '',
    address: '',
    state: statesData?.[0]?.name || '',
    inventoryLocation: '',
    pFirstName: '',
    pLastName: '',
    phone: '',
    email: '',
    carFaxApiInfo: '',
    autoCheckApiInfo: '',
    billTrustAccInfo: '',
    // password: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { /* errors, */ isSubmitting },
  } = methods;

  useEffect(() => {
    dispatch(getStates());
  }, [dispatch]);

  const prevAmount = usePrevious({ isRegistered, regSuccMsg, regErrMsg });
  useEffect(() => {
    if (prevAmount && isRegistered && regSuccMsg && prevAmount.isRegistered !== isRegistered) {
      enqueueSnackbar(regSuccMsg);
      reset();
      navigate(PATH_AUTH.login, { replace: true });
    }
    if (prevAmount && regErrMsg && prevAmount.regErrMsg !== regErrMsg) {
      reset();
      enqueueSnackbar(regErrMsg, { variant: 'error' });
    }
  }, [isRegistered, regSuccMsg, regErrMsg]);

  const onSubmit = async (data) => {
    const dataObj = {
      first_name: data.firstName,
      last_name: data.lastName,
      licence: data.licence,
      address: data.address,
      state: data.state,
      inventory_location: data.inventoryLocation,
      contact_first_name: data.pFirstName,
      contact_last_name: data.pLastName,
      mobile: data.phone,
      email: data.email,
      carfax_api: data.carFaxApiInfo,
      autocheck_api: data.autoCheckApiInfo,
      billtrust_account: data.billTrustAccInfo,
      // data.password,
    };
    try {
      await register(dataObj);
    } catch (error) {
      console.error(error);
      reset();
      if (isMountedRef.current) {
        setError('afterSubmit', error);
      }
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {/* {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>} */}

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField name="firstName" label="First name" />
          <RHFTextField name="lastName" label="Last name" />
        </Stack>

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

        <RHFTextField name="inventoryLocation" label="Inventory Location(if different)" />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField name="pFirstName" label="Point of contact First name" />
          <RHFTextField name="pLastName" label="Point of contact Last name" />
        </Stack>

        <RHFTextField name="phone" label="Mobile" />

        <RHFTextField name="email" label="Email address" />

        <RHFTextField name="carFaxApiInfo" label="CarFax API Information" />

        <RHFTextField name="autoCheckApiInfo" label="AutoCheck API Information" />

        <RHFTextField name="billTrustAccInfo" label="BillTrust Account Information" />

        {/* <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        /> */}

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Register
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
