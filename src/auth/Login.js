import React, { useState } from 'react'
import './Auth.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import { useDispatch } from 'react-redux'
import log from '../Redux/Action'
function Login({ }) {

    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState("")

    const navigate = useNavigate()
    const [logCheck, setulogCheck] = useState(true)
    const [emailIsTrue, setEmailIsTrue] = useState(false)
    const [user, setuser] = useState({
        email: "",
        pass: "",
    })
    const changeHandler = (e) => {
        const { name, value } = e.target
        setuser({
            ...user, [name]: value
        })
    }
    const login = async (e) => {
        setIsLoading("grow")
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(user.email)) {
         setIsLoading("")    
            setEmailIsTrue(true)
        } else {
            setIsLoading("grow")
            await axios.post("https://newsbackend-satyam.onrender.com/login", user).then((res) => {
                // await axios.post("http://localhost:5000/login", user).then((res) => {


                if ((user.pass != "") && (res.data.message == "login successfully!")) {
                    localStorage.setItem("id", res.data.id)
                    dispatch(log())
                    //yy
                    setEmailIsTrue(false)
                    setIsLoading("grow")
                    navigate('/')
                } else {
                    alert("Please Check Your Email & Pass!")
                    setulogCheck(!logCheck)
                    setIsLoading("")
                }
            }
            )
        }
    }
    return (
        <div>
            <div className=" container-fluid bg-white login ">
                <div className="innerLog">
                    <div className="display-3 m-2 text-white  "> WelCome To NewsHub  </div>
                    <div className="display-6 m-2  "> Login  </div>
                    <div className="text-muted m-2 ">
                        Please Enter Your Email And Password
                    </div>
                    <div className="inp m-2 ">
                        <input type="email" name="email" id="" onChange={changeHandler} placeholder='Enter Your Email' required />

                    </div>
                    {
                        emailIsTrue ? <p className=' border w-50 m-auto  text-danger' >Email Error</p> : null
                    }
                    <div className="inp m-2 ">
                        <input type="password" name="pass" onChange={changeHandler} id="" placeholder='Enter Your Password' required />
                    </div>

                    <Button className="m-2" onClick={login} variant="primary" >
                        <Spinner
                            as="span"
                            animation={isLoading}
                            size="sm"
                            role="status"
                            aria-hidden="false"
                        />
                        Login
                    </Button>


                    <h4>Or</h4>
                    <Link to="/register">
                        <div className=" m-2 btn btn-info"> Register </div>

                    </Link>
                </div>
            </div>

        </div >
    )
}
export default Login