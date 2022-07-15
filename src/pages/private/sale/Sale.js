import React from 'react'
import { Card } from '../../../components/Card'
import Navbar from '../../../components/Navbar'
import Sidebar from '../../../components/Sidebar'

const Sale = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">

          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div
        className="container-background d-flex justify-content-center align-items-center"
        style={{ height: '100vh'}}
        >
            <div className="w-50">
                <Card
                    header={<h2 className="text-center">Nueva Venta</h2>}
                    footer={
                        <div className="d-flex justify-content-center align-items-center gap-2">
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
                    <h1> Productos</h1>
                        <input type="search" placeholder="Buscar producto"></input>
                        <button href="#" className="btn btn-primary">Buscar</button>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Total</th>
                                <th scope="col">Acciones</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                        <tr>
                            <th scope="row">2</th>
                            <td>Ibuprofeno</td>
                            <td>S/. 2.00</td>
                            <td>S/. 4.00</td>
                            <td><a href="" class="btn btn-info">Editar</a></td>
                            <td><a href="" class="btn btn-danger">Eliminar</a></td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Paracetamol</td>
                            <td>S/. 0.50</td>
                            <td>S/. 2.00</td>
                            <td><a href="" class="btn btn-info">Editar</a></td>
                            <td><a href="" class="btn btn-danger">Eliminar</a></td>
                        </tr>
                        
                    </tbody>
                    </table>
                <div>
                    <h3>Total a Pagar</h3>
                </div>
                </form>
                </Card>
        </div>
    </div>
          </main>
        
        </div>
      </div>
    </div>
  )
}

export default Sale