import React from 'react'
import { Card } from "../../components/Card";
import { Link } from 'react-router-dom'

export const Sales = () => {
  return (
    <div
        className="container-background d-flex justify-content-center align-items-center"
        style={{ height: '100vh'}}
        >
            <div className="w-50">
                <Card
                    header={<h2 className="text-center">Nueva Venta</h2>}
                    footer={
                        <div className="d-flex justify-content-center align-items-center gap-2">}
                        <p className="m-0">¿Ya tienes una cuenta?</p>
                        </div> 
                    }
            >
                <form>
                    <div className="row mb-3">
                        <label className="col-6 form-label">
                            Nombres y Apellidos
                            <input
                                type="text"
                                name="nombres"
                                placeholder="Noemi Vasquez"
                                className="form-control"
                                />
                        </label>
                        <label className="col-6 form-label">
                            Fecha de Venta
                            <input
                                type="date"
                                name="date"
                                placeholder="28-06-2022"
                                className="form-control"
                                />
                        </label>
                    </div>
                </form>
                </Card>
        </div>
    </div>
  )
}
