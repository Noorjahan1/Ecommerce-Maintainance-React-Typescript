import * as React from 'react';
import Styles from "./SignUp.module.css"
import CustomerSignIn from '../bl';
import { useState } from 'react';
function SignUp() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const changeEmail = (event) => {
        setEmail(event.target.value)
    }
    const changePassword = (event) => {
        setPassword(event.target.value)
    }
    const register = () => {
        console.log(CustomerSignIn(email, password))
    }

    return (
        <>
            <div className={Styles.SignUp}>
                <div className={`${Styles.card} `}>
                    <div>
                        <label htmlFor="email">
                            <div className={` ${Styles.label}`}>
                                <p>Email:</p>
                                <input type="email" name="email" placeholder="Email" id="email" onChange={changeEmail} />
                            </div>

                        </label>
                        <label htmlFor='password'>
                            <div className={` ${Styles.label}`}>
                                <p>Password:</p>
                                <input type="password" name="password" placeholder="Password" id="password" onChange={changePassword} />
                            </div>

                        </label>
                        <div className={`mt-3 ${Styles.button}`}>
                            <button onClick={register}>Sign Up</button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default SignUp;


