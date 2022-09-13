
import { FC } from "react"

interface Props {
    children: React.ReactNode; 
}

export const AuthLayout: FC<Props> =  ({ children }) => {



  return (
    <div className="vw-100 vh-100 d-flex justify-content-center flex-column authContainer" style={{}} >


        <div style={{ width: '70%', height: '60%', borderRadius: 10 }} className='row m-auto border p-1  bg-white shadow'>
            <div className="col-md-6 p-0 d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-primary">Messenger</h2>
                <img 
                  style={{ width: '100%',  objectFit: 'cover' }}
                  src="https://img.freepik.com/vector-gratis/grupo-personas-charlando-si-telefono_74855-10709.jpg?w=1800&t=st=1663101694~exp=1663102294~hmac=2bea88d69e1ddac64c1949aa07c6bfd137942c3488e37a21d888b226a564d99d" 
                  alt="" />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              { children }
            </div>
        </div>
      

    </div>
  )
}
