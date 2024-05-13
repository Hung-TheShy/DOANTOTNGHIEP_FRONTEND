import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';
import { Box, TextField } from "@mui/material";

import FormComponent from "src/components/form";
import ErrorTextComponent from "src/components/error-text";

export default function FormUsers({formik, onSubmitForm, textBtn, initialValues}) {
  const { t } = useTranslation();

  return (
    <Stack spacing={2} alignItems="left" justifyContent="left" marginLeft={10}>
    <FormComponent formik={formik} textBtn={textBtn} handleSubmitForm={onSubmitForm} initialValues={initialValues}>
      <Box mb={2}>
       <ErrorTextComponent errors={formik.errors} touched={formik.touched} field="stationName">
              <TextField
                name="stationName"
                label={t('field.namestation')}
                size="small"
                sx={{width: 700, maxWidth: 700, marginBottom: 10}}
                // eslint-disable-next-line no-unneeded-ternary
                error={formik.touched.stationName && formik.errors.stationName ? true : false}
                value={formik.values.stationName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </ErrorTextComponent>
            </Box>
            <Box mb={2}>
        <ErrorTextComponent errors={formik.errors} touched={formik.touched} field="quantityAvaiable">
          <TextField
            name="quantityAvaiable"
            label={t('field.quantity')}
            size="small"
            sx={{width: 700, maxWidth: 700, marginBottom: 10}}
            // eslint-disable-next-line no-unneeded-ternary
            error={formik.touched.quantityAvaiable && formik.errors.quantityAvaiable ? true : false}
            value={formik.values.quantityAvaiable}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </ErrorTextComponent>
      </Box>
          <Box mb={2}>
            <ErrorTextComponent errors={formik.errors} touched={formik.touched} field="numOfSeats">
          <TextField
            name="numOfSeats"
            label={t('field.numofseats')}
            size="small"
            sx={{width: 700, maxWidth: 700, marginBottom: 10}}
            // eslint-disable-next-line no-unneeded-ternary
            error={formik.touched.numOfSeats && formik.errors.numOfSeats ? true : false}
            value={formik.values.numOfSeats}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </ErrorTextComponent>
        </Box>
      <Box mb={2}>
        <ErrorTextComponent errors={formik.errors} touched={formik.touched} field="locationName">
          <TextField
            name="locationName"
            label={t('field.locationName')}
            size="small"
            sx={{width: 700, maxWidth: 700, marginBottom: 10}}
            // eslint-disable-next-line no-unneeded-ternary
            error={formik.touched.locationName && formik.errors.locationName ? true : false}
            value={formik.values.locationName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </ErrorTextComponent>
      </Box>
      <Box mb={2}>
        <ErrorTextComponent errors={formik.errors} touched={formik.touched} field="statusName">
          <TextField
            name="statusName"
            label={t('field.status')}
            size="small"
            sx={{width: 700, maxWidth: 700, marginBottom: 10}}
            // eslint-disable-next-line no-unneeded-ternary
            error={formik.touched.statusName && formik.errors.statusName ? true : false}
            value={formik.values.statusName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </ErrorTextComponent>
      </Box>
    </FormComponent>
    </Stack>
  )
}


FormUsers.propTypes = {
  formik: PropTypes.object,
  onSubmitForm: PropTypes.func,
  textBtn: PropTypes.string,
  initialValues: PropTypes.object
};