import React from 'react'
import { NavLink } from 'react-router-dom'

function Dash() {
    return (
        <div>
            <div className="col-md-2 bg-primary text-white min-vh-100 p-3">
                <h4><b>ASSET BOOKING</b></h4>
                <ul className="list-unstyled mt-4">
                    <li className="mb-3">
                        <NavLink
                            to="/user_dashboard"
                            className={({ isActive }) =>
                                "text-decoration-none text-light d-flex align-items-center gap-2" +
                                (isActive ? " fw-bold shadow-sm" : "")
                            }
                        >
                            <i className="bi bi-grid-1x2-fill"></i>
                            <span>DASHBOARD</span>
                        </NavLink>
                    </li>

                    <li className="mb-3 ">
                        <NavLink
                            to="/browse_resources"
                            className={({ isActive }) =>
                                "text-decoration-none text-light d-flex align-items-center gap-2" +
                                (isActive ? "text-dark fw-bold " : "")
                            }
                        ><i className="bi bi-search me-2"></i>
                            BROWSE RESOURCES
                        </NavLink>
                    </li>
                    <li className="mb-3 ">
                        <NavLink
                            to="/mybookings"
                            className={({ isActive }) =>
                                "text-decoration-none text-light d-flex align-items-center gap-2" + (isActive ? "text-dark fw-bold shadow-sm p-2" : "")
                            }
                        ><i className="bi bi-calendar2-check-fill me-2"></i>
                            MY BOOKINGS
                        </NavLink>
                    </li>
                    <li className="mb-3 ">
                        <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                "text-decoration-none text-light d-flex align-items-center gap-2" + (isActive ? "text-dark fw-bold shadow-sm p-2" : "")
                            }
                        ><i className="bi bi-people-fill me-2"></i>
                            PROFILE
                        </NavLink>
                    </li>
                    <li className="mb-3 ">
                        <NavLink
                            to="/chat"
                            className={({ isActive }) =>
                                "text-decoration-none text-light d-flex align-items-center gap-2" + (isActive ? "text-dark fw-bold shadow-sm p-2" : "")
                            }
                        ><i className="bi bi-chat-dots-fill me-2"></i>
                            CHAT
                        </NavLink>
                    </li>
                    <li className="mb-3 ">
                        <NavLink
                            to="/userlogin"
                            className={({ isActive }) =>
                                "text-decoration-none text-light d-flex align-items-center gap-2" + (isActive ? "text-dark fw-bold shadow-sm p-2" : "")
                            }
                        ><i className="bi bi-box-arrow-right me-2"></i>
                            LOGOUT
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Dash