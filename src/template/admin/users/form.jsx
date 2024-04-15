import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';
import { TextField } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import Iconify from 'src/components/iconify';
import FormComponent from "src/components/form";
import ErrorTextComponent from "src/components/error-text";

export default function FormUsers({formik, onSubmitForm, textBtn, initialValues}) {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <FormComponent formik={formik} textBtn={textBtn} handleSubmitForm={onSubmitForm} initialValues={initialValues}>
      <ErrorTextComponent
        errors={formik.errors}
        touched={formik.touched}
        field="firstName"
        
      >
        <TextField
          name="firstName"
          label={t('field.firstName')}
          size="small"
          // eslint-disable-next-line no-unneeded-ternary
          error={Object.keys(formik.errors).length && formik.errors.firstName ? true : false}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <TextField
          name="lastName"
          label={t('field.lastName')}
          size="small"
          // eslint-disable-next-line no-unneeded-ternary
          error={Object.keys(formik.errors).length && formik.errors.lastName ? true : false}
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{ mt: 2 }}
        />

        <TextField
          name="username"
          label={t('field.userName')}
          size="small"
          // eslint-disable-next-line no-unneeded-ternary
          error={Object.keys(formik.errors).length && formik.errors.userName ? true : false}
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{ mt: 2 }}
        />

        <TextField
          name="phonenumber"
          label={t('field.phoneNumber')}
          size="small"
          // eslint-disable-next-line no-unneeded-ternary
          error={Object.keys(formik.errors).length && formik.errors.phoneNumber ? true : false}
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{ mt: 2 }}
        />

        <TextField
          name="email"
          label={t('field.email')}
          size="small"
          // eslint-disable-next-line no-unneeded-ternary
          error={Object.keys(formik.errors).length && formik.errors.email ? true : false} 
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{ mt: 2 }}
        />

        <TextField
            name="address"
            label={t('field.address')}
            size="small"
            multiline
            // eslint-disable-next-line no-unneeded-ternary
            // error={touched.email && errors.email ? true : false}
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

        <Stack direction="row" spacing={2}>
          <Stack>
            <ErrorTextComponent errors={formik.errors} touched={formik.touched} field="password">
              <TextField
                name="password"
                label={t('field.password')}
                size="small"
                type={showPassword ? 'text' : 'password'}
                // eslint-disable-next-line no-unneeded-ternary
                error={formik.touched.password && formik.errors.password ? true : false}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ mt: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </ErrorTextComponent>
          </Stack>
          <Stack>
            <ErrorTextComponent
              errors={formik.errors}
              touched={formik.touched}
              field="confirmPassword"
            >
              <TextField
                name="confirmPassword"
                label={t('field.confirmPassword')}
                size="small"
                type={showConfirmPassword ? 'text' : 'password'}
                // eslint-disable-next-line no-unneeded-ternary
                error={
                  !!(formik.touched.confirmPassword && formik.errors.confirmPassword)
                }
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ mt: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        edge="end"
                      >
                        <Iconify icon={showConfirmPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </ErrorTextComponent>
          </Stack>
        </Stack>
      </ErrorTextComponent>
    </FormComponent>
  )
}


FormUsers.propTypes = {
  formik: PropTypes.object,
  onSubmitForm: PropTypes.func,
  textBtn: PropTypes.string,
  initialValues: PropTypes.object
};