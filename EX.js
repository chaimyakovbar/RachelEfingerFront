import React from 'react';
import { Formik, Form, Field, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  age: Yup.number().required('Age is required').positive('Age must be positive'),
});

const initialValues = {
  name: '',
  email: '',
  age: '',
};

const CustomField = ({ name, label }) => {
  const { errors, touched } = useFormikContext();

  return (
    <div style={{ marginBottom: '20px' }}>
      <Field
        name={name}
        as={TextField}
        label={label}
        variant="outlined"
        fullWidth
        error={errors[name] && touched[name]}
        helperText={errors[name] && touched[name] ? errors[name] : ''}
      />
    </div>
  );
};

const FilterErrors = ({ errors, keysToFilter }) => {
  // סינון השגיאות במקור errors והצגת השגיאות המסוננות
  const filteredErrors = Object.keys(errors)
    .filter((key) => keysToFilter.includes(key))
    .reduce((obj, key) => {
      obj[key] = errors[key];
      return obj;
    }, {});

  return (
    <div>
      {Object.keys(filteredErrors).map((key) => (
        <div key={key} style={{ color: 'red' }}>
          {key}: {filteredErrors[key]}
        </div>
      ))}
    </div>
  );
};

const TooltipFormikForm = ({ fieldsToValidate }) => {
  const handleSubmit = (values) => {
    console.log(values);
    alert('Form Submitted');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors }) => (
        <Form>
          <CustomField name="name" label="Name" />
          <CustomField name="email" label="Email" />
          <CustomField name="age" label="Age" />

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>

          <FilterErrors errors={errors} keysToFilter={fieldsToValidate} />
        </Form>
      )}
    </Formik>
  );
};

// שימוש ברכיב עם רשימת השדות שצריכים ולידציה
const App = () => {
  const fieldsToValidate = ['name', 'email']; // מפתחות שאתה רוצה לבדוק ולידציה עבורם

  return <TooltipFormikForm fieldsToValidate={fieldsToValidate} />;
};

export default App;
