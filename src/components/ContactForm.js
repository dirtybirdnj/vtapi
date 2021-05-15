import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required')
});

const WithMaterialUI = () => {
  const formik = useFormik({
    initialValues: {
      email: 'email@domain.tld',
      name: 'Your Name',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"

          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <FormControl component="fieldset">
        <FormLabel component="legend">How would you like to talk?</FormLabel>
        <RadioGroup aria-label="type of request" name="requesttype">
            <FormControlLabel value="video" control={<Radio name="requesttype" />} label="Video" />
            <FormControlLabel value="email" control={<Radio name="requesttype" />} label="Email" />
            <FormControlLabel value="phone" control={<Radio name="requesttype" />} label="Phone" />
        </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
        <FormLabel component="legend">What do you need help with?</FormLabel>
        <RadioGroup aria-label="type of request" name="requesttype">
            <FormControlLabel value="addapi" control={<Radio name="requesttype" />} label="I need to add an API to a thing I already have" />
            <FormControlLabel value="apiintegrate" control={<Radio name="requesttype" />} label="I need my existing system to talk to a new API or third party service" />
            <FormControlLabel value="supportexisting" control={<Radio name="requesttype" />} label="I want support maintaining an existing web app" />
            <FormControlLabel value="fromscratch" control={<Radio name="requesttype" />} label="I have a business problem and I want to build something from scratch" />
            <FormControlLabel value="education" control={<Radio name="requesttype" />} label="I need help understanding some technology problem my business has" />
            <FormControlLabel value="creative" control={<Radio name="requesttype" />} label="I would like you to do something creative for our organization" />                                    
            <FormControlLabel value="other" control={<Radio name="requesttype" />} label="None of the above, what I need defies labels" />                                                
        </RadioGroup>
        </FormControl>

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default WithMaterialUI;
