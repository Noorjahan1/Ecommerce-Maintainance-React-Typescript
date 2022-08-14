import * as React from 'react';
import Styles from "./Login.module.css"
function Login() {
    return (
        <>

            <div className={`${Styles.login} card mt-5 mx-5 p-5`}>
                <h1>Login</h1>
                <div className={Styles.Form}>
                    <div>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div>
                        <input type="password" placeholder='password' />
                    </div>

                    <button>Login</button>
                </div>
            </div>


        </>
    );
}

export default Login;