import React, { useState } from 'react'
import './Auth.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login({ xlog, setxlog, setEmailForArticle }) {
    const navigate = useNavigate()
    const [logCheck, setulogCheck] = useState(true)
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
    const login = (e) => {
        if (user.email && user.pass) {
            axios.post("http://localhost:5000/login", user).then((res) => {
                alert(res.data.message)
                if (res.data.message == "login successfully!") {
                    setEmailForArticle(user.email)
                    setxlog(!xlog)
                    navigate('/')
                }
            }
            )
        }
        setulogCheck(!logCheck)
    }
    return (
        <div>
            <div className=" container-fluid bg-danger login ">
                <div className="innerLog">
                    <div className="display-3 m-2 text-white  "> WelCome To NewsHub  </div>
                    <div className="display-6 m-2  "> Login  </div>
                    <div className="text-muted m-2 ">
                        Please Enter Your Email And Password
                    </div>
                    <div className="inp m-2 ">
                        <input type="email" name="email" id="" onChange={changeHandler} placeholder='Enter Your Email' required />
                    </div>
                    <div className="inp m-2 ">
                        <input type="password" name="pass" onChange={changeHandler} id="" placeholder='Enter Your Password' required />
                    </div>
                    <div onClick={login} className="m-2 btn btn-info"> Login</div>
                    <h4>Or</h4>
                    <Link to="/register"> <div className=" m-2 btn btn-info"> Register </div></Link>
                </div>
            </div>

        </div >
    )
}
export default Login