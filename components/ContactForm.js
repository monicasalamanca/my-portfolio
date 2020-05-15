import React from "react";
import styled from 'styled-components';
import useTranslation from '../hooks/useTranslations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; 

const FormStyle = styled.form`

  .form-style {
    display: flex;
    flex-direction: column;

    label {
      margin-top: 16px;
    }

    input {
      margin-top: 8px;
      border:1px solid black;
      padding: 8px;
      height: 32px;
      font-size: 18px;
    }

    button {
      margin-top: 16px;
      width: 150px;
      align-self: center;

      background-color: #ff7e30;
      border: none;
      font-size: 18px;
      color: #fff;
      padding: 8px;
    }

    .form-control {
      margin-bottom: 16px;
      display: flex;
      flex-direction: column;
    }

    .error {
      color: red;
      padding: 3px 0;
    }
  }

`

const initialValues = {
  name: 'Monica',
  email: '',
  channel: ''
}

const onSubmit = values => {
  console.log('Form Data', values)
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required!'),
  email: Yup.string().email('Invalid email format').required('Required!'),
  channel: Yup.string().required('Required!')
})

const ContactForm = () => {

  const { t } = useTranslation();

  return (
    <>
      <h1>{t('contact')}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <FormStyle>
        <Form className='form-style' >
          <div className='form-control'>
            <label htmlFor='name'>Name</label>
            <Field type='text' id='name' name='name' 
            />
            <ErrorMessage name='name' />
          </div>

          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <Field type='email' id='email'name='email' 
            />
            <ErrorMessage name='email' />
          </div>

          <div className='form-control'>
            <label htmlFor='channel'>Channel</label>
            <Field type='text' id='channel' name='channel' 
            />
            <ErrorMessage name='channel' />
          </div>

          <button type='submit'>Submit</button>
        </Form>
        </FormStyle>
      </Formik>
    </>
  )
}

export default ContactForm;