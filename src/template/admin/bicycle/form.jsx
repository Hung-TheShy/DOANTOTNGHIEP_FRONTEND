import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { TextField } from "@mui/material";
// import Autocomplete from '@mui/material/Autocomplete';

import FormComponent from "src/components/form";
import ErrorTextComponent from "src/components/error-text";

export default function FormBicycle({formik, onSubmitForm, textBtn, initialValues}) {
  const { t } = useTranslation();
  // const categorybicycle = [
  //   {label: 'The Shawshank Redemption'}]
  return (
    <FormComponent formik={formik} textBtn={textBtn} handleSubmitForm={onSubmitForm} initialValues={initialValues}>
     
      <ErrorTextComponent
        errors={formik.errors}
        touched={formik.touched}
        field="bikeName"
        
      >
        <TextField
          name="bikeName"
          label={t('field.name')}
          size="small"
          // eslint-disable-next-line no-unneeded-ternary
          error={Object.keys(formik.errors).length && formik.errors.namebicycle ? true : false}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        </ErrorTextComponent>
      {/* <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={categorybicycle}
      sx={{ width: 1400 }}
      renderInput={(params) => <TextField {...params} label={t('field.catebicycle')} />}
    /> */}
      <ErrorTextComponent
        errors={formik.errors}
        touched={formik.touched}
        field="locationName"
        
      >
        <TextField
          name="locationName"
          label={t('field.location')}
          size="small"
          // eslint-disable-next-line no-unneeded-ternary
          error={Object.keys(formik.errors).length && formik.errors.namebicycle ? true : false}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        </ErrorTextComponent>
        <ErrorTextComponent
        errors={formik.errors}
        touched={formik.touched}
        field="lockName"
        
      >
        <TextField
          name="lockName"
          label={t('field.lock')}
          size="small"
          // eslint-disable-next-line no-unneeded-ternary
          error={Object.keys(formik.errors).length && formik.errors.namebicycle ? true : false}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        </ErrorTextComponent>
        <ErrorTextComponent
        errors={formik.errors}
        touched={formik.touched}
        field="statusName"
        
      >
        <TextField
          name="statusName"
          label={t('field.status')}
          size="small"
          // eslint-disable-next-line no-unneeded-ternary
          error={Object.keys(formik.errors).length && formik.errors.namebicycle ? true : false}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        </ErrorTextComponent>
    </FormComponent>
  )
}


FormBicycle.propTypes = {
  formik: PropTypes.object,
  onSubmitForm: PropTypes.func,
  textBtn: PropTypes.string,
  initialValues: PropTypes.object
};