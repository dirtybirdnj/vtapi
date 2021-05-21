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
import Axios from 'axios';



import styled from 'styled-components';

const Container = styled.div`
width: 50%;
margin-left: .5em;
margin-right: .5em;
justify-content: center;
text-align: center;
`;

const Spacer = styled.div`
  width: 100%;
  text-align: center;
  justify-content: center;
  margin: 1em 0px;
`;


const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required')
});


const SubmitGoogleForm = (email, name, contactMethod, helpType, freeTypeField) => {

  axios({
    "method": "POST",
    "url": "https://docs.google.com/forms/u/0/d/e/1FAIpQLScvkfFexfBDw-omKtuuCGDSE38AlYX7bCGHs2veLtgY8ymu5Q/formResponse",
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      "Cookie": "S=spreadsheet_forms=hmjPgsJML3911IbuPqGHhLDejYaBEnjTUBtU5N7g9Aw; NID=216=WtmOO5ltpe4hbI1dAP9_hii3YXAHfMUvvtylSeu-6GlQiISfQ8koNgCK-440pF9OUpvKDWkoS2d7HUEG_aM8sxc3hj2DKFsWyP7cCFLh9pRjstk--NTdxQg7TZHH58ibw-AH7yr9i5W49QrtvhAQY88rdVCE1bum6MmkuM2NnCc"
    },
    "data": "entry.524352911=Tam+Treblig&entry.183003631=I+found+a+big+hole+in+the+woods.+Scary+shit+came+out%2C+help+come+save+the+village.&entry.1855206624=Video+%2F+Screenshare&entry.1255994120=I+need+my+existing+system+to+talk+to+a+new+API+or+third+party+service&emailAddress=matgilbert%2Bvtapi4%40gmail.com&emailReciept=true"
  });

}

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
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Spacer>
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
        </Spacer>

        <Spacer>
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
        </Spacer>

        <Spacer>
        <FormControl component="fieldset">
        <FormLabel component="legend">How would you like to talk?</FormLabel>
        <RadioGroup aria-label="type of request" name="contacttype">
            <FormControlLabel value="video" control={<Radio name="contacttype" id="contacttype" />} label="Video" />
            <FormControlLabel value="email" control={<Radio name="contacttype" id="contacttype" />} label="Email" />
            <FormControlLabel value="phone" control={<Radio name="contacttype" id="contacttype" />} label="Phone" />
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
        </Spacer>

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default WithMaterialUI;
