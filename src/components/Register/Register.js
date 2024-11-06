import './Register.scss'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {toast} from 'react-toastify'

const Register = (props) => {
    const[email, setEmail] = useState("")
    const[phone, setPhone] = useState("")
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[confirmPass, setConfirmPass] = useState("")

    let history = useHistory()
    const handleLogin = () => {
        history.push("/login")
    }

    useEffect(() => {
        // axios.get("http://localhost:8085/api/test-api").then(data => {
        //     console.log('check data axios:', data)
        // })
    }, [])

    //validating
    const isValidInputs = () => {
        if(!email){
            toast.error("Email is required!")
            return false
        }
        if(!phone){
            toast.error("Phone is required!")
            return false
        }
        if(!password){
            toast.error("Password is required!")
            return false
        }
        if(password !== confirmPass){
            toast.error("Your password is not the same!")
            return false
        }

        let regx = /\S+@\S+\.\S+/;
        if(!regx.test(email)){
            toast.error("Please enter valid email address!")
            return false
        }
        return true
    }

    const handleRegister = () => {
        let check = isValidInputs()
        let userData = { email, phone, username, password}
        console.log('check: ', userData)
    }

    return (
        <div className="register-container">
            <div className="container">
                <div className="row px-3 px-sm-0">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block">
                        <div className='brand'>
                            Duc
                        </div>
                        <div className='detail'>
                            Learn everything...
                        </div>
                    </div>
                    <div className="content-right col-sm-5 col-12 green d-flex flex-column gap-3 py-3">
                        <div className='brand d-sm-none'>
                            Duc
                        </div>
                        <div className='form-group'>
                            <label>Email:</label>
                            <input className='form-control' type='text' placeholder='Email address'
                                value={email} onChange={(event)=>setEmail(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Phone number:</label>
                            <input className='form-control' type='text' placeholder='Phone number' 
                                value={phone} onChange={(event)=>setPhone(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Username:</label>
                            <input className='form-control' type='text' placeholder='Username' 
                                value={username} onChange={(event)=>setUsername(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Password:</label>
                            <input className='form-control' type='password' placeholder='Password' 
                                value={password} onChange={(event)=>setPassword(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Re-enter password:</label>
                            <input className='form-control' type='password' placeholder='Re-enter your password' 
                                value={confirmPass} onChange={(event)=>setConfirmPass(event.target.value)}
                            />
                        </div>
                        <button className='btn btn-primary'  type="button" onClick={()=>handleRegister()}>Register</button>

                        <hr />
                        <div className='text-center'>
                            <button className='btn-success' onClick={() => handleLogin()}>
                                Already have your account? Login!
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register