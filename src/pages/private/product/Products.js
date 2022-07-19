import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import { helpHttp } from "../../../helper/helpHpttp";

const ProductList = () => {
  let api = helpHttp();
  let url = "http://localhost:8080/products/list";

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    helpHttp()
      .get(url, { headers: { Authorization: document.cookie.replace("token=", "Bearer ") } })
      .then((res) => {
        if (!res.err) {
          setProducts(res);
          setError(null);
        } else {
          setProducts(null);
          setError(res);
        }
        //setLoading(false);
      });
  }, [url]);

  /* api.get(url, { headers: { Authorization: document.cookie.replace("token=", "Bearer ") } }).then((res) => {
    setProducts(res);
  });
  console.log(products); */

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-8 py-md-4">
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h3>Lista de productos</h3>
                <Link className="nav-link" to="/dashboard/products/new">
                  <button className="btn btn-success">Nuevo</button>
                </Link>
              </div>
              <div className="card-body">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Producto</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Laboratorio</th>
                      <th scope="col">Categoria</th>
                      <th scope="col" className="text-center">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.length === 0 ? (
                      <tr>
                        <td colSpan={7}>No hay productos registrados</td>
                      </tr>
                    ) : (
                      products.map((p) => (
                        <tr key={p.id}>
                          <td>{p.id}</td>
                          <td>{p.name}</td>
                          <td>{p.cant}</td>
                          <td>{p.laboratory}</td>
                          <td></td>
                          <td className="d-flex justify-content-center">
                            <Link className="nav-link" to="/dashboard/kardex">
                              <button className="btn btn-primary btn-sm">Editar</button>
                            </Link>
                            <Link className="nav-link" to="/dashboard/kardex">
                              <button className="btn btn-danger btn-sm">Eliminar</button>
                            </Link>
                          </td>
                          <td></td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              <div className="card-footer text-muted">Hace 2 días</div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
