import React from 'react'
import { Card } from "../../components/Card";
import { Link } from 'react-router-dom'

export const Warehouse = () => {
    return (
        <div
            className="container-background d-flex justify-content-center align-items-center"
            style={{ height: '100vh'}}
            >
                <div className="w-50">
                    <Card
                        header={<h2 className="text-center">Nueva Registro</h2>}
                        footer={
                            <div className="d-flex justify-content-center align-items-center gap-2">
                            <p className="m-0">Registra ya</p>
                            </div> 
                        }
                 >
                    <form>
                        <div className="row mb-3">
                            <label className="col-6 form-label">
                                Motivo
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Ingrese motivo"
                                    className="form-control"
                                />
                            </label>
                            <label className="col-6 form-label">
                                Tipo
                                <input
                                    type="text"
                                    name="surname"
                                    placeholder="Ingrese tipo"
                                    className="form-control"
                                />
                            </label>
                        </div>
                        <div className="row mb-3">
                            <label className="col-6 form-label">
                                Cantidad
                                <input
                                    type="text"
                                    name="dni"
                                    placeholder="Ingrese cantidad"
                                    className="form-control"
                                />
                            </label>
                        </div>
                        <div className="mb-3 d-flex justify-content-center">
                            <button className="btn btn-primary w-50">Registrar</button>
                        </div>
                    </form>
                    </Card>
                </div>
                <div className="w-50 text-center">
                <h1>STOCK REGISTRADO</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Motivo</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Cantidad</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <th scope="row">1</th>
                            <td>Compra abastecimiento</td>
                            <td>Ingreso</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Productos vencidos</td>
                            <td>Ingreso</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Productos vencidos</td>
                            <td>Egreso</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Compra abastecimiento</td>
                            <td>Ingrso</td>
                            <td>20</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}