import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import mountain from './img/mountain.jpeg'

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});

const LoginForm = () => (
  <Formik
    initialValues={{
      loginName: '',
      password: '',
    }}
    validationSchema={SignupSchema}
    onSubmit={values => console.log(values)}
  >
    {({errors, touched}) => (
      <Form className="col-12 col-md-6 mt-3 mt-mb-0">
        <h1 className="text-center mb-4">Войти</h1>

        <div className="form-floating mb-3">
          <Field name="username" type="text" required placeholder="Ваш Ник" id="username"  className="form-control"/>
          <label htmlFor="username">Ваш ник</label>
          {errors.username && touched.username ? (
            <div className="invalid-tooltip">{errors.username}</div>) : null}
        </div>

        <div className="form-floating mb-4">
          <Field name="password" type="password" placeholder="Пароль" required className="form-control"/>
          <label htmlFor="password">Пароль</label>
          {errors.password && touched.password ? (
            <div className="invalid-tooltip">{errors.password}</div>) : null}
        </div>
        <button type="submit" className="w-100 mb-3 btn btn-outline-primary">Submit</button>
      </Form>
    )}
  </Formik>
);


const Login = () => (
  <div className="d-flex flex-column h-100">
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="/">Hexlet Chat</a>
      </div>
    </nav>
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src={mountain} className="rounded-circle" alt="Войти"/>
              </div>
              <LoginForm/>
            </div>
            <div className="card-footer p-4">
              <div className="text-center">
                <span>Нет аккаунта? </span>
                {/*TODO: Добавить регистрацию*/}
                <a href="/">Регистрация</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)


export default Login;