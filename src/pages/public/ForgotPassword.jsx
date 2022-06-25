import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from "../../components/Card";

export const ForgotPassword = () => {
  return (
    <div 
        className="container-background d-flex justify-content-center align-items-center"
        style={{ height: '100vh'}}
        >
            <div className="w-50">
                <Card 
                    header={<h2 className="text-center">Recuperacion de Contraseña</h2>}
                    footer={
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <Link to="/login">Retroceder</Link>
                        </div>
                    }
                >
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput2" className="form-label">
                            Ingresar tu Correo Electronico para buscar tu cuenta
                        </label>
                        <input 
                            type="email" 
                            className="form-control input"
                            id="exampleFormCOntrolInput2"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div className='mb-3 d-flex justify-content-center'>
                        <button className='btn btn-primary'>Buscar</button>
                    </div>
                </Card>
            </div>
        </div>
)
}
