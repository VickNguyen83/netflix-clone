import React, {useState} from 'react'
import SignUpScreen from './SignUpScreen'
import "./LoginScreen.css"

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img className="loginScreen__logo" src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-2-1.png" alt=""/>
            </div>
            <button  className="loginScreen__button" onClick={ () => setSignIn(true)}>
                Sign In
            </button>
            <div className="loginScreen__gradient"></div>
            <div className="loginScreen__body">
            {signIn ? (
                <SignUpScreen/>
            ):(
                <>
                    <h1>unlimite movie and TV show and more to come</h1>
                    <h2> Watch anywhere. Cancle at any time.  </h2>
                    <h3>Ready to watch? Enter your email address to create or restart your membership.</h3>
                    <div className="loginScreen__input">
                        <form>
                            <input type="email" placeholder="Enter your email address.">
                            </input>
                            <button className="loginScreen__getStarted"
                            onClick={() => setSignIn(true)}>
                            GET STARTED</button>
                        </form>
                    </div>
                </>
            )
            }
            </div>
        </div>
    )
}

export default LoginScreen
