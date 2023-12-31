import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import log from '../Redux/Action'

function Navbar() {

    const id = useSelector((s) => s)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logout = async () => {
        localStorage.removeItem("id")
        dispatch(log())
        navigate('/')
    }

    const login = () => {
        navigate('/login')
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg text-white bg-dark">
                <div class=" text-white container-fluid">
                    <Link class="text-white navbar-brand" to="/">News Hub</Link>
                    <button class=" text-white navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class=" text-white navbar-toggler-icon">
                            <i className='fa fa-bars'  ></i>
                        </span>
                    </button>
                    <div class=" text-white collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class=" text-white navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class=" text-white nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class=" text-white nav-link" to="/Genral">Genral</Link>
                            </li>
                            <li class="nav-item">
                                <Link class=" text-white nav-link" to="/Business">Business</Link>
                            </li>
                            <li class="nav-item">
                                <Link class=" text-white nav-link" to="/Politics">Politics</Link>
                            </li>
                            <li class="nav-item">
                                <Link class=" text-white nav-link" to="/Health">Health</Link>
                            </li>
                            <li class="nav-item">
                                <Link class=" text-white nav-link" to="/Science">Science</Link>
                            </li>
                            <li class="nav-item">
                                <Link class=" text-white nav-link" to="/Sport">Sport</Link>
                            </li>
                            <li class="nav-item">
                                <Link class=" text-white nav-link" to="/Technology">Technology</Link>
                            </li>

                            {
                                id == null ? <li onClick={() => login()} class="nav-item">
                                    <Link class=" text-white nav-link">Login</Link>
                                </li> : <li onClick={() => logout()} class="nav-item">
                                    <Link class=" text-white nav-link" to="/Technology">Logout</Link>
                                </li>
                            }


                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar