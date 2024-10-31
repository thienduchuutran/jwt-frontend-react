import './Login.scss'

const Login = (props) => {
    return (
        <div className="login-container">
            <div className="container">
                <div className="row">
                    <div className="content-left col-7">
                        <div className='brand'>
                            Duc
                        </div>
                        <div className='detail'>
                            Learn everything...
                        </div>
                    </div>
                    <div className="content-right col-5 green d-flex flex-column gap-3 py-3">
                        <input className='form-control' type='text' placeholder='Email address or phone number'/>
                        <input className='form-control' type='password' placeholder='Password'/>
                        <button className='btn btn-primary'>Login</button>
                        <span className='text-center'>
                            <a className='forgot-password' href='#'>Forgot your password?</a>
                        </span>
                        <hr/>
                        <div className='text-center'>
                            <button className='btn-success'>Create New Account</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login