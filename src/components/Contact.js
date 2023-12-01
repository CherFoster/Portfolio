import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
// import '../styles/Contact.css';
import { Form, Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import emailjs from 'emailjs-com';

function Contact(){
  const formSchema = yup.object().shape({
    name: yup.string().required('Name is requres'),
    email: yup.string().email("Invalid email").required("Email is required"),
    message: yup.string().required("Message is required"),
  });

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    emailjs.send('service_gikpxrx', 'template_2rdg5ci', values, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        resetForm();
        setSubmitting(false);
      }, (error) => {
        console.log(error.text);
        setSubmitting(false);
      });
    };

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
        >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>Name</FormLabel>
            <Field name="name" as={FormControl} />
            <ErrorMessage name="name" component="div" className="error-message" />
          </FormGroup>

          <FormGroup>
            <FormLabel>Email</FormLabel>
            <Field name="email" type="email" as={FormControl} />
            <ErrorMessage name="email" component="div" className="error-message" />
          </FormGroup>

          <FormGroup>
            <FormLabel>Message</FormLabel>
            <Field name="message" as="textarea" className="form-control" />
            <ErrorMessage name="message" component="div" className="error-message" />
          </FormGroup>

          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default Contact;