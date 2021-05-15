import { Formik, Field, Form } from 'formik';
import * as Yup from "yup";

import styled from 'styled-components';

const Container = styled.div`

`;

function Contact({
  ...props
}) {

  return (
    <Container {...props}>
    <Formik
      initialValues={{ email: "", contactName: "" }}
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <Form onSubmit={handleSubmit}>

            <label htmlFor="email" style={{ display: "block" }}>
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}


<label htmlFor="contactName" style={{ display: "block" }}>
              Name
            </label>
            <input
              id="contactName"
              placeholder="Enter your name"
              type="text"
              value={values.contactName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.contactName && touched.contactName
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.contactName && touched.contactName && (
              <div className="input-feedback">{errors.contactName}</div>
            )}

          <div id="contact-method-radio">What contact method do you prefer?</div>
          <div role="group" aria-labelledby="contact-method-radio">
            <label>
              <Field type="radio" name="picked" value="email" />
              Email
            </label>
            <label>
              <Field type="radio" name="picked" value="telephone" />
              Telephone
            </label>

            <label>
              <Field type="radio" name="picked" value="video" />
              Video (Google / Zoom etc)
            </label>

            <div>Picked: {values.picked}</div>
          </div>

          <div id="request-type-radio">What would you like help with?</div>
          <div role="group" aria-labelledby="request-type-radio">
            <label>
              <Field type="radio" name="picked" value="fix" />
              I need to add an API to a thing I already have
            </label>
            <label>
              <Field type="radio" name="picked" value="add-api" />
              I need my existing system to talk to a new API or third party service
            </label>

            <label>
              <Field type="radio" name="picked" value="maintanence" />
              I want support maintaining an existing web app
            </label>

            <label>
              <Field type="radio" name="picked" value="educate" />
              I need help understanding some technology problem my business has
            </label>

            <label>
              <Field type="radio" name="picked" value="creative" />
              I would like you to do something creative for our organization
            </label>
            <div>Picked: {values.picked}</div>
          </div>

            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
    </Container>
  );
}

export default Contact;
