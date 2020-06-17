import React from "react";
import styled from 'styled-components';
import useTranslation from '../hooks/useTranslations';
import { useFormik } from 'formik';
import * as Yup from 'yup'; 

const FormStyle = styled.form`
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
`

const initialValues = {
  name: 'Monica',
  email: '',
  channel: ''
}

const onSubmit = values => {
  console.log('Form Data', values)
}

const validate = values => {
  let errors = {};

  if(!values.name) {
    errors.name = 'Required'
  }
  if(!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invaldi email format'
  }

  if(!values.channel) {
    errors.channel = 'Required'
  }
  return errors;
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required!'),
  email: Yup.string().email('Invalid email format').required('Required!'),
  channel: Yup.string().required('Required!')
})

const ContactForm = () => {

  const { t } = useTranslation();
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })

  console.log('Visited Fields', formik.touched)

  return (
    <>
      <h1>{t('contact')}</h1>
      <FormStyle onSubmit={formik.handleSubmit} >
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input 
            type='text' 
            id='name' 
            name='name' 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            value={formik.values.name} 
          />
          { formik.touched.name && formik.errors.name ? (
            <div className='error'>{formik.errors.name}</div> 
          ): null }
        </div>

        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input 
            type='email' 
            id='email' 
            name='email' 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            value={formik.values.email} 
          />
          { formik.touched.email && formik.errors.email ? (
            <div className='error'>{formik.errors.email}</div> 
          ): null }
        </div>

        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <input 
            type='text' 
            id='channel' 
            name='channel' 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            value={formik.values.channel} 
          />
          { formik.touched.channel && formik.errors.channel ? (
            <div className='error'>{formik.errors.channel}</div> 
          ): null }
        </div>

        <button type='submit'>Submit</button>
      </FormStyle>
    </>
  )
}

export default ContactForm;