import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";

import { useState } from "react";
import { helpHttp } from "../../helper/helpHpttp";

export const Login = () => {

  const navigate = useNavigate();

  let api = helpHttp();

  const [datos, setDatos] = useState({
    userName: "",
    password: "",
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
      api.post("http://localhost:8080/api/v1/auth/login", {body: datos}).then((res) => {
        document.cookie=`token=${res.token}; max-age=${60 * 30}; path=/; samesite=stric`
      });
      navigate('/dashboard')
      /* api.get("http://localhost:8080/api/v1/auth/userinfo",{headers: {'Authorization': document.cookie.replace('token=','Bearer ')} }).then((res)=>{
        console.log(res)
      }) */
    }
  };

  return (
    <div className="container-background d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="w-25">
        <Card
          header={<h2 className="text-center">Inicio de Sesion</h2>}
          footer={
            <div className="d-flex justify-content-center align-items-center gap-2">
              <p className="m-0">Botica Luz Divina</p>
            </div>
          }
        >
          <form onSubmit={handleSubmit} className="" noValidate={true} autoComplete="off">
            <div className="mb-3">
              <label htmlFor="user" className="form-label">
                Usuario
              </label>
              <input onChange={handleInputChange} value={datos.userName} type="text" className="form-control" name="userName" id="userName" placeholder="Ingrese un usuario" required/>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Contraseña
              </label>
              <input onChange={handleInputChange} value={datos.password} type="password" className="form-control" name="password" id="password" placeholder="******" required />
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            </div>
          </form>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <p className="m-0"></p>
            
          </div>
        </Card>
      </div>
    </div>
  );
};
