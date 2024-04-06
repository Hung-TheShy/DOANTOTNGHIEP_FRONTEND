import PropTypes from 'prop-types';

import { TextField } from "@mui/material";

import FormComponent from "src/components/form";
import ErrorTextComponent from "src/components/error-text";

export default function FormUsers({formik, onSubmitForm, textBtn, initialValues}) {
  return (
    <FormComponent formik={formik} textBtn={textBtn} handleSubmitForm={onSubmitForm} initialValues={initialValues}>
      <ErrorTextComponent
        errors={formik.errors}
        touched={formik.touched}
        field="firstName"
        
      >
        <TextField
          name="firstName"
          label="First name"
          size="small"
          // eslint-disable-next-line no-unneeded-ternary
          // error={Object.keys(formik.errors).length && formik.errors.email ? true : false}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
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