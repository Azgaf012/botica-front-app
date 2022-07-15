import React from 'react'
import Navbar from '../../../components/Navbar'
import Sidebar from '../../../components/Sidebar'

const ProductList = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">

          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="container-background d-flex justify-content-center align-items-center"
            style={{ height: '100vh' }}
        >
            


            <div className="w-50 text-center">
                
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
          </main>
        
        </div>
      </div>
    </div>
  )
}

export default ProductList