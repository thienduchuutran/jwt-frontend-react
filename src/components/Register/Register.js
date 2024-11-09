import './Register.scss'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {toast} from 'react-toastify'
import { registerNewUser } from '../../services/userService';

const Register = (props) => {
    const[email, setEmail] = useState("")
    const[phone, setPhone] = useState("")
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[confirmPass, setConfirmPass] = useState("")
    const defaultValidInput = {
        isValidEmail: true,
        isValidPhone: true,
        isValidPassword: true,
        isValidConfirmPass: true
    }
    const[objCheckInput, setObjCheckInput] = useState(defaultValidInput)

    let history = useHistory()
    const handleLogin = () => {
        history.push("/login")
    }

    // useEffect(() => {
    // }, [])

    //validating
    const isValidInputs = () => {
        //we leaving this here so that before the app checks the validity of each field, all fields are valid first to avoid bugs
        setObjCheckInput(defaultValidInput)

        //now depends on these validation down here that whether a specific field is valid or no
        if(!email){
            setObjCheckInput({...defaultValidInput, isValidEmail: false})
            toast.error("Email is required!")
            return false
        }

        let regx = /\S+@\S+\.\S+/;
        if(!regx.test(email)){
            setObjCheckInput({...defaultValidInput, isValidEmail: false})
            toast.error("Please enter valid email address!")
            return false
        }

        if(!phone){
            setObjCheckInput({...defaultValidInput, isValidPhone: false})
            toast.error("Phone is required!")
            return false
        }
        if(!password){
            setObjCheckInput({...defaultValidInput, isValidPassword: false})
            toast.error("Password is required!")
            return false
        }
        if(password !== confirmPass){
            setObjCheckInput({...defaultValidInput, isValidConfirmPass: false})
            toast.error("Your password is not the same!")
            return false
        }


        return true
    }

    const handleRegister = () => {
        let check = isValidInputs()
        if(check){
            registerNewUser(email, phone, username, password)
        }
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
                            <input className={objCheckInput.isValidEmail ? 'form-control' : 'form-control is-invalid'} type='text' placeholder='Email address'
                                value={email} onChange={(event)=>setEmail(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Phone number:</label>
                            <input className={objCheckInput.isValidPhone ? 'form-control' : 'form-control is-invalid'} type='text' placeholder='Phone number' 
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
                            <input className={objCheckInput.isValidPassword ? 'form-control' : 'form-control is-invalid'} type='password' placeholder='Password' 
                                value={password} onChange={(event)=>setPassword(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Re-enter password:</label>
                            <input className={objCheckInput.isValidConfirmPass ? 'form-control' : 'form-control is-invalid'} type='password' placeholder='Re-enter your password' 
                                value={confirmPass} onChange={(event)=>setConfirmPass(event.target.value)}
                            />
                        </div>
                        <button className='btn btn-primary' type="button" onClick={()=>handleRegister()}>Register</button>

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