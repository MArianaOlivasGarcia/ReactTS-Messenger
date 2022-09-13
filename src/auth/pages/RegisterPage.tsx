
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { AuthContext } from '../context/AuthContext';
import { AuthLayout } from "../layout/AuthLayout"


export const RegisterPage = () => {

  const { register } = useContext( AuthContext );

  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
        email: '',
        password: '',
        fullName: ''
    },
    onSubmit: async ( {email, password, fullName} ) => {

      setIsLoading(true);

      console.log({email, password, fullName} );


      const resp = await register(fullName, email, password);

      if ( !resp.status ) {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: `${ resp.message }`
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
        fullName: Yup.string()
          .required('Este campo es requerido.')
    })
  })


  return (
    <AuthLayout>
      <h4>Registro</h4>
      <p className="text-muted">Crea una cuenta para continuar</p>

      <form noValidate onSubmit={ handleSubmit }>

        <div className="mt-3">
          <label>Nombre completo</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Nombre completo"
            { ...getFieldProps('fullName') }
          />
          { touched.fullName && errors.fullName && <span className="text-danger">{ errors.fullName }</span> }
        </div>

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

        <div className="mt-4">
          <button 
            type='submit' 
            disabled={ isLoading }
            className="btn btn-primary">Registrarme</button>
        </div>

      </form>
    </AuthLayout>
  )
}
