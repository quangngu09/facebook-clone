import React from 'react'
import './Login.css'
//import { auth, provider} from "./firebase";
function Login() {
    // const signIn = () =>{
    //     auth.signInWithPopup(provider)
    //     .then((result) => {
    //         console.log(result)
    //     }).catch((error)=>alert(error.message));
    // }
    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                    alt=""
                />
            </div>
            {/* <button type="submit" onClick={signIn}>
                Sign In
            </button> */}
            <button type="submit">
                Sign In
            </button>
        </div>
    )
}

export default Login
