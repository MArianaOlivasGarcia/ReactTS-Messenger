import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';
import { AuthLayout } from "../layout/AuthLayout"


export const LoginPage = () => {

  const { login } = useContext( AuthContext );

  const [isLoading, setIsLoading] = useState(false);


  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
        email: localStorage.getItem('email') || '',
        password: '',
        remember: false
    },
    onSubmit: async ( {email, password, remember } ) => {
      
      setIsLoading(true);

      console.log({email, password} );

      remember ? localStorage.setItem('email', email) : localStorage.removeItem('email');

      const status = await login(email, password);

      if ( !status ) {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'Credenciales incorrectas.'
        })
      }

      setIsLoading(false);


    },
    validationSchema: Yup.object({
        email: Yup.string()
          .email('Correo electrónico no válido.')
          .required('Este campo es requerido.'),
        password: Yup.string()
          .min( 6, 'Mínimo 6 carácteres.')
          .required('Este campo es requerido.'),
        remember: Yup.boolean()
    })
  })


  return (
    <AuthLayout>
      <h4>Iniciar sesión</h4>
      <p className="text-muted">Inicia sesión para continuar</p>

      <form noValidate onSubmit={ handleSubmit }>

        <div className="mt-3">
          <label>Correo electrónico</label>
          <input 
            type="email" 
            className="form-control" 
            placeholder="example@example.com"
            { ...getFieldProps('email') }
          />
          { touched.email && errors.email && <span className="text-danger">{ errors.email }</span> }
        </div>

        <div className="mt-3">
          <label>Contraseña</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Contraseña"
            { ...getFieldProps('password') }
          />
          { touched.password && errors.password && <span className="text-danger">{ errors.password }</span> }
        </div>

        <div className="form-check mt-3">
          <input 
            className="form-check-input" 
            type="checkbox"
            id="flexCheckDefault" 
            { ...getFieldProps('remember') }/>
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Recuerdame
          </label>
        </div>

        <div className="mt-4">
          <button 
            disabled={ isLoading }
            type='submit'
            className="btn btn-primary">Iniciar sesión</button>
        </div>

      </form>
    </AuthLayout>
  )
}
