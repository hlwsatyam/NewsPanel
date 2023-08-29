import React, { useState } from 'react'
import './Auth.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
function Resigstration({ xlog, setxlog, setEmailForArticle }) {

    const [emailIsTrue, setEmailIsTrue] = useState(false)
    const navigate = useNavigate()

    const [user, setuser] = useState({
        name: "",
        email: "",
        pass: "",
        repass: ""
    })
    const changeHandler = (e) => {
        const { name, value } = e.target
        setuser({
            ...user, [name]: value
        })
    }
    const register = async () => {
        const { name, email, pass, repass } = user

        if (name && email && pass && pass === repass) {


            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            if (!emailRegex.test(user.email)) {
                setxlog(xlog)
                setEmailIsTrue(true)
            } else {
                axios.post("https://newsbackend-satyam.onrender.com/register", user).then(async (res) => {

                    if (res.data.message == "Successfully registered!") {
                        alert(await res.data.message)
                        setxlog(!xlog)
                        setEmailIsTrue(false)
                        setEmailForArticle(user.email)
                        navigate('/')

                    } else {
                        alert("Fill Correct Detail!")
                       

                    }
                }
                )
            }


        } else {
            setxlog(xlog)
            alert("invalid!")
        }
    }
    return (
        <div>
            <div className=" container-fluid bg-success login ">
                <div className="innerLog">
                    <div className="display-3 m-2 text-white  "> WelCome To NewsHub  </div>
                    <div className="display-6 m-2  "> Registraion  </div>
                    <div className="text-muted m-2 ">
                        Please Fill The Form
                    </div>
                    <div className="inp m-2 ">
                        <input type="text" name="name" id="" placeholder='Enter Your Name' onChange={changeHandler} required />
                    </div>
                    <div className="inp m-2 ">
                        <input type="email" name="email" id="" placeholder='Enter Your Email' onChange={changeHandler} required />
                    </div>

                    {
                        emailIsTrue ? <p className=' border w-50 m-auto  text-danger' >Email Error</p> : null
                    }

                    <div className="inp m-2 ">
                        <input type="password" name="pass" id="" placeholder='Enter Your Password' onChange={changeHandler} required />
                    </div>
                    <div className="inp m-2 ">
                        <input type="password" name="repass" id="" placeholder='Repeat Your Password' onChange={changeHandler} required />
                    </div>
                    <div className=" m-2 btn btn-info" onClick={register}    > Register </div>
                    <h4> Or </h4>
                    <Link to="/login"  ><div className=" m-2 btn btn-info"> Login </div></Link>
                </div>
            </div>
        </div>
    )
}
export default Resigstration