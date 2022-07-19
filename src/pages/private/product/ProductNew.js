import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import { helpHttp } from "../../../helper/helpHpttp";

const ProductNew = () => {
  let api = helpHttp();
  const navigate = useNavigate();

  const [datos, setDatos] = useState({
    name: "",
    cant: "",
    unitMeasurement: "",
    price: 0.0,
    laboratory: "",
    stock: 0,
  });

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    let newDatos = { ...datos, [name]: value };
    setDatos(newDatos);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      console.log("no enviar");
    } else {
      api.post("http://localhost:8080/products/register", { headers: { Authorization: document.cookie.replace("token=", "Bearer ") }, body: datos });
      navigate("/dashboard/products");
      /* api.get("http://localhost:8080/api/v1/auth/userinfo",{headers: {'Authorization': document.cookie.replace('token=','Bearer ')} }).then((res)=>{
        console.log(res)
      }) */
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-8 py-md-4">
            <div className="row g-5">
              <div className="col-10">
                <h4 className="mb-3">Registro de nuevo producto</h4>
                <form onSubmit={handleSubmit} className="needs-validation" noValidate={true} autoComplete="off">
                  <div className="row g-3">
                    <div className="col-12">
                      <label htmlFor="name" className="form-label">
                        Nombre
                      </label>
                      <input type="text" onChange={handleInputChange} value={datos.name} className="form-control" id="name" name="name" placeholder="" required />
                      <div className="invalid-feedback">El nombre es requerido</div>
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label htmlFor="laboratory" className="form-label">
                        Laboratorio
                      </label>
                      <input type="text" onChange={handleInputChange} value={datos.laboratory} className="form-control" id="laboratory" name="laboratory" placeholder="" required />
                      <div className="invalid-feedback">El laboratorio es requerido.</div>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="unitMeasurement" className="form-label">
                        Unidad de medida
                      </label>
                      <input type="text" onChange={handleInputChange} value={datos.unitMeasurement} className="form-control" id="unitMeasurement" name="unitMeasurement" placeholder="" required />
                      <div className="invalid-feedback">La unidad de medida es requerida.</div>
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label htmlFor="cant" className="form-label">
                        Cantidad
                      </label>
                      <input type="text" onChange={handleInputChange} value={datos.cant} className="form-control" id="cant" name="cant" placeholder="" required />
                      <div className="invalid-feedback">El laboratorio es requerido.</div>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="price" className="form-label">
                        Precio
                      </label>
                      <input type="text" onChange={handleInputChange} value={datos.price} className="form-control" id="price" name="price" placeholder="" required />
                      <div className="invalid-feedback">La unidad de medida es requerida.</div>
                    </div>
                  </div>
                  <hr className="my-4" />

                  <button className="w-100 btn btn-primary btn-MD" type="submit">
                    Registrar
                  </button>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductNew;
