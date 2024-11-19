import { useEffect, useState } from 'react';
import './Login.scss'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { toast } from 'react-toastify';
import { loginUser } from '../../services/userService';

const Login = (props) => {
    let history = useHistory()

    const [valueLogin, setValueLogin] = useState("")
    const [password, setPassword] = useState("")
    const defaultValidInput = {
        isValidLoginValue: true,
        isValidPassword: true,
    }
    const[objCheckInput, setObjCheckInput] = useState(defaultValidInput)

    const handleCreateNewAccount = () => {
        history.push("/register")
    }

    const handleLogin = async() => {
        setObjCheckInput(defaultValidInput)
        if(!valueLogin){
            setObjCheckInput({...defaultValidInput, isValidLoginValue: false})
            toast.error("Please enter your email address or phone number")
            return
        }

        if(!password){
            setObjCheckInput({...defaultValidInput, isValidPassword: false})
            toast.error("Please enter your password")
            return
        }

        let res = await loginUser(valueLogin, password)
        if(res && res.data && +res.data.EC !== 0){
            //error
            toast.error(res.data.EM)
        }else{
            let data = {
                isAuthenticated: true,
                token: 'fake token'
            }
            sessionStorage.setItem('account', JSON.stringify(data))
            history.push('/users')
            window.location.reload()    //location points to what page we currently at, this means reload /users
        }
    }

    const handlePressEnter = (event)=> {
        if(event.keyCode === 13 && event.code === "Enter"){
            handleLogin()
        }
    }

    //So that when user already logged in and tries to go back to loggin page, it pushes back to user home page
    useEffect(()=> {
        let session = sessionStorage.getItem('account')
        if(session){
            history.push("/")
            window.location.reload()
        }
    }, [])
    return (
        <div className="login-container">
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
                        <input 
                            className={objCheckInput.isValidLoginValue ? 'form-control' : 'form-control is-invalid' }
                            type='text' 
                            placeholder='Email address or phone number'
                            value={valueLogin}
                            onChange={(event)=>{setValueLogin(event.target.value)}} //gets the value of input field and returns
                        />
                        <input 
                            className={objCheckInput.isValidPassword ? 'form-control' : 'form-control is-invalid' }
                            type='password' 
                            placeholder='Password'
                            value={password}
                            onChange={(event)=>{setPassword(event.target.value)}}
                            onKeyDown={(event)=>handlePressEnter(event)}
                        />
                        <button 
                            className='btn btn-primary'
                            onClick={()=>handleLogin()}
                        >Login</button>
                        <span className='text-center'>
                            <a className='forgot-password' href='#'>Forgot your password?</a>
                        </span>
                        <hr/>
                        <div className='text-center'>
                            <button className='btn-success' onClick={()=> handleCreateNewAccount()}>
                                Create New Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login