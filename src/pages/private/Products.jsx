import React from 'react'
import { Link } from 'react-router-dom'



export const Products = () => {
    return (
        <div className="container-background d-flex justify-content-center align-items-center"
            style={{ height: '100vh' }}
        >
            <nav className="navbar navbar-expand d-flex-column align-items-start" id="sidebar">
                <a href="#" className="navbar-brand text-light mt-5">
                    <div className="display-5 font-weight-bold">
                        Renzo
                    </div>
                </a>
                <ul className="navbar-nav d-flex-column flex-column mt-5 w-100">
                    <li className="nav-item w-100">
                        <a href="#" className="nav-link text-light pl-4">
                            Home
                        </a>
                    </li>
                    <li className="nav-item w-100">
                        <a href="#" className="nav-link text-light pl-4">
                            About
                        </a>
                    </li>
                </ul>
            </nav>



            <div className="w-50 text-center">
                <section className="p-4 my-container">
                    <button className="btn my-4" id="menu-btn">
                        SideBar
                    </button>
                </section>
                <h1>PRODUCTOS</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Laboratorio</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Acciones</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <th scope="row">1</th>
                            <td>Ibuprofeno</td>
                            <td>800 mg</td>
                            <td>Pancha Jhonson</td>
                            <td>S/. 2.00</td>
                            <td>50 u.</td>
                            <td>Tableta</td>
                            <td><a href="" class="btn btn-info">Editar</a></td>
                            <td><a href="" class="btn btn-danger">Eliminar</a></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Paracetamol</td>
                            <td>500 mg</td>
                            <td>Pharmed</td>
                            <td>S/. 0.50</td>
                            <td>100 u.</td>
                            <td>Tableta</td>
                            <td><a href="" class="btn btn-info">Editar</a></td>
                            <td><a href="" class="btn btn-danger">Eliminar</a></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Amoxicilina</td>
                            <td>120 ml</td>
                            <td>Genfar</td>
                            <td>S/. 7.00</td>
                            <td>15 u.</td>
                            <td>Jarabe</td>
                            <td><a href="" class="btn btn-info">Editar</a></td>
                            <td><a href="" class="btn btn-danger">Eliminar</a></td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Doloneurobion</td>
                            <td>2 ml</td>
                            <td>Dany</td>
                            <td>S/. 12.00</td>
                            <td>50 u.</td>
                            <td>Ampolla</td>
                            <td><a href="" class="btn btn-info">Editar</a></td>
                            <td><a href="" class="btn btn-danger">Eliminar</a></td>
                        </tr>
                    </tbody>
                </table>
                <a href="" class="btn btn-success">Agregar</a>
            </div>
        </div>
    )
}
