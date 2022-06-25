import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Card } from "../../components/Card";

export const Register = () => {
    return (
        <div
            className="container-background d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
        >
            <div className="w-50">
                <Card
                    header={<h2 className="text-center">Registro</h2>}
                    footer={
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <p className="m-0">¿Ya tienes una cuenta?</p>
                            <Link to="/login">Iniciar Sesion</Link>
                        </div>
                    }
                >
                    <form>
                        <div className="row mb-3">
                            <label className="col-6 form-label">
                                Nombres
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Nombres"
                                    className="form-control"
                                />
                            </label>
                            <label className="col-6 form-label">
                                Apellidos
                                <input
                                    type="text"
                                    name="surname"
                                    placeholder="Apellidos"
                                    className="form-control"
                                />
                            </label>
                        </div>
                        <div className="row mb-3">
                            <label className="col-6 form-label">
                                Dni
                                <input
                                    type="text"
                                    name="dni"
                                    placeholder="71986383"
                                    className="form-control"
                                />
                            </label>
                            <label className="col-6 form-label">
                                Correo Electronico
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="correo@example.com"
                                    className="form-control"
                                />
                            </label>
                        </div>
                        <div className="row mb-3">
                            <label className="col-6 form-label">
                                Celular
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="985007004"
                                    className="form-control"
                                />
                            </label>
                            <label className="col-6 form-label">
                                Contraseña
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="********"
                                    className="form-control"
                                />
                            </label>
                        </div>
                        <div className="row mb-3">
                            <label className="col-6 form-label">
                                Fecha de Ingreso
                                <input
                                    type="date"
                                    name="joindate"
                                    placeholder="10-01-2021"
                                    className="form-control"
                                />
                            </label>
                            <label className="col-6 form-label">
                                Repetir Contraseña
                                <input
                                    type="repassword"
                                    name="repassword"
                                    placeholder="******"
                                    className="form-control"
                                />
                            </label>
                        </div>
                        <div className="mb-3 d-flex justify-content-center">
                            <button className="btn btn-primary w-50">Registrarse</button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
};
