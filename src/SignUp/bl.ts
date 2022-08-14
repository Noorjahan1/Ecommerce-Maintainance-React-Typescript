
import * as React from 'react';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import { useEffect } from 'react';
//{email,password}

export default function CustomerSignIn(email,password) {
  var customerInfo: object
    const Customer = gql`
     mutation  ($email:String!,$password:String!){
        accountRegister(
          input: { 
            email: $email
            password: $password
            channel: "default-channel"
          }
        ) {
          errors {
            field
            code
          }
          user {
            email
            isActive
          }
        }
      }
      `

    const [mutateFunction, { data, loading, error }] = useMutation(Customer);
    mutateFunction({variables:{email:email,password:password}})
   return  customerInfo = {
    userInfo: data,
    loading: loading,
    error: error
    }
 
}
