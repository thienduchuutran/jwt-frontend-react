import './Login.scss'

const Login = (props) => {
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