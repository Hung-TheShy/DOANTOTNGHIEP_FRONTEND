import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { TextField } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';

import FormComponent from "src/components/form";
import ErrorTextComponent from "src/components/error-text";

export default function FormBicycle({formik, onSubmitForm, textBtn, initialValues}) {
  const { t } = useTranslation();
  const categorybicycle = [
    {label: 'The Shawshank Redemption'}]
  return (
    <FormComponent formik={formik} textBtn={textBtn} handleSubmitForm={onSubmitForm} initialValues={initialValues}>
      <ErrorTextComponent
        errors={formik.errors}
        touched={formik.touched}
        field="namebicycle"
        
      >
        <TextField
          name="namebicycle"
          label={t('field.namebicycle')}
          size="small"
          // eslint-disable-next-line no-unneeded-ternary
          error={Object.keys(formik.errors).length && formik.errors.namebicycle ? true : false}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={categorybicycle}
      sx={{ width: 1400 }}
      renderInput={(params) => <TextField {...params} label={t('field.catebicycle')} />}
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