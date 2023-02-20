import { useState ,useRef,useContext } from 'react';
import TokenContext from '../../store/TokenContext';
import classes from './AuthForm.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const LogIn = () => {

  const [sentrequest,statusHandler]=useState(false);
  const emailInputRef=useRef();
  const passwordInputRef=useRef();
  const [isLogin, setIsLogin] = useState(true);
  const authctx=useContext(TokenContext);
 
  const navigate=useNavigate();
   const submitHandler=(event)=>
  {
    event.preventDefault();
    const enteredEmail=emailInputRef.current.value;
    const enteredPassword=passwordInputRef.current.value;
    
 fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDN4iNjO2zbFUxmYwSwoXCk68cOxrExcKE",
      {
        method:'POST',
        body:JSON.stringify({
          email:enteredEmail,
          password:enteredPassword,
          returnSecureToken:true
        }),
        headers:{
          'Content-Type':'application/json'
        }

      }).then(res=>{
        statusHandler(false)
        
        if(res.ok)
        {
          return res.json().then(data=>{
            
            authctx.login(data.idToken)
            authctx.setEmail(data.email);
            
         
          navigate('/store', {replace: true});
         
        
            }
          )
        }
        else{
          return res.json().then(data=>{
           alert(data.error.message)
          });
        }
      })
}

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required  ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>LOG IN</button>
         </div>
      </form>
    </section>
  );
};

export default LogIn;