import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Axios from 'axios';
import styled from 'styled-components';
import { isMobileOnly } from 'react-device-detect';
import ReCAPTCHA from "react-google-recaptcha";

import divider from '../svgs/divider.svg';

const Container = styled.div`
width: 100%;
height: 100%;
justify-content: center;
text-align: center;
display: flex;

fieldset {
  display: block;
  margin: 10px 0;
}

legend {
  text-align: left;
  margin: 20px 0px;
}

label {
  align-items: flex-start;
  margin-right: 0;
  padding-bottom: 10px;

  span:first-of-type {
    padding 0px 5px;
  }
}

span {
  text-align: left;
}

h1 {
  font-size: 5em;
  margin-bottom: .3em;
  font-weight: 800;
}

$.recaptcha {

  justify-content : center,
  width: 100%,
  text-align: center,
  display: flex
}
`;

const StyledReCAPTCHA = styled(ReCAPTCHA)`
  border: 1px solid red;
  justify-content : center,
  text-align: center,
  display: flex;
`;

const Spacer = styled.div`
  width: 100%;
  text-align: center;
  justify-content: center;
  margin: 1em 0px;
`;

const Float = styled.div`
  width: ${isMobileOnly ? '90%' : '70%'};
`;

const FormCompleteMessage = styled.div`
  border: 1px solid red;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  h2, p {
    text-align: center;
  }

`;


const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  details: yup
    .string('Enter a brief description of your request')
    .required('Details about the request are required'),
  recaptcha: yup
    .string()
    .required(),
});


const SubmitGoogleForm = (email, name, contactMethod, helpType, freeTypeField, reciept) => {

  const dataString = "entry.524352911=" + encodeURI(name) +
    "&entry.183003631=" + encodeURI(freeTypeField) +
    "&entry.1855206624=" + encodeURI(contactMethod) +
    "&entry.1255994120=" + encodeURI(helpType) +
    "&emailAddress=" + encodeURI(email) +
    "&emailReciept=" + encodeURI(reciept)

    console.log(dataString);

  Axios({
    "method": "POST",
    "url": "https://docs.google.com/forms/u/0/d/e/1FAIpQLScvkfFexfBDw-omKtuuCGDSE38AlYX7bCGHs2veLtgY8ymu5Q/formResponse",
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      "Cookie": "S=spreadsheet_forms=hmjPgsJML3911IbuPqGHhLDejYaBEnjTUBtU5N7g9Aw; NID=216=WtmOO5ltpe4hbI1dAP9_hii3YXAHfMUvvtylSeu-6GlQiISfQ8koNgCK-440pF9OUpvKDWkoS2d7HUEG_aM8sxc3hj2DKFsWyP7cCFLh9pRjstk--NTdxQg7TZHH58ibw-AH7yr9i5W49QrtvhAQY88rdVCE1bum6MmkuM2NnCc"
    },
    "data": dataString
  }).then((e) => {

    // console.log(dataString);
    console.log(e, 'form submitted, inside axios');


  }).catch(function (error) {
    // handle error
    console.log('axios error', error);
  });

}
//const WithMaterialUI = ({ values, errors, touched, handleSubmit, setFieldValue }) => {
const WithMaterialUI = () => {

  let formSubmitted = false;
  // this.state = { formSubmitted: false };

  const formik = useFormik({

    initialValues: {
      email: '',
      name: '',
      contacttype: '',
      requesttype: '',
      sendreciept: true
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      console.log('about to submit to google',values);
      //this.state = { formSibmitted: true };
      SubmitGoogleForm(values.email, values.name, values.contacttype, values.requesttype, values.details, values.sendreciept).then(() => {
        console.log('form submitted / done')
        console.log(formSubmitted);
      });


    },
    onChange: (values) => {
      console.log('something changed', values);
    }
  });

  if(!formSubmitted){
    return(
    <Container>
    <Float>
    <form id="contactForm" onSubmit={formik.handleSubmit}>
      <Spacer>
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      </Spacer>

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
      <FormControl component="fieldset">
      <FormLabel component="legend">How would you like to talk?</FormLabel>
      <RadioGroup aria-label="type of request" name="contacttype" value={formik.values.contacttype} onChange={formik.handleChange}>
          <FormControlLabel value="video" control={<Radio name="contacttype" value="Video" />} label="Video" />
          <FormControlLabel value="email" control={<Radio name="contacttype" value="Email" />} label="Email" />
          <FormControlLabel value="phone" control={<Radio name="contacttype" value="Phone" />} label="Phone" />
      </RadioGroup>
      </FormControl>

      <FormControl component="fieldset">
      <FormLabel component="legend">What do you need help with?</FormLabel>
      <RadioGroup aria-label="type of request" name="requesttype" value={formik.values.requesttype} onChange={formik.handleChange}>
          <FormControlLabel value="addapi" control={<Radio name="requesttype" value="I need to add an API to a thing I already have" />} label="I need to add an API to a thing I already have" />
          <FormControlLabel value="apiintegrate" control={<Radio name="requesttype" value="I need my existing system to talk to a new API or third party service"/>} label="I need my existing system to talk to a new API or third party service" />
          <FormControlLabel value="supportexisting" control={<Radio name="requesttype" value="I want support maintaining an existing web app" />} label="I want support maintaining an existing web app" />
          <FormControlLabel value="fromscratch" control={<Radio name="requesttype" value="I have a business problem and I want to build something from scratch"  />} label="I have a business problem and I want to build something from scratch" />
          <FormControlLabel value="education" control={<Radio name="requesttype" value="I need help understanding some technology problem my business has"  />} label="I need help understanding some technology problem my business has" />
          <FormControlLabel value="creative" control={<Radio name="requesttype" value="I would like you to do something creative for our organization" />} label="I would like you to do something creative for our organization" />
      </RadioGroup>
      </FormControl>
      </Spacer>

      <Spacer>

      <FormControl component="fieldset">
      <FormLabel component="legend">Please provide some details about your request</FormLabel>
      <TextField
        fullWidth
        id="details"
        name="details"
        multiline
        rows={4}
        defaultValue=""
        value={formik.values.details}
        onChange={formik.handleChange}
        error={formik.touched.details && Boolean(formik.errors.details)}
        helperText={formik.touched.details && formik.errors.details}
      />
      </FormControl>
      </Spacer>

      <Spacer>
      <FormControlLabel
        checked
        control={<Checkbox checked={formik.values.sendreciept} onChange={formik.handleChange} name="sendreciept" />}
        label="Send yourself a reciept of this form?"
      />
      </Spacer>

      <Spacer>
      <StyledReCAPTCHA
        className="recaptcha"
        sitekey="6LcH8wYbAAAAAPfLmsbEMXlf3itigDV-NTsGdGdv"
        onChange={formik.handleChange}
        render="explicit"
      />
      </Spacer>

      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </form>
    <Spacer>
     <img src={divider} alt="visual divider" />
   </Spacer>
    </Float>
    </Container>
    );
  } else {
    return(
    <Container>
      <Float>
        <FormCompleteMessage>
          <h2>Thanks for reaching out!</h2>
          <p>We generally try to respond to requests within 24 to 36 hours.</p>
          <p>Have a great day and thank you for saying hello!</p>
        </FormCompleteMessage>
    </Float>
    </Container>
    );
  }

};

export default WithMaterialUI;
