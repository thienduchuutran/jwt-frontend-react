import './App.scss';
import Nav from './components/Navigation/Nav';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from 'react';
import AppRoutes from './routes/AppRoute';

function App() {
  const [account, setAccount] = useState({})

  useEffect(()=> {
    let session = sessionStorage.getItem('account')
    if(session){
      setAccount(JSON.parse(session)) //parse to convert sessionStorage data into object so that we can account.isAuthenticated later
    }
  }, [])



  return (
    <Router>
      <div className='app-header'>
        <Nav/>
      </div>
      <div className='app-container'>
        <AppRoutes/>
      </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
    </Router>
  );
}

export default App;
