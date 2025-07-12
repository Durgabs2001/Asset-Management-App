import React from 'react'
import { NavLink } from 'react-router-dom'

function AdminDash() {
  return (
    <div>
        <div className='col-md-2 bg-success h-100'>
                  <div className='p-3'>
                    <h4 className='text-light mb-4'><b>ASSET BOOKING</b></h4>
                    <ul className='list-unstyled'>
                      <li className="mb-3">
                        <NavLink
                          to="/admin_dashboard"
                          className={({ isActive }) =>
                            "text-decoration-none text-light d-flex align-items-center gap-2" + (isActive ? "  fw-bold shadow-sm p-2" : "")
                          }
                        ><i className="bi bi-grid-1x2-fill"></i>
                          DASHBOARD
                        </NavLink>
        
                      </li>
                      <li className="mb-3 ">
                        <NavLink
                          to="/manage_resource"
                          className={({ isActive }) =>
                            "text-decoration-none text-light d-flex align-items-center gap-2" + (isActive ? "  fw-bold shadow-sm p-2" : "")
                          }
                        ><i className="bi bi-gear-fill"></i>
                          RESOURCE MANAGEMENT
                        </NavLink>
                      </li>
                      <li className="mb-3 ">
                        <NavLink
                          to="/manage_booking"
                          className={({ isActive }) =>
                            "text-decoration-none text-light d-flex align-items-center gap-2" + (isActive ? " fw-bold shadow-sm p-2" : "")
                          }
                        ><i className="bi bi-calendar2-check-fill me-2"></i>
                          BOOKING MANAGEMENT
                        </NavLink>
                      </li>
                      <li className="mb-3 ">
                        <NavLink
                          to="/manage_user"
                          className={({ isActive }) =>
                            "text-decoration-none text-light d-flex align-items-center gap-2" + (isActive ? "  fw-bold shadow-sm p-2" : "")
                          }
                        ><i className="bi bi-people-fill me-2"></i>
                          USER MANAGEMENT
                        </NavLink>
                      </li>
                      <li className="mb-3 ">
                        <NavLink
                          to="/reporting"
                          className={({ isActive }) =>
                            "text-decoration-none text-light d-flex align-items-center gap-2" + (isActive ? " fw-bold shadow-sm p-2" : "")
                          }
                        ><i className="bi bi-bar-chart-fill me-2"></i>
                          REPORTING
                        </NavLink>
                      </li>
                      <li className="mb-3 ">
                        <NavLink
                          to="/maintenance"
                          className={({ isActive }) =>
                            "text-decoration-none text-light d-flex align-items-center gap-2" + (isActive ? " fw-bold shadow-sm p-2" : "")
                          }
                        ><i className="bi bi-tools me-2"></i>
                          MAINTANENCE
                        </NavLink>
                      </li>
                      <li className="mb-3 ">
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            "text-decoration-none text-light d-flex align-items-center gap-2" + (isActive ? "  fw-bold shadow-sm p-2" : "")
                          }
                        ><i className="bi bi-chat-dots-fill me-2"></i>
                          CHAT
                        </NavLink>
                      </li>
                      <li className="mb-3 ">
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            "text-decoration-none text-light d-flex align-items-center gap-2" + (isActive ? " fw-bold shadow-sm p-2" : "")
                          }
                        ><i className="bi bi-box-arrow-right me-2"></i>
                         LOGOUT
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
        
    </div>
  )
}

export default AdminDash