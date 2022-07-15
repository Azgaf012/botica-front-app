import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link active" to="/dashboard">
              <i class="bi bi-house-heart" style={{ fontSize: 20, marginRight: "10px" }} />
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/products" style={{ textDecoration: "none" }}>
                <i class="bi bi-bandaid" style={{ fontSize: 20, marginRight: "10px" }} />
                Productos
              </Link>
              <span data-feather="file"></span>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/kardex">
                <i class="bi bi-clipboard" style={{ fontSize: 20, marginRight: "10px" }} />
                Inventario
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/sale">
                <i class="bi bi-cart" style={{ fontSize: 20, marginRight: "10px" }} />
                Venta
              </Link>
            </li>
          </ul>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Reportes</span>
            <a className="link-secondary" href="#" aria-label="Add a new report">
              <span data-feather="plus-circle"></span>
            </a>
          </h6>
          <ul className="nav flex-column mb-2">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="file-text"></span>
                Reporte de ventas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="file-text"></span>
                Reporte de productos
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
