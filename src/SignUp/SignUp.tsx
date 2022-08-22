import * as React from 'react';
import Styles from "./SignUp.module.css"
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


const LOGIN_MUTATION = gql`
mutation(
  $email: String!
  $password: String!
) {
  tokenCreate(email:  $email, password: $password) {
    token
    refreshToken
    csrfToken
    user {
      email
    }
    errors {
      field
      message
    }
  }
}

`
function SignUp({ signIn, signOut }) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  let navigate = useNavigate();
  const [login] = useMutation(LOGIN_MUTATION);
  const changeEmail = (event) => {
    setEmail(event.target.value)
  }
  const changePassword = (event) => {
    setPassword(event.target.value)
  }


  const Register = (email, password) => {

    login(
      {
        variables: {
          email: email,
          password: password
        },
        onCompleted: ({ tokenCreate }) => {
          localStorage.setItem("AUTH_TOKEN", tokenCreate.token)
          signIn(email)
          navigate("/", { replace: true });

        }
      }
    )
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
              <button onClick={() => { Register(email, password) }} >Sign In</button>
            </div>

          </div>

        </div>
      </div>
    </>
  )

}

export default SignUp;


