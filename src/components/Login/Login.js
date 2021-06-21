
import React from 'react'
import {Link,useHistory} from "react-router-dom";
import {auth} from "../../firebase"
import "./Login.css"
import largeLogo from "../../images/largeLogo.png"




const Login = () => {
    const history=useHistory();
    const [email,setEmail]=React.useState("")
    const [password,setPassword]=React.useState("")


    const login=(e)=>{
        e.preventDefault();
    
        auth.signInWithEmailAndPassword(email,password)
            .then(auth=>{
                history.push("/")
            })
            .catch(e=>alert(e.message))
    }
    
    const register=(e)=>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
            .then(auth=>{
                history.push("/")
            })
            .catch(e=>alert(e.message))
    }

    
    return (
        <div className="login">
            <Link to="/">
                <img src={largeLogo} alt="largeLogo" className="login__logo" />
            </Link>
            
            <div className="login__container">
                <h1>Sign in</h1>
                <form>

                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>

                    <button type="submit" className="login__signinButton" onClick={login}>Sign in</button>
                </form>

                <p>By continuing, you agree to Amazon's <Link to="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088">Conditions of Use</Link> and 
                <Link to="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">Privacy Notice</Link>.</p>

                <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
