import * as React from 'react';
import Styles from "./SignUp.module.css"
// import { gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useAuth } from '../Authentication/hook/useAuth';
import authType, { user } from '../Authentication/hook/AuthType';

// const LOGIN_MUTATION = gql`
// mutation(
//   $email: String!
//   $password: String!
// ) {
//   tokenCreate(email:  $email, password: $password) {
//     token
//     refreshToken
//     csrfToken
//     user {
//       email
//     }
//     errors {
//       field
//       message
//     }
//   }
// }

// `

function SignUp() {
  const { login } = useAuth() as authType
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  // const [userName, setUserName] = useState()
  const [users, setUsers] = useState<user[]>([])
  const changeEmail = (event) => {
    setEmail(event.target.value)
  }
  const changePassword = (event) => {
    setPassword(event.target.value)
  }
  useEffect(
    () => {
      fetch("user.json", {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }

      })
        .then((response) => response.json())
        .then((data) => setUsers(data));

    },
    [])

  const Register = (email, password) => {
    const foundUser = users.find((user) => user.email === email)
    if (foundUser) {
      login({
        email, password, userName:foundUser.userName
      })
    }
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


